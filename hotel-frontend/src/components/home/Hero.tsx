import hotelBg from '../../assets/images/hotel-bg.jpg';

const Hero = () => {
  return (
      <section className="h-screen relative flex items-center justify-center bg-gradient-to-b from-orange-50 to-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: `url(${hotelBg})` }}>
      </div>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-red-700 mb-6">
          Welcome to Paradise XD
        </h1>
        <p className="text-xl md:text-2xl text-orange-800 mb-8">
          Experience luxury and comfort in the heart of the city
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors shadow-lg">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Hero;