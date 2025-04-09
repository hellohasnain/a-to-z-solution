import { Star } from 'lucide-react';
import Image from 'next/image';

const ACServiceCard = ({ title, subtitle, originalPrice, discountedPrice, rating, image }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-xs flex flex-col gap-2">
            <div className="flex gap-4">  {/* Added flex container for image and text side by side */}
                <Image
                    width={100}
                    height={100}
                    src={image}
                    alt={title}
                    className="object-cover rounded-xl"
                />
                <div className="flex flex-col gap-1">  {/* Container for text elements */}
                    <h3 className="text-blue-700 font-semibold text-sm">{title}</h3>
                    <p className="text-xs text-gray-600">{subtitle}</p>
                    <div className="flex items-center gap-2 text-sm">
                        {originalPrice && (
                            <span className="line-through text-gray-400">₹{originalPrice}</span>
                        )}
                        <span className="text-black font-semibold">₹{discountedPrice}</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                    <Star size={16} fill="currentColor" />
                    <span>{rating}</span>
                </div>
                <a
                    href="tel:7869277432"
                    className="bg-black text-white px-3 py-1 text-sm rounded-md"
                >
                    Add +
                </a>
            </div>
        </div>
    );
};

export default ACServiceCard;