// components/ReviewSlider.jsx

"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const reviews = [
    {
        name: "John Doe",
        feedback: "This electrician service was fast, reliable, and affordable!",
        image: "/user1.jpg",
    },
    {
        name: "Jane Smith",
        feedback: "I loved how professional they were. Highly recommended!",
        image: "/user2.jpg",
    },
    {
        name: "Ali Khan",
        feedback: "Very satisfied with the service quality. Will call again.",
        image: "/user3.jpg",
    },
];

export default function ReviewSlider() {
    return (
        <div className="w-full bg-gray-100 py-10">
            <h2 className="text-center text-3xl font-bold mb-6">Customer Reviews</h2>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="max-w-2xl mx-auto"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                            {/* <img
                                src={review.image}
                                alt={review.name}
                                className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                            /> */}
                            <p className="text-gray-600 italic">"{review.feedback}"</p>
                            <h4 className="text-xl font-semibold mt-4">{review.name}</h4>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
