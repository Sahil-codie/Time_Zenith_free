// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center rounded-lg">
        <div>
          <Link href="/" className="text-lg lg:text-xl font-semibold text-green-700">
            Time Zenith
          </Link>
        </div>
        <div className="flex items-center space-x-4 lg:space-x-8">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-green-700">
              Home
            </Link>
            {/* <Link href="/Price"  className="text-gray-700 hover:text-green-700">
              Pricing
            </Link> */}
            {/* <Link href="/" className="text-gray-700 hover:text-green-700">
              Contact
            </Link> */}
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


