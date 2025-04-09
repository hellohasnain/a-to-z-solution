import Image from "next/image";
import Link from "next/link";

const ServicesSection = () => {
    const services = [
        {
            name: 'AC Services',
            href: "/acservices",
            icon: "/ac.png",
            alt: 'AC Services',
        },
        {
            name: 'Home Appliances',
            href: "/home.png",
            icon: "/home.png",
            alt: 'Plumber icon'
        },
        {
            name: 'Geyser',
            href: 'electrician-services',
            icon: '/geyser.png',
            alt: 'Electrical icon'
        },
        {
            name: 'Electrician',
            href: 'handyman-services',
            icon: "/electrician.png",
            alt: 'Electrician icon'

        },
        {
            name: 'CCTV Camera',
            href: 'carpenter-services',
            icon: '/cctv.png',
            alt: 'Carpenter Service'
        },
        {
            name: 'Jio Air-Fiber',
            href: 'painter-services',
            icon: '/jio.png',
            alt: 'Painter icon'
        },

    ];

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2">Services</h2>
                <p className="text-gray-500 text-center mb-8">Choose from our wide range of services</p>

                <div className="w-full">
                    <div className="w-full">
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 list-none p-0">
                            {services.map((service, index) => (
                                <li key={index} className="flex flex-col items-center">
                                    <Link href={service.href} className="flex flex-col items-center hover:opacity-80 transition-opacity">
                                        <Image
                                            width={50}
                                            height={50}
                                            loading="lazy"
                                            alt={service.alt}
                                            src={service.icon}

                                            className="mb-2"
                                        />
                                        <p className="text-center">{service.name}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;