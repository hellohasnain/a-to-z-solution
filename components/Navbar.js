import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
    const router = useRouter();
    const { pathname } = router;
    const [pages, setPages] = useState([]);
    const [mainPages, setMainPages] = useState([]);
    const [categoryPages, setCategoryPages] = useState([]);
    const [subCategoryPages, setSubCategoryPages] = useState([]);
    const [statePages, setStatePages] = useState([]);
    const [cityPages, setCityPages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const setPagesToState = (pages) => {
        pages.forEach((page) => {
            if (page.citySlug) {
                if (!cityPages.includes(page)) {
                    setCityPages((prev) => [...prev, page]);
                }
            } else if (page.stateSlug) {
                if (!statePages.includes(page)) {
                    setStatePages((prev) => [...prev, page]);
                }
            } else if (page.subCategorySlug) {
                if (!subCategoryPages.includes(page)) {
                    setSubCategoryPages((prev) => [...prev, page]);
                }
            } else if (page.categorySlug) {
                if (!categoryPages.includes(page)) {
                    setCategoryPages((prev) => [...prev, page]);
                }
            } else {
                if (!mainPages.includes(page)) {
                    setMainPages((prev) => [...prev, page]);
                }
            }
        });
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#F9F9F9] px-4 py-2 flex justify-between items-center">
            <div>
                <Link href="/">
                    <Image
                        src="/atoz.png"
                        alt="logo"
                        width={200}
                        height={150}
                        quality={100}
                    />
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex space-x-6">
                <Link
                    href="/"
                    className={`text-black text-xl font-bold hover:text-[#FC4266] ${pathname === "/" ? "border-b-2 border-[#FC4266]" : ""
                        }`}
                >
                    Home
                </Link>
                <Link
                    href="/aboutus"
                    className={`text-black text-xl font-bold hover:text-[#FC4266] ${pathname === "/aboutus" ? "border-b-2 border-[#FC4266]" : ""
                        }`}
                >
                    About Us
                </Link>
                <div
                    onClick={toggleMenu}
                    className="flex items-center  text-black text-xl font-bold rounded-md cursor-pointer hover:text-[#FC4266] "
                >
                    <span>Services</span>
                    {/* Down Arrow (Rotates when open) */}
                    <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
                            }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                onClick={toggleMenu}
                className="sm:hidden p-2 text-white bg-blue-500 rounded-md"
            >
                Menu
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="sm:hidden absolute top-16 right-0 w-full bg-white shadow-lg">
                    <div className="flex flex-col p-4">
                        <Link
                            href="/"
                            className={`text-black hover:text-[#FC4266] py-2 ${pathname === "/" ? "border-b-2 border-[#FC4266]" : ""
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/aboutus"
                            className={`text-black hover:text-[#FC4266] py-2 ${pathname === "/aboutus" ? "border-b-2 border-[#FC4266]" : ""
                                }`}
                        >
                            About Us
                        </Link>

                    </div>
                </div>
            )}

            {/* Services Drawer */}
            {isOpen && (
                <div className="hidden sm:block absolute top-16 right-0 w-48 bg-white rounded-md shadow-lg">
                    <div className="py-1">
                        <a
                            href="acservices"
                            className="block px-4 py-2 text-xl font-bold text-gray-700 hover:bg-gray-100"
                        >
                            AC Services
                        </a>
                        <a
                            href="homeappliances"
                            className="block px-4 py-2 text-xl font-bold text-gray-700 hover:bg-gray-100"
                        >
                            Home Appliances
                        </a>
                        <a
                            href="electrician"
                            className="block px-4 py-2 text-xl font-bold text-gray-700 hover:bg-gray-100"
                        >
                            Electrician
                        </a>
                        <a
                            href="cctv"
                            className="block px-4 py-2 text-xl font-bold text-gray-700 hover:bg-gray-100"
                        >
                            CCTV Camera
                        </a>

                        <a
                            href="airfiber"
                            className="block px-4 py-2 text-xl font-bold text-gray-700 hover:bg-gray-100"
                        >
                            Air-Fiber
                        </a>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;