import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center py-20">
      <h2 className="text-4xl font-bold text-primary">Welcome to Cartel De Tacos</h2>
      <p className="text-lg mt-4">The best tacos in town!</p>
      
      <div className="mt-6 flex justify-center space-x-4">
        {/* View Menu Button */}
        <Link to="/menu" className="px-6 py-3 bg-primary text-primary font-semibold rounded-md transition duration-300 hover:bg-red-600 hover:text-white">
          View Menu
        </Link>

        {/* Order Button */}
        <Link to="/order" className="px-6 py-3 bg-secondary text-primary font-semibold rounded-md transition duration-300 hover:bg-red-600 hover:text-white">
          Order
        </Link>
      </div>
    </div>
  );
};

export default Home;
