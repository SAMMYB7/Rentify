import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label"; 
import { toast } from "sonner";

const CarDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [rentalDays, setRentalDays] = useState(1);
  const [drivingLicense, setDrivingLicense] = useState(null);
  const totalPrice = car ? car.pricePerDay * rentalDays : 0;

  const handleFileUpload = (event) => {
    setDrivingLicense(event.target.files[0]);
  };

  const handleProceedToPayment = () => {
    if (!name || !address || !drivingLicense) {
      toast.error("Please fill all details and upload your driving license.");
      return;
    }

    toast.success("Details confirmed! Redirecting to payment...");
    setTimeout(() => {
      navigate("/payment", {
        state: { car, name, address, rentalDays, totalPrice },
      });
    }, 1500);
  };

  if (!car) {
    return <div className="text-center text-red-500">No car selected!</div>;
  }

  return (
    <div className="flex justify-center items-center h-full bg-gray-100 py-10">
      <Card className="w-3/4 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Car Rental Details</h2>
        <div className="flex gap-6">
          <div className="w-1/2">
            <img src={car.image} alt={car.model} className="w-full h-[280px] object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-4">{car.brand} {car.model}</h3>
            <p className="text-gray-600">{car.year} • {car.seats} Seats • {car.fuelType}</p>
            <p className="text-lg font-semibold mt-2">₹{car.pricePerDay}/day</p>
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label className="block text-sm font-medium mt-3 mb-1">Address</label>
            <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

            <label className="block text-sm font-medium mt-3 mb-1">Rental Duration (Days)</label>
            <Input
              type="number"
              min="1"
              value={rentalDays}
              onChange={(e) => setRentalDays(Number(e.target.value))}
            />

            <p className="text-lg font-semibold mt-3">Total Price: ₹{totalPrice}</p>

            {/* ShadCN UI File Input */}
            <div className="mt-4 grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="license">Upload Driving License</Label>
              <Input id="license" type="file" accept=".jpg,.png,.pdf" onChange={handleFileUpload} />
            </div>

            <Button className="mt-4 w-full bg-blue-600 text-white" onClick={handleProceedToPayment}>
              Confirm & Proceed to Payment
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CarDetails;
