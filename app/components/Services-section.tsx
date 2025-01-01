import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Code,
  Palette,
  Pen,
  ThumbsUp,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import HighlightedText from "./ui/HighlightedText";

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8 text-blue-500" />,
      title: "Graphic Design",
      subtitle: "&Branding",
    },
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Web",
      subtitle: "Development",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: "Digital",
      subtitle: "Marketing",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Event",
      subtitle: "Branding",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Personal",
      subtitle: "Branding",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-500" />,
      title: "Business",
      subtitle: "Development",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <HighlightedText
            className="border border-foreground text-foreground text-base font-medium"
            text="Services"
          />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-5xl">
            Let us empower your journey
            <br />
            <span className="text-blue-600">to success</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-24 gap-6 mt-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-1">
                {service.title}
              </h3>
              <p className="text-xl text-gray-900">{service.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
