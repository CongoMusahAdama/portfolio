
import { Mail, Phone, MapPin } from "lucide-react";

const AboutSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-orange-500" />,
      label: "Email",
      value: "amusahcongo@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-orange-500" />,
      label: "Phone",
      value: "+233 53 187 8243",
    },
    {
      icon: <MapPin className="w-5 h-5 text-orange-500" />,
      label: "Location",
      value: "Takoradi, Ghana",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto slide-in">
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            I'm a self-taught backend engineer with strong expertise in Python, Node.js, FastAPI, Django, and Laravel. I love building robust APIs, microservices, and cloud-connected systems. I'm based in Takoradi, Ghana, and always open to collaboration.
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-orange-50 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="font-medium text-gray-700 mb-1">{item.label}</h3>
                <p className="text-gray-600 text-center">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
