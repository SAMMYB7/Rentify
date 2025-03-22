import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  const handleRentNow = () => {
    if (car.available) {
      navigate("/car-details", { state: { car } });
    }
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition p-4 rounded-xl">
      <img
        src={car.image}
        alt={car.model}
        className="w-full h-[240px] object-cover rounded-md"
      />
      <CardContent>
        <h2 className="text-lg font-bold">{car.brand} {car.model}</h2>
        <p className="text-sm text-gray-500">{car.year} • {car.seats} Seats • {car.fuelType}</p>
        <p className="text-xl font-semibold mt-2">₹{car.pricePerDay}/day</p>

        
        <p
          className={`mt-2 text-sm font-medium ${
            car.available ? "text-green-600" : "text-red-500"
          }`}
        >
          {car.available ? "Available" : "Not Available"}
        </p>

        
        <button
          className={`mt-3 px-4 py-2 rounded-md transition ${
            car.available
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!car.available}
          onClick={handleRentNow}
        >
          Rent Now
        </button>
      </CardContent>
    </Card>
  );
};

export default CarCard;
