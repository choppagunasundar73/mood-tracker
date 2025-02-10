import React from "react";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600">
          Have questions? We're here to help and listen
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Phone,
            title: "Call Us",
            description: "Mon-Fri from 8am to 5pm.",
            contact: "+1 (555) 000-0000",
          },
          {
            icon: Mail,
            title: "Email Us",
            description: "We'll respond within 24 hours.",
            contact: "support@zenflow.com",
          },
          {
            icon: MapPin,
            title: "Visit Us",
            description: "Come say hello at our office.",
            contact: "123 Wellness St, CA 94107",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <item.icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <p className="font-medium">{item.contact}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
          <div className="flex items-center gap-2 mb-8">
            <MessageSquare className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Live Chat</h2>
          </div>
          <p className="text-white/90 mb-8">
            Need immediate assistance? Chat with our wellness experts right now.
          </p>
          <button className="w-full py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition">
            Start Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
