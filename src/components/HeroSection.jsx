import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinReverseSlow {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in-delay-1 {
          animation: fadeInUp 0.6s ease-out 0.2s forwards;
        }

        .animate-fade-in-delay-2 {
          animation: fadeInUp 0.6s ease-out 0.4s forwards;
        }

        .animate-fade-in-delay-3 {
          animation: fadeInUp 0.6s ease-out 0.6s forwards;
        }

        .animate-fade-in-delay-4 {
          animation: fadeInUp 0.6s ease-out 0.8s forwards;
        }

        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }

        .animate-spin-reverse-slow {
          animation: spinReverseSlow 15s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 3s ease-in-out 1.5s infinite;
        }
      `}</style>

      <section
        id="hero"
        className="relative min-h-screen flex items-center px-4 md:px-8 lg:px-12 overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "700ms" }}
          ></div>
        </div>

        <div className="container max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in block lg:inline">
                  Hi, I&apos;m
                </span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1 block lg:inline">
                  {" "}
                  Srinivasa Rithik
                </span>
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent opacity-0 animate-fade-in-delay-2 block lg:inline">
                  {" "}
                  Ghantasala
                </span>
              </h1>

              <div className="opacity-0 animate-fade-in-delay-3 space-y-4">
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                  Full Stack & Data Science Enthusiast Currently pursuing
                  Masters of Science in Information Systems, at Northeastern
                  University, Boston.
                </p>
                <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Engineering the Future, One Stack and Stat at a time.
                </p>
              </div>

              <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                >
                  View My Work
                </a>
              </div>
            </div>

            {/* Right Photo and Graphics */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-full lg:h-full lg:max-w-lg opacity-0 animate-fade-in-delay-2">
                {/* Decorative circles */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-600/20 rounded-full blur-xl"></div>

                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full border-2 border-purple-600/30 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full border-2 border-blue-600/20 animate-spin-reverse-slow"></div>

                {/* Photo container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                  {/* Placeholder for photo - replace src with actual image */}
                  {/* <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <span className="text-white text-4xl md:text-5xl font-bold">
                      SR
                    </span>
                  </div> */}
                  <img
                    src="/Profile_Photo.png"
                    alt="Srinivasa Rithik Ghantasala"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-2 right-1/4 animate-float">
                  <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                </div>
                <div className="absolute bottom-1/4 -right-2 animate-float-delayed">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
                <div className="absolute top-1/3 -left-4 animate-float">
                  <div className="w-5 h-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </section>
    </>
  );
};
