import React from "react";
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Loader2 className="w-16 h-16 text-blue-600 animate-spin" />
      <h2 className="mt-4 text-2xl font-bold text-gray-700">
        Loading your mindful journey...
      </h2>
    </div>
  );
};

export default Loading;
