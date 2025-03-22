import cars from "../data/cars.json"; 
import CarCard from "../components/CarCard"; 

const CarList = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
