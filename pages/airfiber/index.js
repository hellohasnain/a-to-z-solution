
import Airfibercard from "@/components/Airfibercard";
import { CheckCircle, Star, Tag } from "lucide-react";

const airfiber = () => {
    const stats = [
        {
            icon: <Star className="w-6 h-6 text-white" />,
            value: "4.4/5",
            label: "Average rating",
        },
        {
            icon: <Tag className="w-6 h-6 text-white" />,
            value: "2222",
            label: "Start from",
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-white" />,
            value: "5554",
            label: "Done order",
        },
    ];

    const services = [

        {
            title: 'Airtel Air Fiber Installation',
            subtitle: 'Installation With 3.5 Month Plan',
            originalPrice: 3499,
            discountedPrice: 2500,
            rating: 4.4,
            image: '/airtel.jpeg'
        },
        {
            title: 'JIO Air Fiber installation',
            subtitle: 'Installation with 10 Feet pipe (1 to 2.5 tons)',
            originalPrice: 2999,
            discountedPrice: 2222,
            rating: 4.4,
            image: '/jio.webp'
        },

    ];

    return (
        <div>
            <div className="bg-blue-700 w-full">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Air-Fiber</h1>
                        <p className="text-lg sm:text-xl text-blue-100">
                            We Service, Repair, and Install All Air-Fiber Brands!
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 sm:px-6 sm:py-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="bg-blue-700 p-2 rounded-full flex-shrink-0">
                                    {stat.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-blue-700 font-bold text-lg sm:text-xl">{stat.value}</h3>
                                    <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-gray-100 px-4 py-4">
                <h2 className="text-xl font-bold mb-4">Air Fiber </h2>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {services.map((service, index) => (
                        <Airfibercard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default airfiber;