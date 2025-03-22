import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import CarList from "./pages/CarList";
import Payment from "./pages/Payment";
import { Toaster } from "sonner";
import CarDetails from "./pages/CarDetails";

function App() {
  return (
    <Router>
      <Toaster position="top-right" richColors />
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="cars" element={<CarList />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/car-details" element={<CarDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
