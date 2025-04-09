import Image from "next/image";

const aboutus = () => {
  return (
    <div>
      <div className="flex justify-center h-screen max-w-6xl mx-auto">
        <div className="">
          <h1 className="text-center text-6xl font-bold">About Us</h1>
          <p className="text-center text-2xl mt-10">


            Welcome to **A To Z Solution**, your one-stop destination for all home appliance sales, repairs, and installations. We specialize in providing top-notch services for **air conditioners, refrigerators, CCTV cameras, water purifiers, and more**. Whether you need a new appliance, expert repairs, or professional installation, we’ve got you covered.

            With years of experience in the field, we take pride in delivering reliable, affordable, and efficient solutions tailored to your needs. Our skilled technicians ensure **quick diagnostics and high-quality repairs** to keep your appliances running smoothly. We also offer **CCTV installation** to enhance your home and business security.

          </p>
        </div>
      </div>

      <div className="bg-[#00232E] rounded-xl text-white py-5 px-6 max-w-6xl mx-auto">
        <h2 className="text-7xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
          <div className="text-center w-48">
            <Image width={70} height={70} src="/electrician.png" alt="Quality Standards" className=" mx-auto" />
            <p className="mt-4 text-sm">Work to the highest quality standards</p>
          </div>
          <div className="text-center w-48">
            <Image width={70} height={70} src="/handshake.png" alt="Customer Value" className=" mx-auto" />
            <p className="mt-4 text-sm">Always adding value with our customers best interest in mind</p>
          </div>
          <div className="text-center w-48">
            <Image width={70} height={70} src="/rupee.png" alt="Transparent Pricing" className=" mx-auto" />
            <p className="mt-4 text-sm">Offer transparent pricing and accurate upfront estimates</p>
          </div>
          <div className="text-center w-48">
            <Image width={70} height={70} src="/steps.png" alt="Step-by-Step Guidance" className=" mx-auto" />
            <p className="mt-4 text-sm">Walk you through your options step-by-step</p>
          </div>
        </div>
      </div>


      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-5xl font-bold mb-6">Our Local Commitment</h2>
        <div className="flex">
          <div className="grid grid-cols-1 gap-6 text-left">
            <div>
              <h3 className="text-2xl font-semibold text-blue-600">Safety First</h3>
              <p className="text-gray-700">We work carefully to ensure we never miss anything. We prioritize your safety, completing all electrical work to code and never taking shortcuts.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-600">Honesty</h3>
              <p className="text-gray-700">We treat our clients with respect and will always give you our honest opinion, even if it means we will make less profit. We aim to build a working relationship with you and always provide accurate quotes and timelines.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-600">Accountability</h3>
              <p className="text-gray-700">We back up our work and always take responsibility for our actions. If you are not 100% satisfied, we’ll make it right.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-600">Respect</h3>
              <p className="text-gray-700">We respect your time, feelings, and property. We are always polite, arrive on time, and work cleanly, ensuring you are 100% satisfied with our services.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-600">Reliability</h3>
              <p className="text-gray-700">Our team takes pride in being punctual and reliable and will arrive when we say we will and fix the issue correctly the first time.</p>
            </div>
          </div>


        </div>
      </div>


    </div>
  );
};

export default aboutus