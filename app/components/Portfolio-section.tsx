import Image from "next/image";
import Link from "next/link";
import HighlightedText from "./ui/HighlightedText";

const Portfolio = () => {
  const projects = [
    {
      id: "01",
      name: "NAME OF PROJECT",
      image: "/project.jpg",
      href: "/projects/01",
    },
    {
      id: "02",
      name: "NAME OF PROJECT",
      image: "/project.jpg",
      href: "/projects/02",
    },
    {
      id: "03",
      name: "NAME OF PROJECT",
      image: "/project.jpg",
      href: "/projects/03",
    },
    {
      id: "04",
      name: "NAME OF PROJECT",
      image: "/project.jpg",
      href: "/projects/04",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-20 ">
      <div className="container mx-auto px-4 md:px-6 space-y-4">
        <div className="flex flex-col items-center justify-center space-y-10 text-center py-6">
          <HighlightedText
            className="border border-foreground text-foreground text-base font-medium"
            text="Our Portfolio "
          />
          <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
            Complete <span className="text-foreground">Projects</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-24 gap-6 mb-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group block  bg-gray-400 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative border aspect-[2/1]">
                <Image
                  src={project.image}
                  alt={`Project ${project.id}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold mb-1">PROJECT {project.id}</h4>
                <p className="text-gray-600 text-sm">{project.name}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-block px-6 py-3 bg-foreground text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
