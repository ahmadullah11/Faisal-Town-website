import React from "react";
import { Phone } from "lucide-react"; // modern phone icon

const ContactSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Contact Info */}
        <div className="text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-yellow-600 p-4 rounded-xl shadow-lg">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-lg font-medium">For Further Inquiries Call</p>
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
                051-111-324-725
              </h2>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-md">
            For further inquiries, feel free to contact us directly. Our team is
            available to assist you with any questions or concerns regarding our
            projects, booking procedures, or services. We’re here to provide you
            with the information you need for a smooth and seamless experience.
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-2xl relative">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Phone No</label>
              <input
                type="text"
                placeholder="+923003331124"
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message"
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
