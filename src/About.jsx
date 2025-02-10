import React, { useState } from "react";
import { Shield, Heart, Users, Star, Award, Zap } from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = {
    mission: {
      title: "Our Mission",
      content:
        "Empowering individuals to take control of their mental wellness journey through innovative technology and mindful practices.",
    },
    vision: {
      title: "Our Vision",
      content:
        "Creating a world where mental wellness is accessible, understood, and prioritized by all.",
    },
    values: {
      title: "Our Values",
      content:
        "Innovation, Empathy, Privacy, and Community drive everything we do.",
    },
  };

  return (
    <div className="space-y-20 animate-fadeIn">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 md:p-20">
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slideUp">
            Transforming Mental Wellness
          </h1>
          <p className="text-xl text-white/90 animate-slideUp animation-delay-200">
            Join over 100,000+ users who have discovered a better way to track
            and improve their mental well-being
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent mix-blend-overlay" />
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-6 text-center">
        {[
          {
            icon: Star,
            stat: "4.9/5",
            label: "User Rating",
            color: "text-yellow-500",
          },
          {
            icon: Users,
            stat: "100k+",
            label: "Active Users",
            color: "text-blue-500",
          },
          {
            icon: Award,
            stat: "#1",
            label: "Wellness App",
            color: "text-purple-500",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-4`} />
            <div className="text-3xl font-bold mb-2">{item.stat}</div>
            <div className="text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs Section */}
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-blue-100">
        <div className="flex space-x-4 mb-8 overflow-x-auto">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tabs[tab].title}
            </button>
          ))}
        </div>

        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold mb-6">
            {tabs[activeTab].title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {tabs[activeTab].content}
          </p>
        </div>
      </div>

      {/* Why Choose Zenflow Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Why Choose Zenflow?</h2>
          <div className="space-y-6">
            {[
              {
                icon: Shield,
                title: "Privacy First",
                description:
                  "Your data is encrypted and never shared with third parties. We prioritize your privacy above all.",
              },
              {
                icon: Zap,
                title: "AI-Powered Insights",
                description:
                  "Advanced algorithms analyze your patterns to provide personalized recommendations.",
              },
              {
                icon: Heart,
                title: "Evidence Based",
                description:
                  "Our methods are backed by scientific research and mental health professionals.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
        <img
    src="https://dummyimage.com/600x600/cccccc/000000&text=Zenflow+App+Interface"
    alt="Zenflow App Interface"
    className="object-cover absolute inset-0 w-full h-full"
  />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of others who have transformed their mental wellness
          with Zenflow
        </p>
        <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
          Get Started Free
        </button>
      </div>

      {/* Inline Styles for animations */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default About;
