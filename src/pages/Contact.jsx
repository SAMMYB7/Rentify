import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-lg text-gray-700 text-center mb-6">Have any questions? Reach out to us!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <p className="flex items-center"><FaEnvelope className="text-blue-500 mr-3" /> support@carrental.com</p>
          <p className="flex items-center"><FaPhoneAlt className="text-green-500 mr-3" /> +1 234 567 890</p>
          <p className="flex items-center"><FaMapMarkerAlt className="text-red-500 mr-3" /> 123 Main Street, City, Country</p>
        </div>

        <form className="bg-gray-100 p-6 rounded-lg shadow">
          <label className="block mb-2 text-gray-700">Your Name</label>
          <input type="text" className="w-full p-2 border rounded mb-4" placeholder="Enter your name" />

          <label className="block mb-2 text-gray-700">Your Email</label>
          <input type="email" className="w-full p-2 border rounded mb-4" placeholder="Enter your email" />

          <label className="block mb-2 text-gray-700">Message</label>
          <textarea className="w-full p-2 border rounded mb-4" rows="4" placeholder="Type your message"></textarea>

          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
