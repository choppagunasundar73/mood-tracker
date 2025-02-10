import React from "react";
import {
  BookOpen,
  Video,
  Headphones,
  Users,
  Download,
  ArrowRight,
} from "lucide-react";

const Resources = () => {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold mb-2">Wellness Resources</h1>
        <p className="text-gray-600">
          Explore our curated collection of mindfulness and wellness content
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: BookOpen,
            title: "Articles",
            count: "124",
            color: "blue",
          },
          {
            icon: Video,
            title: "Videos",
            count: "86",
            color: "purple",
          },
          {
            icon: Headphones,
            title: "Audio Guides",
            count: "52",
            color: "green",
          },
          {
            icon: Users,
            title: "Community",
            count: "1.2k",
            color: "orange",
          },
        ].map((resource, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
          >
            <div
              className={`w-12 h-12 rounded-xl bg-${resource.color}-100 flex items-center justify-center mb-4`}
            >
              <resource.icon
                className={`w-6 h-6 text-${resource.color}-600`}
              />
            </div>
            <div className="text-2xl font-bold mb-1">{resource.count}</div>
            <div className="text-gray-600">{resource.title}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-6">Featured Articles</h2>
          <div className="space-y-4">
            {[
              {
                title: "Understanding Mindfulness",
                category: "Meditation",
                readTime: "5 min read",
              },
              {
                title: "The Science of Sleep",
                category: "Wellness",
                readTime: "8 min read",
              },
              {
                title: "Building Healthy Habits",
                category: "Lifestyle",
                readTime: "6 min read",
              },
            ].map((article, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
              >
                <div>
                  <div className="font-medium mb-1">{article.title}</div>
                  <div className="text-sm text-gray-500">
                    {article.category} • {article.readTime}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-6">Guided Meditations</h2>
          <div className="space-y-4">
            {[
              {
                title: "Morning Calm",
                duration: "10 min",
                instructor: "Sarah Johnson",
              },
              {
                title: "Stress Relief",
                duration: "15 min",
                instructor: "Michael Chen",
              },
              {
                title: "Deep Sleep",
                duration: "20 min",
                instructor: "Emma Wilson",
              },
            ].map((meditation, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
              >
                <div>
                  <div className="font-medium mb-1">
                    {meditation.title}
                  </div>
                  <div className="text-sm text-gray-500">
                    {meditation.duration} • {meditation.instructor}
                  </div>
                </div>
                <Download className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Meditation Basics",
            description: "Learn the fundamentals of meditation practice",
            lessons: 12,
            duration: "2.5 hours",
          },
          {
            title: "Stress Management",
            description: "Techniques for managing daily stress and anxiety",
            lessons: 8,
            duration: "1.5 hours",
          },
          {
            title: "Better Sleep",
            description: "Improve your sleep quality with proven methods",
            lessons: 10,
            duration: "2 hours",
          },
        ].map((course, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
          >
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{course.lessons} lessons</span>
              <span>{course.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
