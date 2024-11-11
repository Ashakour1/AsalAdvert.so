import { ArrowRight, Code, Pen, ThumbsUp } from "lucide-react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      icon: <Pen className="w-8 h-8" />,
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
      href: "/services/graphic-design",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      description:
        "Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
      href: "/services/software-development",
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description:
        "Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
      href: "/services/digital-marketing",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-sm font-medium tracking-wide uppercase text-blue-600">
            Our Services
          </h2>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Let us empower your journey
            <br />
            <span className="text-blue-600">to success</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="font-bold text-xl text-blue-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href={service.href}
                className="inline-flex items-center text-blue-600 hover:underline font-medium"
              >
                Explore
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
