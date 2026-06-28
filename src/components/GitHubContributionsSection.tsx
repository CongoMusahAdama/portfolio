import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import {
  ArrowLeft,
  BarChart3,
  ChevronDown,
  ExternalLink,
  GitBranch,
  Github,
  GitPullRequest,
  Search,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const GITHUB_USERNAME = "CongoMusahAdama";
const CONTRIBUTIONS_API = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`;

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

type ContributionsResponse = {
  contributions: ContributionDay[];
  total?: Record<string, number>;
};

type GitHubUser = {
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  avatar_url: string;
  login: string;
};

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  updated_at: string;
};

type GitHubEvent = {
  id: string;
  type: string;
  created_at: string;
  repo: { name: string; url: string };
  payload?: {
    ref?: string;
    action?: string;
    commits?: { message: string }[];
  };
};

const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const LEVEL_COLORS = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const fetchContributions = async (
  year: number | "last"
): Promise<ContributionsResponse> => {
  const response = await fetch(`${CONTRIBUTIONS_API}?y=${year}`);
  if (!response.ok) throw new Error("Failed to load contributions");
  return response.json();
};

const fetchGitHubUser = async (): Promise<GitHubUser> => {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}`
  );
  if (!response.ok) throw new Error("Failed to load GitHub profile");
  return response.json();
};

const fetchRecentRepos = async (): Promise<GitHubRepo[]> => {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`
  );
  if (!response.ok) throw new Error("Failed to load repositories");
  const repos: GitHubRepo[] = await response.json();
  return repos.filter((repo) => !repo.fork).slice(0, 8);
};

const fetchPublicEvents = async (): Promise<GitHubEvent[]> => {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=20`
  );
  if (!response.ok) throw new Error("Failed to load activity");
  return response.json();
};

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatRelativeTime = (iso: string) => {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
};

const describeEvent = (event: GitHubEvent) => {
  const repo = event.repo.name.replace(`${GITHUB_USERNAME}/`, "");
  switch (event.type) {
    case "PushEvent": {
      const count = event.payload?.commits?.length ?? 0;
      return count > 0
        ? `Pushed ${count} commit${count === 1 ? "" : "s"} to ${repo}`
        : `Pushed to ${repo}`;
    }
    case "PullRequestEvent":
      return `${event.payload?.action ?? "Updated"} pull request in ${repo}`;
    case "IssuesEvent":
      return `${event.payload?.action ?? "Updated"} issue in ${repo}`;
    case "CreateEvent":
      return `Created ${event.payload?.ref?.includes("refs/heads") ? "branch" : "resource"} in ${repo}`;
    case "WatchEvent":
      return `Starred ${repo}`;
    case "ForkEvent":
      return `Forked ${repo}`;
    default:
      return `${event.type.replace("Event", "")} in ${repo}`;
  }
};

const buildWeeks = (contributions: ContributionDay[]) => {
  if (!contributions.length) return [] as ContributionDay[][];

  const byDate = new Map(contributions.map((day) => [day.date, day]));
  const end = new Date(
    `${contributions[contributions.length - 1].date}T00:00:00`
  );

  const gridStart = new Date(`${contributions[0].date}T00:00:00`);
  gridStart.setDate(gridStart.getDate() - gridStart.getDay());

  const weeks: ContributionDay[][] = [];
  const cursor = new Date(gridStart);

  while (weeks.length === 0 || cursor <= end) {
    const week: ContributionDay[] = [];

    for (let i = 0; i < 7; i += 1) {
      const iso = formatDate(cursor);
      week.push(
        byDate.get(iso) ?? {
          date: iso,
          count: 0,
          level: 0,
        }
      );
      cursor.setDate(cursor.getDate() + 1);
    }

    weeks.push(week);
  }

  return weeks;
};

