import React, { useState } from "react";
import { Calendar, Clock } from "lucide-react";

const moods = [
  { emoji: "😊", name: "Happy" },
  { emoji: "😌", name: "Calm" },
  { emoji: "😠", name: "Angry" },
  { emoji: "😄", name: "Excited" },
  { emoji: "😢", name: "Sad" },
  { emoji: "😩", name: "Stressed" },
];

const activities = [
  "Exercise",
  "Reading",
  "Meditation",
  "Work",
  "Social",
  "Rest",
  "Hobbies",
  "Nature",
  "Creative",
  "Learning",
];

const Journal = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedActivities, setSelectedActivities] = useState([]);

  const now = new Date();
  const dateStr = now.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });
  const timeStr = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  const toggleActivity = (activity) => {
    setSelectedActivities((prev) =>
      prev.includes(activity)
        ? prev.filter((a) => a !== activity)
        : [...prev, activity]
    );
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">New Journal Entry</h1>
          <div className="flex items-center gap-4 text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{dateStr}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{timeStr}</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl mb-4">How are you feeling?</h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {moods.map((mood) => (
                <button
                  key={mood.name}
                  onClick={() => setSelectedMood(mood.name)}
                  className={`p-4 rounded-xl flex flex-col items-center gap-2 transition ${
                    selectedMood === mood.name
                      ? "bg-blue-50 border-2 border-blue-500"
                      : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                  }`}
                >
                  <span className="text-2xl">{mood.emoji}</span>
                  <span className="text-sm">{mood.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl mb-4">What have you been up to?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {activities.map((activity) => (
                <button
                  key={activity}
                  onClick={() => toggleActivity(activity)}
                  className={`p-3 rounded-lg text-sm transition ${
                    selectedActivities.includes(activity)
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  {activity}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl mb-4">Write your thoughts</h2>
            <textarea
              placeholder="How was your day? What's on your mind?"
              className="w-full h-32 p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition">
            Save Entry
          </button>
        </div>
      </div>
    </div>
  );
};

export default Journal;
