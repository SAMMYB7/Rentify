const About = () => {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Welcome to Car Rental, your trusted partner for seamless and affordable car rental services. 
          We are dedicated to providing high-quality, well-maintained vehicles at competitive prices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p>To provide a reliable, affordable, and seamless car rental experience to our customers worldwide.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Why Choose Us?</h3>
            <p>Affordable pricing, a wide selection of vehicles, and 24/7 customer support to ensure a hassle-free experience.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p>To be the leading car rental service provider, offering convenience, safety, and excellent customer satisfaction.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  