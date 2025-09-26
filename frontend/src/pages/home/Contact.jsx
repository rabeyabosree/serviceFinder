import React from "react";

function Contact() {
  return (
    <div className="py-20 bg-gray-50 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Contact Us
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left: Contact Info */}
        <div>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 rounded px-3 py-2 h-32 focus:outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-lavender text-white px-4 py-2 rounded font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Form */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-1 text-gray-800">📍 Address</h2>
            <p className="text-gray-600">123 Service Lane, Your City</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1 text-gray-800">📞 Phone</h2>
            <p className="text-gray-600">+880 1234 567890</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1 text-gray-800">✉ Email</h2>
            <p className="text-gray-600">contact@servicefinder.com</p>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Contact;


