import { useState } from "react";
import { ArrowRight, Github, FileText, Brain, Code } from "lucide-react";

const projectsData = [
  // Development Projects
  {
    id: 1,
    title: "Subscription Manager",
    description:
      "A beautiful IoS application to manage the subscriptions and expenses.",
    image: "/projects/project1.png",
    tags: ["Ios Application", "Swift", "Google Auth", "AI"],
    demoUrl: "#",
    githubUrl: "https://github.com/srithik2002/Subscription-Manager",
    category: "development",
  },
  {
    id: 2,
    title: "Tetuan City Power Consumption Data Analysis",
    description: "A R-Language based analysis based on inferential statistics",
    image: "/projects/project2.png",
    tags: ["R", "Data Analysis", "Statistics"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/srithik2002/Teteuan_City_Power_Consumption_Data-Analysis",
    category: "development",
  },
  {
    id: 3,
    title: "Campus Vitality - Insurance Management Platform",
    description:
      "Full-featured insurance platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/srithik2002/Campus-Vitality---Insurance-Management-System",
    category: "development",
  },
  {
    id: 4,
    title: "Automobile Management System",
    description:
      "WebSocket-based chat application with end-to-end encryption and file sharing.",
    image: "/projects/project4.png",
    tags: ["Java", "Ecosystem", "Database"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/srithik2002/Automobile_Management_System-AED",
    category: "development",
  },

  // Research Projects - No images
  {
    id: 5,
    title: "Android Malware Detection using Neural Networks",
    description:
      "Developed a neural network model that improved Android malware detection accuracy using Androguard",
    tags: [
      "Neural Networks",
      "Python",
      "TensorFlow",
      "Android Security",
      "Androguard",
    ],
    paperUrl:
      "https://books.google.com/books?hl=en&lr=&id=08ZGEQAAQBAJ&oi=fnd&pg=PA241&ots=Icmv4F19dH&sig=OCvW-hLP-4Zq80L6562cm9jtWPM#v=onepage&q&f=false",
    codeUrl: "#",
    category: "research",
    metrics: "25% accuracy improvement",
  },
  {
    id: 6,
    title:
      "SMOTE employed Machine Learning Classifier Models to DDoS Attack Detection",
    description:
      "A performance review on the different machine learning algorithms to detect DDoS attack.",
    tags: ["Hadoop", "MapReduce", "ML Algorithms", "Network Security"],
    paperUrl: "https://ijritcc.org/index.php/ijritcc/article/view/8862/6877",
    codeUrl: "#",
    category: "research",
    metrics: "5 different Machine Learning Algorithms",
  },
];

const categories = [
  { id: "all", name: "All Projects", icon: null },
  { id: "development", name: "Development", icon: Code },
  { id: "research", name: "Research", icon: Brain },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projectsData.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Project Pitstops
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {" "}
            & Research Milestones
          </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my development projects and research contributions. Each
          work represents dedication to innovation and problem-solving.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2
                  ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105"
                      : "bg-white/10 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-purple-600/50"
                  }
                `}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-gray-900/50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in border border-gray-200 dark:border-gray-800"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Type Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span
                  className={`
                  px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm
                  ${
                    project.category === "research"
                      ? "bg-purple-600/90 text-white"
                      : "bg-blue-600/90 text-white"
                  }
                `}
                >
                  {project.category === "research" ? "Research" : "Development"}
                </span>
              </div>

              {/* Image Container - Only for development projects */}
              {project.image && (
                <div className="h-48 overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}

              {/* Research project visual placeholder */}
              {project.category === "research" && (
                <div className="h-48 overflow-hidden bg-gradient-to-br from-purple-600/10 to-blue-600/10 dark:from-purple-600/20 dark:to-blue-600/20 flex items-center justify-center">
                  <Brain className="w-24 h-24 text-purple-600/30 dark:text-purple-400/30" />
                </div>
              )}

              {/* Content */}
              <div className="p-6 pb-16">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics for research projects */}
                {project.metrics && (
                  <div className="mb-4 text-sm font-medium text-purple-600 dark:text-purple-400">
                    📊 {project.metrics}
                  </div>
                )}

                {/* Action Links - Fixed to bottom-left */}
                <div className="absolute bottom-6 left-6">
                  {project.category === "development" ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  ) : (
                    <a
                      href={project.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                      title="Read Paper"
                    >
                      <FileText size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-muted-foreground">Want to see more of my work?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/srithik2002"
            >
              <Github size={18} />
              View GitHub Profile
              <ArrowRight size={16} />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium border border-purple-600 text-purple-600 hover:bg-purple-600/10 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://scholar.google.com/citations?user=UErxGCkAAAAJ&hl=en"
            >
              <FileText size={18} />
              Research Publications
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </section>
  );
};
