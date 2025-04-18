import ACServiceCard from "@/components/ACServiceCard";
import { CheckCircle, Star, Tag } from "lucide-react";

const AcServices = () => {
    const stats = [
        {
            icon: <Star className="w-6 h-6 text-white" />,
            value: "4.4/5",
            label: "Average rating",
        },
        {
            icon: <Tag className="w-6 h-6 text-white" />,
            value: "500",
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
            title: 'AC General Service',
            subtitle: 'Per AC (1 to 2.5 tons)',
            originalPrice: 650,
            discountedPrice: 500,
            rating: 4.3,
            image: '/one.png'
        },
        {
            title: 'AC installation',
            subtitle: 'Installation with 10 Feet pipe (1 to 2.5 tons)',
            originalPrice: 1800,
            discountedPrice: 1200,
            rating: 4.4,
            image: '/two.jpg'
        },
        {
            title: 'AC Repairing',
            subtitle: 'Visit and Inspection Charges',
            discountedPrice: 800,
            rating: 4.3,
            image: '/three.png'
        },
        {
            title: 'AC Mounting and Dismounting',
            subtitle: 'Per AC (1 to 2.5 tons)',
            originalPrice: 4200,
            discountedPrice: 3500,
            rating: 4.6,
            image: '/four.png'
        },
        {
            title: 'AC Dismounting',
            subtitle: 'Per AC (1 to 2.5 tons)',
            originalPrice: 1200,
            discountedPrice: 1000,
            rating: 4.8,
            image: '/five.png'
        },

        {
            title: 'AC Mounting and Dismounting + AC General Service',
            subtitle: 'Per AC (1 to 2.5 tons)',
            originalPrice: 7500,
            discountedPrice: 5000,
            rating: 4.9,
            image: '/six.png'
        },
    ];

    return (
        <div>
            <div className="bg-blue-700 w-full">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">AC Services</h1>
                        <p className="text-lg sm:text-xl text-blue-100">
                            We Service, Repair, and Install All AC Brands!
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
                <h2 className="text-xl font-bold mb-4">AC Services</h2>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {services.map((service, index) => (
                        <ACServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AcServices;