const FeatureCard = ({ icon, title, description }) => {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center">
        {icon}
        <h3 className="text-xl font-semibold mt-4">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    );
  };
  
  export default FeatureCard;
  