import Image from "next/image";
import Link from "next/link";

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
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium tracking-wide uppercase text-blue-600 mb-2">
            Portfolio
          </h2>
          <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
            Some of our <span className="text-blue-600">recent</span> work
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
