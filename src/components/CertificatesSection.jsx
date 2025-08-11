import { ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Supervised Machine Learning",
    description: "DeepLearning.AI",
    image: "/certificates/cert-1.png",
    tags: ["Machine Learning", "Supervised", "Calculus"],
    demoUrl: "https://coursera.org/share/25542ae22438cb47588e3807c0d9770e",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Machine Learning",
    description: "Stanford University",
    image: "/certificates/cert-2.png",
    tags: [
      "Machine Learning",
      "Octave",
      "Unsupervised",
      "Reinforcement Learning",
    ],
    demoUrl: "https://coursera.org/share/bedd4184a16d0fc0d3c98403bda5b5da",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Introduction to Web Development",
    description: "UC Davis",
    image: "/certificates/cert-3.png",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
    demoUrl: "https://coursera.org/share/e0606a0bd99d2cb5ae562cbbd72265c9",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Frontend UI Frameworks & Tools",
    description: "The Hong Kong University of Science and Technology",
    image: "/certificates/cert-4.png",
    tags: ["Bootstrap", "React", "Node.js", "Angular"],
    demoUrl: "https://coursera.org/share/0e85a2a9d444222d2e9f8f83cd0b8027",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Salesforce Developer",
    description: "Salesforce - AICTE",
    image: "/certificates/cert-5.png",
    tags: ["Apex", "APIs", "Lightning Web Components", "Javascript"],
    demoUrl:
      "https://drive.google.com/file/d/1dT1yuOBr1_MKuzS_e3Zw2CnejRVdiVl5/view?usp=sharing",
    githubUrl: "",
  },
];

export const CertificatesSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Certified <span className="text-primary"> Awesome ! </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my certificates which are certified by top
          universities and professors in the world !!!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    // eslint-disable-next-line react/jsx-key
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
