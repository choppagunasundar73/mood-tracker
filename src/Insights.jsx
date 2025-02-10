import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const moodData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Happiness",
      data: [65, 59, 80, 81, 56, 55, 70],
      borderColor: "rgb(59, 130, 246)",
      backgroundColor: "rgba(59, 130, 246, 0.5)",
      tension: 0.4,
    },
    {
      label: "Calmness",
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: "rgb(147, 51, 234)",
      backgroundColor: "rgba(147, 51, 234, 0.5)",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
  scales: {
    y: {
      min: 0,
      max: 100,
    },
  },
};

const emotions = [
  { name: "Happiness", value: 51 },
  { name: "Calmness", value: 72 },
  { name: "Anger", value: 23 },
  { name: "Excitement", value: 77 },
  { name: "Sadness", value: 93 },
  { name: "Stress", value: 64 },
];

const Insights = () => {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold mb-2">Your Insights</h1>
        <p className="text-gray-600">
          Track your emotional journey and discover patterns
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">
            Weekly Mood Patterns
          </h2>
          <Line options={options} data={moodData} />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-2">Satisfaction</h2>
          <p className="text-gray-500 mb-6">Based on daily mood log</p>
          <div className="space-y-4">
            {emotions.map((emotion) => (
              <div key={emotion.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">
                    {emotion.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {emotion.value}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${emotion.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-4xl font-bold text-blue-600 mb-2">87%</div>
          <div className="text-gray-600">Completion Rate</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-4xl font-bold text-purple-600 mb-2">24</div>
          <div className="text-gray-600">Journal Entries</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-4xl font-bold text-green-600 mb-2">4.2h</div>
          <div className="text-gray-600">Avg. Meditation</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-4xl font-bold text-orange-600 mb-2">8</div>
          <div className="text-gray-600">Mindfulness Streak</div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
