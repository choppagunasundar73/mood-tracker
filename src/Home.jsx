import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart, Brain, ChevronRight } from "lucide-react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`min-h-[80vh] flex flex-col justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
          Track Your Journey to Mindfulness
        </h1>
        <p className="text-xl text-gray-600">
          Your personal space for emotional awareness, growth, and self-discovery
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/journal"
            className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Start Your Journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 bg-white border border-blue-100 rounded-xl font-medium hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          {
            icon: Sparkles,
            title: "Daily Reflections",
            description:
              "Track your moods, activities, and thoughts with our intuitive journaling system",
            color: "blue",
          },
          {
            icon: Heart,
            title: "Emotional Insights",
            description:
              "Gain valuable insights into your emotional patterns and triggers",
            color: "purple",
          },
          {
            icon: Brain,
            title: "Mindfulness Resources",
            description:
              "Access guided meditations, exercises, and expert wellness content",
            color: "pink",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="group p-6 bg-white rounded-2xl shadow-sm border border-blue-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <div
              className={`w-12 h-12 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
            >
              <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <Link
              to={`/${feature.title.toLowerCase().replace(" ", "-")}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Learn more{" "}
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
