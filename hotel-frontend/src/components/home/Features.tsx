const Features = () => {
  const features = [
    {
      title: "Luxury Rooms",
      description: "Spacious and elegant rooms with modern amenities",
      icon: "🛏️"
    },
    {
      title: "Fine Dining",
      description: "Experience world-class cuisine at our restaurants",
      icon: "🍽️"
    },
    {
      title: "Spa & Wellness",
      description: "Relax and rejuvenate with our premium spa services",
      icon: "💆"
    },
    {
      title: "24/7 Service",
      description: "Round-the-clock assistance for all your needs",
      icon: "🕒"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-red-700 mb-2">{feature.title}</h3>
              <p className="text-orange-800">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;