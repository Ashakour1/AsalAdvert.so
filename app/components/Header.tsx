import Link from "next/link";

const Header = () => {
  return (
    <header className="max-w-[1040px] mx-auto">
      <div className="flex justify-between items-center py-4">
        <div className="logo">
          <img src="/asal-logo.png" alt="logo" />
        </div>
        <nav>
          <div className="flex space-x-6 text-gray-500">
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-500">
              About
            </Link>
            <Link href="/services" className="hover:text-blue-500">
              Services
            </Link>
            <Link href="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </div>
        </nav>
        <div>
          <button className="px-7 py-2 border border-gray-400 rounded-md text-blue-500 font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
