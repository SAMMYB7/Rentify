import FeatureCard from "../components/FeatureCard";
import { FaDollarSign, FaCarSide, FaHeadset } from "react-icons/fa";

const Dashboard = () => {
  const features = [
    {
      icon: <FaDollarSign className="text-4xl text-blue-600" />,
      title: "Affordable Prices",
      description:
        "We offer the most competitive pricing, ensuring you get the best value for your money with zero hidden charges.",
    },
    {
      icon: <FaCarSide className="text-4xl text-green-600" />,
      title: "Wide Selection",
      description:
        "Choose from a diverse range of vehicles, including sedans, SUVs, and luxury cars, all well-maintained and ready for the road.",
    },
    {
      icon: <FaHeadset className="text-4xl text-red-600" />,
      title: "24/7 Customer Support",
      description:
        "Our support team is available around the clock to assist you with bookings, queries, and emergency assistance.",
    },
  ];

  const reviews = [
    {
      quote:
        '"Best car rental service! Hassle-free experience and great customer support!"',
      author: "- John Doe",
    },
    {
      quote: '"Affordable prices and well-maintained cars. Highly recommended!"',
      author: "- Sarah Lee",
    },
    {
      quote: '"I loved the variety of cars available. Booking was super easy!"',
      author: "- Mark Smith",
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <div className="relative w-full h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Car Rental Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Find Your Perfect Ride</h1>
        </div>
      </div>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">Why Choose Us?</h2>
          <p className="text-lg text-gray-700 mb-8">
            We provide top-notch car rental services tailored to your needs.
            Whether you need a luxury car for a special event or an affordable rental
            for your trip, we’ve got you covered.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
            {reviews.map((review, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
                <p className="italic">{review.quote}</p>
                <h4 className="mt-4 font-semibold">{review.author}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
