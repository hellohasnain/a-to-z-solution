import Image from "next/image";

const aboutus = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] max-w-6xl mx-auto">
        <div className="w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">About Us</h1>
          <p className="text-lg md:text-xl lg:text-2xl mt-6 md:mt-10 text-center leading-relaxed">
            A To Z Solution में आपका दिल से स्वागत है — आपका अपना एक ही जगह पर सब कुछ पाने वाला सोल्यूशन!
            <br /><br />
            चाहे बात हो होम अप्लायंसेज़ की सेल, रिपेयर या इंस्टॉलेशन की — हम हर ज़रूरत का ख़्याल रखते हैं।
            <br /><br />
            हम माहिर हैं एयर कंडीशनर्स, रेफ्रिजरेटर, सीसीटीवी कैमरा, वॉटर प्यूरीफायर और कई और डिवाइसेज़ में।
            अगर आपको चाहिए एक नया अप्लायंस, या फिर तजुर्बेकार टेक्नीशियन से रिपेयर या प्रोफेशनल इंस्टॉलेशन, तो हम आपके साथ हैं।
            <br /><br />
            हमारे सालों के तजुर्बे का फ़ायदा उठाइए — हम फ़राहम करते हैं भरोसेमंद, बजट-फ्रेंडली और बेहतरीन सर्विस, बिल्कुल आपकी ज़रूरत के मुताबिक़।
            <br /><br />
            हमारे स्किल्ड टेक्नीशियन देते हैं तेज़ डायग्नोसिस और हाई-क्वालिटी रिपेयर, ताकि आपके अप्लायंसेज़ बिना किसी रुकावट के चलें।
            और हाँ, आपके घर या बिज़नेस की सिक्योरिटी के लिए हम करते हैं सीसीटीवी इंस्टॉलेशन भी — ताकि आप रहें हमेशा बे-फिक्र।
            <br /><br />
            A To Z Solution – जहाँ क्वालिटी और सर्विस दोनों मिलती हैं, बिना किसी कॉम्प्रोमाइज़ के।
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#00232E] rounded-xl text-white py-8 px-4 sm:px-6 max-w-6xl mx-auto my-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center">
              <Image width={70} height={70} src="/electrician.png" alt="Quality Standards" className="mx-auto" />
            </div>
            <p className="mt-4 text-sm sm:text-base">Work to the highest quality standards</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <Image width={70} height={70} src="/handshake.png" alt="Customer Value" className="mx-auto" />
            </div>
            <p className="mt-4 text-sm sm:text-base">Always adding value with our customers best interest in mind</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <Image width={70} height={70} src="/rupee.png" alt="Transparent Pricing" className="mx-auto" />
            </div>
            <p className="mt-4 text-sm sm:text-base">Offer transparent pricing and accurate upfront estimates</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <Image width={70} height={70} src="/steps.png" alt="Step-by-Step Guidance" className="mx-auto" />
            </div>
            <p className="mt-4 text-sm sm:text-base">Walk you through your options step-by-step</p>
          </div>
        </div>
      </div>

      {/* Our Local Commitment Section */}
      <div className="max-w-4xl mx-auto p-4 sm:p-6 text-center my-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Our Local Commitment</h2>
        <div className="grid grid-cols-1 gap-8 text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">Safety First</h3>
            <p className="text-gray-700 mt-2 text-base sm:text-lg">We work carefully to ensure we never miss anything. We prioritize your safety, completing all electrical work to code and never taking shortcuts.</p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">Honesty</h3>
            <p className="text-gray-700 mt-2 text-base sm:text-lg">We treat our clients with respect and will always give you our honest opinion, even if it means we will make less profit. We aim to build a working relationship with you and always provide accurate quotes and timelines.</p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">Accountability</h3>
            <p className="text-gray-700 mt-2 text-base sm:text-lg">We back up our work and always take responsibility for our actions. If you are not 100% satisfied, we will make it right.</p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">Respect</h3>
            <p className="text-gray-700 mt-2 text-base sm:text-lg">We respect your time, feelings, and property. We are always polite, arrive on time, and work cleanly, ensuring you are 100% satisfied with our services.</p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">Reliability</h3>
            <p className="text-gray-700 mt-2 text-base sm:text-lg">Our team takes pride in being punctual and reliable and will arrive when we say we will and fix the issue correctly the first time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutus;