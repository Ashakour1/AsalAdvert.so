import {
  BarChart3,
  Briefcase,
  Code,
  Palette,
  TrendingUp,
  Users,
} from "lucide-react";
import HighlightedText from "../components/ui/HighlightedText";
import CompanySnapshot from "../components/Company-snapshot-section";

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
    <section className="w-full h-full bg-[#e9f2f6]">
      <div className="bg-[url(/header-image.png)] flex flex-col justify-center items-center h-[400px] mx-auto py-20">
        <HighlightedText
          className="border border-white text-white text-base font-medium"
          text="Services"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-24 gap-6 py-12">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
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
      <CompanySnapshot className="bg-[#e9f2f6]" />
    </section>
  );
};

export default Services;
