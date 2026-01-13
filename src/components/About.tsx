import React from 'react';
import { Heart, Award, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-amber-600" />,
      title: "Passion Driven",
      description: "Every cup is crafted with love and dedication to the art of coffee making."
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "Premium Quality",
      description: "We source the finest beans from sustainable farms around the world."
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Community Focused",
      description: "Creating a warm space where friends gather and memories are made."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2015 with a simple mission: to serve exceptional coffee in a space that feels like home.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Coffee shop interior"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              More Than Just Coffee
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Brew Haven, we believe coffee is more than just a beverage—it's a daily ritual, 
              a moment of pause, and a connection to something greater. Our carefully curated beans 
              are roasted in small batches to ensure every cup delivers the perfect balance of 
              flavor, aroma, and satisfaction.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From our signature blends to seasonal specialties, every drink is prepared by our 
              skilled baristas who share our passion for excellence and hospitality.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;