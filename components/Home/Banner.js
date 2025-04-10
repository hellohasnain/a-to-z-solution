import Image from 'next/image'

const Banner = () => {
  return (
    <div className='flex justify-around items-center'>
      <div>
        <h1 className='text-6xl font-bold mx-5 mt-10'>Home <br /> Maintenance <br /> Made Easy!!</h1>
        <p className='text-xl mx-5 mt-5'>Connecting customers and technicians <br /> for quick, safe, and affordable <br /> bookings.</p>
        <a href="tel:+1234567890">
          <button className='bg-blue-700 text-white mx-4 px-4 py-3 rounded-md mt-5'>
            Book Now
          </button>
        </a>
      </div>
      <div>
        <Image src="/banner.jpg" alt="Banner" width={500} height={500}
          className='mt-10 mb-10 rounded-sm' />
      </div>
    </div>
  )
}

export default Banner