const getMonthPositions = (weeks: ContributionDay[][]) => {
  const positions: { label: string; weekIndex: number }[] = [];
  let lastMonth = -1;

  weeks.forEach((week, weekIndex) => {
    const firstDay = week.find((day) => day.date);
    if (!firstDay) return;

    const month = new Date(`${firstDay.date}T00:00:00`).getMonth();
    if (month !== lastMonth) {
      positions.push({ label: MONTH_LABELS[month], weekIndex });
      lastMonth = month;
    }
  });

  return positions;
};

const GitHubContributionsSection = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  const availableYears = useMemo(
    () => [currentYear, currentYear - 1, currentYear - 2, currentYear - 3],
    [currentYear]
  );
  const [selectedYear, setSelectedYear] = useState<number | "last">("last");
  const [activeTab, setActiveTab] = useState("contributions");

  const { data: user, isLoading: userLoading } = useQuery({
    queryKey: ["github-user", GITHUB_USERNAME],
    queryFn: fetchGitHubUser,
    staleTime: 1000 * 60 * 30,
  });

  const { data: contributionsData, isLoading: contributionsLoading } = useQuery(
    {
      queryKey: ["github-contributions", GITHUB_USERNAME, selectedYear],
      queryFn: () => fetchContributions(selectedYear),
      staleTime: 1000 * 60 * 15,
    }
  );

  const { data: repos, isLoading: reposLoading } = useQuery({
    queryKey: ["github-repos", GITHUB_USERNAME],
    queryFn: fetchRecentRepos,
    staleTime: 1000 * 60 * 30,
  });

  const { data: events, isLoading: eventsLoading } = useQuery({
    queryKey: ["github-events", GITHUB_USERNAME],
    queryFn: fetchPublicEvents,
    staleTime: 1000 * 60 * 15,
  });

  const weeks = useMemo(
    () => buildWeeks(contributionsData?.contributions ?? []),
    [contributionsData]
  );
  const monthPositions = useMemo(() => getMonthPositions(weeks), [weeks]);

  const totalContributions = useMemo(() => {
    if (!contributionsData?.contributions.length) return 0;
    return contributionsData.contributions.reduce(
      (sum, day) => sum + day.count,
      0
    );
  }, [contributionsData]);

  const activeDays = useMemo(() => {
    if (!contributionsData?.contributions.length) return 0;
    return contributionsData.contributions.filter((day) => day.count > 0).length;
  }, [contributionsData]);

  const bestDay = useMemo(() => {
    if (!contributionsData?.contributions.length) return 0;
    return Math.max(...contributionsData.contributions.map((day) => day.count));
  }, [contributionsData]);

  const yearLabel =
    selectedYear === "last" ? "the last year" : String(selectedYear);
  const resolvedTheme =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;
  const palette =
    resolvedTheme === "dark" ? LEVEL_COLORS.dark : LEVEL_COLORS.light;

  const sidebarStats = [
    {
      label: "Contributions",
      value: contributionsLoading ? "..." : totalContributions.toLocaleString(),
      hint: yearLabel,
      icon: GitBranch,
    },
    {
      label: "Public Repos",
      value: userLoading ? "..." : String(user?.public_repos ?? 0),
      hint: "open source",
      icon: Github,
    },
    {
      label: "Active Days",
      value: contributionsLoading ? "..." : String(activeDays),
      hint: "with commits",
      icon: BarChart3,
    },
    {
      label: "Best Day",
      value: contributionsLoading ? "..." : String(bestDay),
      hint: "contributions",
      icon: GitPullRequest,
    },
  ];

  const tabs = [
    { id: "contributions", label: "Contributions", icon: BarChart3 },
    { id: "repos", label: "Repositories", icon: Github },
    { id: "activity", label: "Activity", icon: GitPullRequest },
  ];

  const renderContributionsPanel = () => (
    <>
      <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6 mb-6">
        <div>
          <h2 className="text-lg md:text-xl font-black tracking-tight text-foreground">
            {contributionsLoading
              ? "Loading contributions..."
              : `${totalContributions.toLocaleString()} contributions in ${yearLabel}`}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl">
            A live snapshot of my coding activity on GitHub — commits, pull
            requests, issues, and reviews over time.
          </p>
        </div>

        <div className="flex flex-col items-start xl:items-end gap-2 shrink-0">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Year
          </span>
          <div className="flex flex-col gap-1">
            <button
              type="button"
              onClick={() => setSelectedYear("last")}
              className={`rounded-lg px-3 py-1.5 text-sm font-semibold text-left transition-colors ${
                selectedYear === "last"
                  ? "bg-[#0969da] text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Last year
            </button>
            {availableYears.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setSelectedYear(year)}
                className={`rounded-lg px-3 py-1.5 text-sm font-semibold text-left transition-colors ${
                  selectedYear === year
                    ? "bg-[#0969da] text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border/50 bg-card p-4 md:p-5 overflow-x-auto">
        {contributionsLoading ? (
          <div className="h-[132px] flex items-center justify-center text-sm text-muted-foreground">
            Fetching contribution graph...
          </div>
        ) : (
          <div className="min-w-[720px]">
            <div className="grid grid-cols-[auto_1fr] gap-x-3">
              <div />
              <div className="relative h-4 mb-2">
                {monthPositions.map(({ label, weekIndex }) => (
                  <span
                    key={`${label}-${weekIndex}`}
                    className="absolute text-[11px] font-medium text-muted-foreground"
                    style={{ left: `${weekIndex * 14}px` }}
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="grid grid-rows-7 gap-[3px] pt-[2px]">
                {DAY_LABELS.map((day, index) => (
                  <span
                    key={day}
                    className={`h-[11px] text-[10px] leading-none text-muted-foreground ${
                      index % 2 === 0 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {day}
                  </span>
                ))}
              </div>

              <div className="grid grid-flow-col auto-cols-[11px] gap-[3px]">
                {weeks.map((week, weekIndex) => (
                  <div
                    key={`week-${weekIndex}`}
                    className="grid grid-rows-7 gap-[3px]"
                  >
                    {week.map((day) => {
                      const level = Math.min(Math.max(day.level, 0), 4);
                      return (
                        <div
                          key={day.date}
                          title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                          className="h-[11px] w-[11px] rounded-[2px] border border-black/5 dark:border-white/5"
                          style={{ backgroundColor: palette[level] }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] text-muted-foreground">
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
              >
                Learn how we count contributions
                <ChevronDown className="w-3 h-3" />
              </a>
              <div className="flex items-center gap-2">
                <span>Less</span>
                {palette.map((color) => (
                  <span
                    key={color}
                    className="h-[11px] w-[11px] rounded-[2px] border border-black/5 dark:border-white/5"
                    style={{ backgroundColor: color }}
                  />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );

  const renderReposPanel = () => (
    <div className="space-y-3">
      <div className="mb-6">
        <h2 className="text-lg md:text-xl font-black tracking-tight text-foreground">
          {reposLoading
            ? "Loading repositories..."
            : `${user?.public_repos ?? repos?.length ?? 0} public repositories`}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-xl">
          Recently updated open-source projects from my GitHub profile.
        </p>
      </div>

      {reposLoading ? (
        <div className="space-y-3">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-20 rounded-2xl border border-border/50 bg-card animate-pulse"
            />
          ))}
        </div>
      ) : repos && repos.length > 0 ? (
        <ul className="space-y-3">
          {repos.map((repo) => (
            <li key={repo.id}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-2xl border border-border/50 bg-card px-4 py-4 hover:border-brand-orange/40 hover:bg-brand-orange/5 transition-colors"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-brand-orange shrink-0" />
                    <span className="font-semibold text-foreground group-hover:text-brand-orange transition-colors truncate">
                      {repo.name}
                    </span>
                  </div>
                  {repo.description && (
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2 sm:line-clamp-1 pl-6">
                      {repo.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-4 shrink-0 text-xs text-muted-foreground pl-6 sm:pl-0">
                  {repo.language && <span>{repo.language}</span>}
                  {repo.stargazers_count > 0 && (
                    <span className="inline-flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {repo.stargazers_count}
                    </span>
                  )}
                  <span>{formatRelativeTime(repo.updated_at)}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted-foreground">No repositories found.</p>
      )}
    </div>
  );

  const renderActivityPanel = () => (
    <div className="space-y-3">
      <div className="mb-6">
        <h2 className="text-lg md:text-xl font-black tracking-tight text-foreground">
          {eventsLoading ? "Loading activity..." : "Recent public activity"}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-xl">
          Latest pushes, pull requests, and events from my GitHub timeline.
        </p>
      </div>

      {eventsLoading ? (
        <div className="space-y-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-14 rounded-2xl border border-border/50 bg-card animate-pulse"
            />
          ))}
        </div>
      ) : events && events.length > 0 ? (
        <ul className="space-y-2">
          {events.map((event) => (
            <li
              key={event.id}
              className="flex items-start gap-3 rounded-2xl border border-border/50 bg-card px-4 py-3"
            >
              <div className="mt-0.5 w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                <GitPullRequest className="w-3.5 h-3.5 text-brand-orange" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-foreground font-medium leading-snug">
                  {describeEvent(event)}
                </p>
                <a
                  href={event.repo.url.replace("api.github.com/repos", "github.com")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-brand-orange transition-colors mt-0.5 inline-block truncate max-w-full"
                >
                  {event.repo.name}
                </a>
              </div>
              <span className="text-[11px] text-muted-foreground shrink-0 pt-0.5">
                {formatRelativeTime(event.created_at)}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted-foreground">No recent activity found.</p>
      )}
    </div>
  );

  return (
    <section
      id="activity"
      className="relative py-16 md:py-24 bg-muted/30 overflow-hidden border-t border-border/40"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto"
        >
          <div className="rounded-[20px] sm:rounded-[28px] border border-border/60 bg-card shadow-[0_24px_80px_-32px_rgba(15,23,42,0.18)] overflow-hidden">
            <div className="px-4 md:px-6 py-4 border-b border-border/50 bg-card/80">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <button
                    type="button"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 hover:bg-muted/60 transition-colors"
                    aria-label="Back"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <span className="font-medium">Open Source</span>
                  <span className="text-border">/</span>
                  <div className="inline-flex items-center gap-2 text-foreground font-semibold">
                    <Github className="w-4 h-4 text-brand-orange" />
                    {GITHUB_USERNAME}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex -space-x-2">
                    {[user?.avatar_url].filter(Boolean).map((avatar) => (
                      <img
                        key={avatar}
                        src={avatar}
                        alt={GITHUB_USERNAME}
                        className="h-8 w-8 rounded-full border-2 border-card object-cover"
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                    aria-label="Search"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full h-9 px-4 text-xs font-semibold border-border/60"
                  >
                    <a
                      href={
                        user?.html_url ??
                        `https://github.com/${GITHUB_USERNAME}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                      <ExternalLink className="w-3.5 h-3.5 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                        isActive
                          ? "bg-foreground text-background"
                          : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)]">
              <aside className="border-b lg:border-b-0 lg:border-r border-border/50 bg-muted/20 p-4 md:p-5">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                {sidebarStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-border/50 bg-card px-4 py-4 shadow-sm"
                    >
                      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        <Icon className="w-3.5 h-3.5 text-brand-orange" />
                        {stat.label}
                      </div>
                      <div className="mt-3 text-2xl font-black tracking-tight text-foreground">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {stat.hint}
                      </div>
                    </div>
                  );
                })}
                </div>
              </aside>

              <div className="p-4 md:p-6 lg:p-8">
                {activeTab === "contributions" && renderContributionsPanel()}
                {activeTab === "repos" && renderReposPanel()}
                {activeTab === "activity" && renderActivityPanel()}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubContributionsSection;
