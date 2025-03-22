import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Payment = () => {
  const location = useLocation();
  const { car, name, address, rentalDays, totalPrice } = location.state || {};

  const [selectedMethod, setSelectedMethod] = useState("Debit Card");
  const [selectedBank, setSelectedBank] = useState(null);
  const [upiId, setUpiId] = useState("");
  const [isUpiVerified, setIsUpiVerified] = useState(false);

  const paymentMethods = [
    { name: "Debit Card", icon: "💳" },
    { name: "Credit Card", icon: "💳" },
    { name: "Netbanking", icon: "🏦" },
    { name: "Wallet", icon: "📱" },
    { name: "UPI", icon: "🔗" },
  ];

  return (
    <div className="flex justify-center items-center h-full bg-gray-100 py-10">
      <Card className="w-3/4 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Payment Details</h2>

        {car && (
          <CardContent className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold">{car.brand} {car.model}</h3>
            <p className="text-gray-600">Rental Duration: {rentalDays} days</p>
            <p className="text-lg font-semibold mt-2">Total Price: ₹{totalPrice}</p>
          </CardContent>
        )}
        <div className="mt-4">
          <p className="text-lg font-semibold">Customer Details</p>
          <p className="text-gray-700">Name: {name}</p>
          <p className="text-gray-700">Address: {address}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Select a Payment Method</h2>
          <div className="flex space-x-3">
            {paymentMethods.map((method) => (
              <Button
                key={method.name}
                variant={selectedMethod === method.name ? "default" : "outline"}
                onClick={() => setSelectedMethod(method.name)}
              >
                {method.icon} {method.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Pay with {selectedMethod}</h2>
          {selectedMethod === "Debit Card" || selectedMethod === "Credit Card" ? (
            <CardPaymentForm />
          ) : selectedMethod === "Netbanking" ? (
            <NetbankingComponent selectedBank={selectedBank} setSelectedBank={setSelectedBank} />
          ) : selectedMethod === "UPI" ? (
            <UPIComponent 
              upiId={upiId} 
              setUpiId={setUpiId} 
              isUpiVerified={isUpiVerified} 
              setIsUpiVerified={setIsUpiVerified} 
            />
          ) : selectedMethod === "Wallet" ? (
            <WalletComponent />
          ) : null}
        </div>
      </Card>
    </div>
  );
};

const CardPaymentForm = () => (
  <form>
    <Input type="text" placeholder="Card Number" className="w-full mb-3" />
    <div className="flex space-x-2">
      <Input type="text" placeholder="MM/YY" className="w-1/2" />
      <Input type="text" placeholder="CVV" className="w-1/2" />
    </div>
    <Input type="text" placeholder="Cardholder Name" className="w-full mt-3" />
    <Button className="w-full mt-4" onClick={() => toast.success("Payment Successful!")}>
      Pay Now
    </Button>
  </form>
);

const NetbankingComponent = ({ selectedBank, setSelectedBank }) => {
  const banks = ["SBI", "ICICI", "HDFC", "Axis", "Kotak", "Yes Bank"];

  return (
    <div>
      <h3 className="text-lg font-semibold">Select Your Bank</h3>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {banks.map((bank) => (
          <Button
            key={bank}
            variant={selectedBank === bank ? "default" : "outline"}
            onClick={() => setSelectedBank(bank)}
            className="text-center"
          >
            {bank}
          </Button>
        ))}
      </div>
      <Button 
        className="mt-4 w-full" 
        disabled={!selectedBank} 
        onClick={() => toast.success(`Redirecting to ${selectedBank} netbanking...`)}
      >
        Proceed to Pay
      </Button>
    </div>
  );
};

const UPIComponent = ({ upiId, setUpiId, isUpiVerified, setIsUpiVerified }) => (
  <div>
    <h3 className="text-lg font-semibold">Enter UPI ID</h3>
    <Input
      placeholder="example@upi"
      value={upiId}
      onChange={(e) => setUpiId(e.target.value)}
      className="mt-2"
    />
    <Button className="mt-4 w-full" onClick={() => setIsUpiVerified(true)} disabled={!upiId}>
      {isUpiVerified ? "Verified ✅" : "Verify UPI"}
    </Button>
    {isUpiVerified && (
      <Button className="mt-4 w-full" onClick={() => toast.success("UPI Payment Successful!")}>
        Pay Now
      </Button>
    )}
  </div>
);

const WalletComponent = () => (
  <div>
    <h3 className="text-lg font-semibold">Select a Wallet</h3>
    <div className="grid grid-cols-2 gap-4 mt-4">
      {["PhonePe", "Paytm", "Amazon Pay", "Google Pay"].map((wallet) => (
        <Button key={wallet} variant="outline" className="text-center">
          {wallet}
        </Button>
      ))}
    </div>
    <Button className="mt-4 w-full" onClick={() => toast.success("Redirecting to Wallet Payment...")}>
      Proceed to Wallet
    </Button>
  </div>
);

export default Payment;
