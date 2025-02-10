import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="bg-primary text-secondary p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">Cartel De Tacos</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-white">Home</Link></li>
        <li><Link to="/menu" className="hover:text-white">Menu</Link></li>
        <li><Link to="/order" className="hover:text-white">Order</Link></li>
        <li><Link to="/about" className="hover:text-white">About</Link></li>
        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
