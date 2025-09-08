import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';

// ...resto del código...

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
    </div>
  );
};

export default Home;