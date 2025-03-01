'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const TrendingService = () => {
  const services = [
    {
      id: 1,
      title: 'AC General Service',
      image: '/banner.jpg', // Replace with actual image path
      oldPrice: 3500,
      newPrice: 2150,
      rating: 4.3,
      contact: 'https://wa.me/1234567890',
    },
    {
      id: 2,
      title: 'Electrical Wiring',
      image: '/banner.jpg', // Replace with actual image path
      oldPrice: null,
      newPrice: 500,
      rating: 4.3,
      contact: 'https://wa.me/1234567890',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-blue-600 text-lg font-semibold">Trending Services</h3>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">Hot-sellers are up for grabs!</h2>
          <p className="text-gray-600 mt-4">
            The high customer repeat rate & excellent reviews show how much our customers love these Mahir Company (Mr.Mahir) services!
          </p>
        </div>

        <div className="md:w-1/2 relative flex items-center justify-center">
          <button className="absolute left-0 bg-blue-600 text-white p-2 rounded-full shadow-lg" onClick={prevSlide}>
            <BsChevronLeft size={24} />
          </button>
          <a href={services[activeIndex].contact} target="_blank" rel="noopener noreferrer" className="block w-60">
            <div className="bg-blue-600 rounded-xl text-white p-4 w-60 relative shadow-lg">
              <div className="w-full h-32 relative rounded-lg overflow-hidden">
                <Image src={services[activeIndex].image} alt={services[activeIndex].title} layout="fill" objectFit="cover" />
              </div>
              <h3 className="mt-3 text-lg font-semibold">{services[activeIndex].title}</h3>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400 text-sm">⭐ {services[activeIndex].rating}</span>
              </div>
              <div className="mt-2 text-lg font-bold">
                {services[activeIndex].oldPrice && <span className="line-through text-gray-300 mr-2">Rs:{services[activeIndex].oldPrice}</span>}
                <span className="text-white">Rs:{services[activeIndex].newPrice}</span>
              </div>
            </div>
          </a>
          <button className="absolute right-0 bg-blue-600 text-white p-2 rounded-full shadow-lg" onClick={nextSlide}>
            <BsChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingService;
