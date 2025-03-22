import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
      <Link to="/" className="flex items-center gap-2">
        <i className="fa fa-car text-2xl text-blue-600"></i>
        <span className="text-lg font-semibold text-gray-800">Rentify</span>
      </Link>
      <div className="flex gap-4">
        <Link to="/cars">
          <Button className="px-4 py-2 text-white bg-blue-600 rounded-md">Browse Cars</Button>
        </Link>
        <Link to="/signin">
          <Button className="px-4 py-2 text-white bg-blue-600 rounded-md">Sign In</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
