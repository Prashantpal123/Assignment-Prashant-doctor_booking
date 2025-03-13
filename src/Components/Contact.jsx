import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white  px-3  md:px-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-3 md:p-8 animate-fade-in">
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-gray-800 text-center">Contact Us</h2>
        <p className="text-gray-600 text-center mt-2">
          Got a technical issue? Want to send feedback about a beta feature?
        </p>

        {/* Form */}
        <form action="#" className="space-y-6 mt-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full mt-1 px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-gray-700 font-semibold">Your Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="w-full mt-1 px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold">Your Message</label>
            <textarea
              id="message"
              placeholder="Leave a comment..."
              rows="6"
              className="w-full mt-1 px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white text-lg px-10 py-3 rounded-full font-semibold shadow-md transition-transform hover:scale-105">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

