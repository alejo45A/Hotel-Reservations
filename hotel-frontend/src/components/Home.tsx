// src/components/Home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-400 via-yellow-300 to-red-500 text-gray-900 font-sans">
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">HotelReserve</div>
        <nav className="space-x-8 text-white font-medium">
          <a href="#about" className="hover:text-yellow-300 transition">About</a>
          <a href="#features" className="hover:text-yellow-300 transition">Features</a>
          <a href="#pricing" className="hover:text-yellow-300 transition">Pricing</a>
          <button className="bg-red-700 hover:bg-red-800 transition px-4 py-2 rounded shadow-lg font-semibold">
            Contact
          </button>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <section className="md:w-1/2 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Reserva <br /> el hotel perfecto <br /> para tu próxima aventura
          </h1>
          <p className="text-lg md:text-xl font-light mb-8 max-w-md drop-shadow-md">
            Nuestro sistema facilita la reserva rápida y segura con una experiencia interactiva, moderna y totalmente responsive. ¡Empieza ahora y asegura tu lugar ideal!
          </p>
          <div className="flex space-x-6">
            <button className="bg-yellow-400 text-red-700 font-semibold px-6 py-3 rounded shadow-lg hover:bg-yellow-300 transition">
              Explorar Hoteles
            </button>
            <button className="bg-transparent border-2 border-yellow-400 text-white font-semibold px-6 py-3 rounded hover:bg-yellow-400 hover:text-red-700 transition">
              Aprende Más
            </button>
          </div>
        </section>

        {/* Image Section */}
        <section className="md:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Hotel room"
            className="rounded-xl shadow-2xl object-cover w-full h-full max-h-[400px]"
          />
          {/* Decorative shapes as in example, stylized */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply opacity-30 animate-pulse"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-500 rounded-full mix-blend-multiply opacity-40 animate-ping"></div>
        </section>
      </main>
    </div>
  );
};

export default Home;
