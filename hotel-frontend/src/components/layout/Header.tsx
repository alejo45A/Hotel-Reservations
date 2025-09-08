const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-orange-600 to-red-600 p-4 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Hotel Paradise</h1>
        <div className="flex gap-6">
          <a href="#" className="text-white hover:text-yellow-200 transition-colors">Home</a>
          <a href="#" className="text-white hover:text-yellow-200 transition-colors">Rooms</a>
          <a href="#" className="text-white hover:text-yellow-200 transition-colors">Services</a>
          <a href="#" className="text-white hover:text-yellow-200 transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;