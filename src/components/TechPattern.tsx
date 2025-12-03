const TechPattern = () => {
    return (
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            {/* Left side - denser geometric network */}
            <g stroke="white" fill="none" strokeWidth="1.5">
                {/* Main triangular network - left side */}
                <polygon points="50,80 150,40 120,180" opacity="0.6" />
                <polygon points="150,40 250,100 120,180" opacity="0.5" />
                <polygon points="50,80 120,180 20,220" opacity="0.4" />
                <polygon points="120,180 250,100 280,240" opacity="0.5" />
                <polygon points="250,100 350,60 280,240" opacity="0.4" />
                <polygon points="150,40 350,60 250,100" opacity="0.3" />
                <polygon points="20,220 120,180 80,320" opacity="0.4" />
                <polygon points="120,180 280,240 80,320" opacity="0.3" />

                {/* Additional connecting lines */}
                <line x1="50" y1="80" x2="350" y2="60" opacity="0.2" />
                <line x1="20" y1="220" x2="280" y2="240" opacity="0.2" />
                <line x1="150" y1="40" x2="80" y2="320" opacity="0.15" />
            </g>

            {/* Center - sparse geometric elements */}
            <g stroke="white" fill="none" strokeWidth="1.5">
                <polygon points="450,120 550,180 480,280" opacity="0.3" />
                <polygon points="550,180 650,140 600,260" opacity="0.25" />
                <polygon points="480,280 600,260 520,360" opacity="0.2" />
                <line x1="450" y1="120" x2="650" y2="140" opacity="0.15" />
                <line x1="480" y1="280" x2="650" y2="140" opacity="0.1" />
            </g>

            {/* Right side - very sparse, fading out */}
            <g stroke="white" fill="none" strokeWidth="1.2">
                <polygon points="750,100 850,160 780,240" opacity="0.2" />
                <polygon points="850,160 920,120 900,220" opacity="0.15" />
                <line x1="750" y1="100" x2="920" y2="120" opacity="0.1" />
                <line x1="780" y1="240" x2="900" y2="220" opacity="0.08" />
            </g>

            {/* Connection nodes (small circles at vertices) */}
            <g fill="white">
                {/* Left side nodes */}
                <circle cx="50" cy="80" r="4" opacity="0.7" />
                <circle cx="150" cy="40" r="4" opacity="0.7" />
                <circle cx="120" cy="180" r="4" opacity="0.6" />
                <circle cx="250" cy="100" r="4" opacity="0.6" />
                <circle cx="350" cy="60" r="4" opacity="0.5" />
                <circle cx="280" cy="240" r="4" opacity="0.5" />
                <circle cx="20" cy="220" r="4" opacity="0.5" />
                <circle cx="80" cy="320" r="4" opacity="0.4" />

                {/* Center nodes */}
                <circle cx="450" cy="120" r="3.5" opacity="0.4" />
                <circle cx="550" cy="180" r="3.5" opacity="0.3" />
                <circle cx="650" cy="140" r="3.5" opacity="0.3" />
                <circle cx="480" cy="280" r="3.5" opacity="0.25" />

                {/* Right side nodes */}
                <circle cx="750" cy="100" r="3" opacity="0.25" />
                <circle cx="850" cy="160" r="3" opacity="0.2" />
                <circle cx="920" cy="120" r="3" opacity="0.15" />
            </g>
        </svg>
    );
};

export default TechPattern;
