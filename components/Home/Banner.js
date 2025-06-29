'use client';

import Image from 'next/image';

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-around items-center">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mx-5 mt-10">
          Home <br /> Maintenance <br /> Made Easy!!
        </h1>
        <p className="text-lg sm:text-xl mx-5 mt-5">
          Connecting customers and technicians <br />
          for quick, safe, and affordable <br />
          bookings.
        </p>
        <a href="tel:+1234567890">
          <button className="bg-blue-700 text-white mx-4 px-4 py-3 rounded-md mt-5">
            Book Now
          </button>
        </a>
      </div>

      <div className="relative w-full max-w-[500px] h-[300px] sm:h-[400px] md:h-[500px] mt-10 mb-10 rounded-2xl overflow-hidden">
        <Image
          src="/banner.jpg"
          alt="Banner"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
