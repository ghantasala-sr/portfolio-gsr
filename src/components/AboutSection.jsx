import { Briefcase, Calendar, MapPin } from "lucide-react";

export const AboutSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Research Assistant",
      company: "Research Facility at CVR",
      location: "Hyderabad, India",
      duration: "July 2023 - May 2024",
      description: [
        "Worked as a research assistant on Android malware detection using neural networks, improving detection accuracy by 25% and helping to protect millions of Android users from malware threats by leveraging machine learning algorithms to identify malicious applications",
        "Collaborated with a professor and a research team on DDoS attack detection, utilizing big data technologies such as Hadoop and MapReduce alongside data management techniques and machine learning algorithms to enhance detection capabilities",
      ],
    },
    {
      id: 2,
      title: "Full Stack Developer Intern",
      company: "AIThinkers",
      location: "Hyderabad, India",
      duration: "Jan 2023 - Dec 2023",
      description: [
        "Developed and maintained scalable web applications, optimizing API calls and database queries, resulting in a 30% improvement in overall performance",
        "Worked closely with backend teams to optimize database queries (MySQL, MongoDB) by implementing indexing, query refactoring, and caching strategies, resulting in a 15% reduction in page load times",
      ],
    },
  ];

  return (
    <section
      id="work-experience"
      className="py-24 px-4 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Career Checkpoints
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {" "}
            - Work Experience
          </span>
        </h2>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-600/20 via-purple-600/40 to-blue-600/20 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-12 last:mb-0">
              {/* Timeline connector dot - hidden on mobile */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden md:block">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-ping"></div>
              </div>

              <div
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Visual element for alternating layout on desktop */}
                <div
                  className={`hidden md:block ${
                    index % 2 === 0 ? "order-1" : "order-2"
                  }`}
                >
                  <div className="relative h-full">
                    {/* Year display - centered */}
                    <div className="flex items-center justify-center h-full">
                      <div className="text-8xl font-bold text-gray-800/10 dark:text-gray-200/10">
                        {exp.duration.split(" ").pop()}
                      </div>
                    </div>

                    {/* Skills and highlights - positioned absolutely */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 ${
                        index % 2 === 0 ? "right-8" : "left-8"
                      }`}
                    >
                      <div
                        className={`space-y-3 ${
                          index % 2 === 0 ? "text-right" : "text-left"
                        }`}
                      >
                        <p className="text-sm font-semibold text-purple-600/80 uppercase tracking-wider">
                          {index === 0 ? "Research Focus" : "Development Stack"}
                        </p>
                        <div
                          className={`flex flex-wrap gap-2 max-w-[200px] ${
                            index % 2 === 0
                              ? "justify-end ml-auto"
                              : "justify-start"
                          }`}
                        >
                          {index === 0 ? (
                            <>
                              <span className="px-3 py-1 text-xs rounded-full bg-purple-600/10 text-purple-600 border border-purple-600/20">
                                Neural Networks
                              </span>
                              <span className="px-3 py-1 text-xs rounded-full bg-purple-600/10 text-purple-600 border border-purple-600/20">
                                ML Algorithms
                              </span>
                              <span className="px-3 py-1 text-xs rounded-full bg-purple-600/10 text-purple-600 border border-purple-600/20">
                                Big Data
                              </span>
                              <span className="px-3 py-1 text-xs rounded-full bg-purple-600/10 text-purple-600 border border-purple-600/20">
                                Hadoop
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="px-3 py-1 text-xs rounded-full bg-blue-600/10 text-blue-600 border border-blue-600/20">
                                React
                              </span>
                              <span className="px-3 py-1 text-xs rounded-full bg-blue-600/10 text-blue-600 border border-blue-600/20">
                                Node.js
                              </span>
                              <span className="px-3 py-1 text-xs rounded-full bg-blue-600/10 text-blue-600 border border-blue-600/20">
                                MySQL
                              </span>
                              <span className="px-3 py-1 text-xs rounded-full bg-blue-600/10 text-blue-600 border border-blue-600/20">
                                MongoDB
                              </span>
                            </>
                          )}
                        </div>

                        {/* Achievement highlight */}
                        <div
                          className={`mt-4 ${
                            index % 2 === 0 ? "text-right" : "text-left"
                          }`}
                        >
                          <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            {index === 0 ? "25%" : "30%"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {index === 0
                              ? "Accuracy Improved"
                              : "Performance Boost"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`${
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  } md:direction-ltr`}
                >
                  <div className="group relative bg-white/5 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/10">
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-600/20 to-transparent rounded-tr-xl"></div>

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {exp.title}
                          </h3>
                          <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            {exp.company}
                          </h4>
                        </div>
                        <div className="p-2 rounded-lg bg-purple-600/10 group-hover:bg-purple-600/20 transition-colors">
                          <Briefcase className="h-5 w-5 text-purple-600" />
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-3">
                        {exp.description.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-gray-300"
                          >
                            <span className="block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 mt-1.5 flex-shrink-0"></span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="flex flex-col sm:flex-row gap-4 pt-12 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
          <a
            href="/Resume - Portfolio.pdf"
            download
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full border border-purple-600 text-purple-600 hover:bg-purple-600/10 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      <style>{`
        .md:direction-rtl {
          direction: rtl;
        }
        
        .md:direction-ltr {
          direction: ltr;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};
