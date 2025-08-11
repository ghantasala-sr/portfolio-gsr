import { useState } from "react";
import {
  Flame,
  Sparkles,
  TrendingUp,
  Globe,
  Database,
  Brain,
  Wrench,
  Code,
} from "lucide-react";

const skills = [
  // Expert Level - Skills you can grill me on (80%+)
  {
    name: "Java",
    level: 95,
    category: "expert",
    subcategory: "languages",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "expert",
    subcategory: "languages",
  },

  { name: "Python", level: 85, category: "expert", subcategory: "languages" },
  { name: "HTML/CSS", level: 95, category: "expert", subcategory: "web" },
  { name: "React", level: 90, category: "expert", subcategory: "web" },
  { name: "Tailwind CSS", level: 90, category: "expert", subcategory: "web" },
  { name: "Node.js", level: 80, category: "expert", subcategory: "web" },
  { name: "NumPy", level: 80, category: "expert", subcategory: "data" },
  { name: "Pandas", level: 85, category: "expert", subcategory: "data" },
  { name: "LLM Handling", level: 80, category: "expert", subcategory: "ml" },
  { name: "Supervised ML", level: 80, category: "expert", subcategory: "ml" },
  { name: "Neural Networks", level: 80, category: "expert", subcategory: "ml" },
  { name: "Git/GitHub", level: 90, category: "expert", subcategory: "tools" },
  { name: "VS Code", level: 95, category: "expert", subcategory: "tools" },
  { name: "PyCharm", level: 85, category: "expert", subcategory: "tools" },

  // Intermediate - Halfway to Hero (65-79%)
  {
    name: "Java",
    level: 70,
    category: "intermediate",
    subcategory: "languages",
  },
  {
    name: "C++",
    level: 65,
    category: "intermediate",
    subcategory: "languages",
  },
  { name: "Express", level: 75, category: "intermediate", subcategory: "web" },
  { name: "MongoDB", level: 70, category: "intermediate", subcategory: "web" },
  { name: "Next.js", level: 80, category: "intermediate", subcategory: "web" },
  {
    name: "SQL",
    level: 65,
    category: "intermediate",
    subcategory: "web",
  },
  {
    name: "Matplotlib",
    level: 70,
    category: "intermediate",
    subcategory: "data",
  },
  {
    name: "Scikit-learn",
    level: 75,
    category: "intermediate",
    subcategory: "ml",
  },
  {
    name: "TensorFlow",
    level: 70,
    category: "intermediate",
    subcategory: "ml",
  },
  { name: "Docker", level: 70, category: "intermediate", subcategory: "tools" },
  {
    name: "Jupyter",
    level: 75,
    category: "intermediate",
    subcategory: "tools",
  },
  { name: "AWS", level: 55, category: "intermediate", subcategory: "tools" },

  // Learning - Work in Progress (below 65%)
  { name: "Rust", level: 50, category: "learning", subcategory: "languages" },
  { name: "Go", level: 55, category: "learning", subcategory: "languages" },
  { name: "GraphQL", level: 60, category: "learning", subcategory: "web" },
  { name: "Redis", level: 50, category: "learning", subcategory: "web" },
  { name: "Spark", level: 55, category: "learning", subcategory: "data" },
  { name: "Generative AI", level: 60, category: "learning", subcategory: "ml" },
  { name: "Agentic AI", level: 55, category: "learning", subcategory: "ml" },
  { name: "Kubernetes", level: 45, category: "learning", subcategory: "tools" },
];

const categories = [
  {
    id: "expert",
    title: "Skills You Can Grill Me On",
    subtitle: "Battle-tested and production-ready",
    icon: Flame,
    color: "from-indigo-700 to-purple-700",
    bgColor: "bg-indigo-700/10",
    borderColor: "border-indigo-700/20",
  },
  {
    id: "intermediate",
    title: "Halfway to Hero",
    subtitle: "Getting stronger every day",
    icon: TrendingUp,
    color: "from-blue-600 to-purple-600",
    bgColor: "bg-blue-600/10",
    borderColor: "border-blue-600/20",
  },
  {
    id: "learning",
    title: "Work in Progress",
    subtitle: "Proceed with curiosity",
    icon: Sparkles,
    color: "from-purple-600 to-pink-600",
    bgColor: "bg-purple-600/10",
    borderColor: "border-purple-600/20",
  },
];

const subcategories = [
  { id: "languages", name: "Programming Languages", icon: Code },
  { id: "web", name: "Web Development", icon: Globe },
  { id: "data", name: "Data Science", icon: Database },
  { id: "ml", name: "AI & ML", icon: Brain },
  { id: "tools", name: "Tools", icon: Wrench },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("expert");

  const currentCategory = categories.find((cat) => cat.id === activeCategory);
  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  // Group skills by subcategory
  const groupedSkills = subcategories
    .map((subcat) => ({
      ...subcat,
      skills: filteredSkills.filter((skill) => skill.subcategory === subcat.id),
    }))
    .filter((group) => group.skills.length > 0);

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Technical
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {" "}
            Arsenal
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          From mastered technologies to exciting new frontiers - here is my
          technical journey
        </p>

        {/* Category Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  relative p-6 rounded-xl transition-all duration-300 group
                  ${
                    isActive
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                      : `${category.bgColor} border ${category.borderColor} hover:scale-102`
                  }
                `}
              >
                <div className="flex flex-col items-center space-y-2">
                  <Icon
                    className={`h-8 w-8 ${
                      isActive
                        ? "text-white"
                        : `text-${category.color.split("-")[1]}-600`
                    }`}
                  />
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                  <p
                    className={`text-xs ${
                      isActive ? "text-white/80" : "text-muted-foreground"
                    }`}
                  >
                    {category.subtitle}
                  </p>
                </div>
                {isActive && (
                  <div className="absolute inset-0 rounded-xl bg-white/10 animate-pulse"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Skills by Subcategory */}
        <div className="space-y-12">
          {groupedSkills.map((group, groupIndex) => {
            const SubIcon = group.icon;
            return (
              <div
                key={group.id}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${groupIndex * 100}ms` }}
              >
                {/* Subcategory Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${currentCategory.bgColor}`}>
                    <SubIcon
                      className={`h-5 w-5 text-${
                        currentCategory.color.split("-")[1]
                      }-600`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{group.name}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {group.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`
                        relative group p-5 rounded-xl border transition-all duration-300
                        ${currentCategory.bgColor} ${currentCategory.borderColor}
                        hover:scale-105 hover:shadow-lg
                        opacity-0 animate-fade-in
                      `}
                      style={{
                        animationDelay: `${groupIndex * 100 + index * 50}ms`,
                      }}
                    >
                      {/* Skill Content */}
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-base">
                          {skill.name}
                        </h4>
                        <span
                          className={`text-sm font-bold bg-gradient-to-r ${currentCategory.color} bg-clip-text text-transparent`}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${currentCategory.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: `${skill.level}%`,
                            animation: "growWidth 1s ease-out forwards",
                            animationDelay: `${
                              groupIndex * 100 + index * 50
                            }ms`,
                          }}
                        />
                        {/* Glow effect */}
                        <div
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${currentCategory.color} rounded-full blur-sm opacity-50`}
                          style={{
                            width: `${skill.level}%`,
                            animation: "growWidth 1s ease-out forwards",
                            animationDelay: `${
                              groupIndex * 100 + index * 50
                            }ms`,
                          }}
                        />
                      </div>

                      {/* Hover effect */}
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${currentCategory.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Curious about how I apply these skills?
          </p>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            View My Projects
          </a>
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

        @keyframes growWidth {
          from {
            width: 0%;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
