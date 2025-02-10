import React from "react";
import {
  Activity,
  BarChart2,
  BookOpen,
  Calendar,
  Clock,
  Target,
  Zap,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, Alex</h1>
        <p className="text-gray-600">
          Here's your wellness overview for today
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-white/20 rounded-lg">
              <Target className="w-6 h-6" />
            </div>
            <div className="text-sm opacity-90">Daily Goal Progress</div>
          </div>
          <div className="text-3xl font-bold">75%</div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-white/20 rounded-lg">
              <Activity className="w-6 h-6" />
            </div>
            <div className="text-sm opacity-90">Mood Score</div>
          </div>
          <div className="text-3xl font-bold">8.5/10</div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-white/20 rounded-lg">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-sm opacity-90">Meditation Time</div>
          </div>
          <div className="text-3xl font-bold">45 min</div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-2xl text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-white/20 rounded-lg">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-sm opacity-90">Energy Level</div>
          </div>
          <div className="text-3xl font-bold">High</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            Upcoming Sessions
          </h2>
          <div className="space-y-4">
            {[
              { time: "2:00 PM", title: "Guided Meditation", type: "Mindfulness" },
              { time: "4:30 PM", title: "Yoga Practice", type: "Exercise" },
              { time: "7:00 PM", title: "Evening Journal", type: "Reflection" },
            ].map((session, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-3 rounded-xl bg-gray-50"
              >
                <div className="text-sm font-medium text-gray-600">
                  {session.time}
                </div>
                <div>
                  <div className="font-medium">{session.title}</div>
                  <div className="text-sm text-gray-500">{session.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-blue-600" />
            Weekly Progress
          </h2>
          <div className="space-y-4">
            {[
              { name: "Meditation", progress: 80 },
              { name: "Exercise", progress: 65 },
              { name: "Journaling", progress: 90 },
              { name: "Sleep", progress: 75 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-sm text-gray-500">
                    {item.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600" />
          Recent Insights
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Sleep Quality Improved",
              description:
                "Your average sleep score increased by 15% this week",
              change: "+15%",
              trend: "up",
            },
            {
              title: "Stress Levels Decreased",
              description: "Your stress levels are lower than last week",
              change: "-20%",
              trend: "down",
            },
            {
              title: "Meditation Streak",
              description: "You've maintained your daily meditation practice",
              change: "7 days",
              trend: "neutral",
            },
          ].map((insight, i) => (
            <div key={i} className="p-4 rounded-xl bg-gray-50">
              <h3 className="font-medium mb-2">{insight.title}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {insight.description}
              </p>
              <div className="text-sm font-medium text-blue-600">
                {insight.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
