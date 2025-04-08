import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-50">
      {/* Phone Button */}
      <div className="group relative">
        <a
          href="tel:7869277432"
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center gap-2 hover:w-40 transition-all duration-300"
        >
          <FaPhoneAlt className="text-xl" />
          <span className="hidden group-hover:inline">7869277432</span>
        </a>
      </div>

      {/* WhatsApp Button */}
      <div className="group relative">
        <a
          href="https://wa.me/7869277432"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center gap-2 hover:w-40 transition-all duration-300"
        >
          <FaWhatsapp className="text-xl" />
          <span className="hidden group-hover:inline">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingButtons;
