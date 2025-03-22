import { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import FloatingLabelInput from "../components/FloatingLabelInput";
import googleLogo from "../assets/icons8-google-144.png";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

        <div className="flex flex-col space-y-3">
          <button className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
            <img
              src={googleLogo}
              alt="Google"
              className="w-5 h-5 mr-6"
            />
            <span className="font-semibold">Continue with Google</span>
          </button>

          <button className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
            <FaFacebookF className="text-blue-600 w-5 h-5 mr-3" />
            <span className="font-semibold">Continue with Facebook</span>
          </button>
        </div>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FloatingLabelInput
            label="Full Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <FloatingLabelInput
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FloatingLabelInput
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <Button className="w-full">Sign Up</Button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account? <a href="/signin" className="text-blue-600">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
