import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">About Us</h3>
          <p className="text-sm">
            We provide top-quality car rental services, ensuring you get the best value with a hassle-free experience.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-start">
            <FaEnvelope className="mr-2 text-blue-400" /> support@carrental.com
          </p>
          <p className="flex items-center justify-center md:justify-start mt-2">
            <FaPhoneAlt className="mr-2 text-green-400" /> +1 234 567 890
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><Link to="about" className="hover:text-blue-400">About</Link></li>
            <li><Link to="contact" className="hover:text-blue-400">Contact</Link></li>
            <li><Link to="faq" className="hover:text-blue-400">FAQ</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex justify-center space-x-6">
        <a href="#" className="text-gray-400 hover:text-blue-500"><FaFacebookF size={20} /></a>
        <a href="#" className="text-gray-400 hover:text-blue-400" title="Follow us on X"><i class="fa-brands fa-x-twitter"></i></a>        
        <a href="#" className="text-gray-400 hover:text-pink-500"><FaInstagram size={20} /></a>
      </div>

      <p className="text-center text-gray-500 text-sm mt-6">© {new Date().getFullYear()} Car Rental. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
