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
        <nav className="bg-[#F9F9F9] px-4 py-2 flex items-center justify-between">
            <div>
                <Link href="/">
                    <Image
                        src="/logo.png"
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
                    className={`text-black hover:text-[#FC4266] ${pathname === "/" ? "border-b-2 border-[#FC4266]" : ""
                        }`}
                >
                    Home
                </Link>
                <Link
                    href="/aboutus"
                    className={`text-black hover:text-[#FC4266] ${pathname === "/aboutus" ? "border-b-2 border-[#FC4266]" : ""
                        }`}
                >
                    About Us
                </Link>
                <div
                    onClick={toggleMenu}
                    className="flex items-center  text-black rounded-md cursor-pointer hover:text-[#FC4266] "
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
                        <div className="mt-2">
                            <h3 className="font-bold text-lg">Our Services</h3>
                            <ul className="list-disc pl-5">
                                {mainPages.map((page) => (
                                    <li
                                        key={page._id}
                                        onClick={() => router.push(`/${page.pageSlug}`)}
                                        className="cursor-pointer font-semibold py-1"
                                    >
                                        {page.pageTitle}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Services Drawer */}
            {isOpen && (
                <div className="hidden sm:block absolute top-16 right-0 w-48 bg-white rounded-md shadow-lg">
                    <div className="py-1">
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Electrical Repairs
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Lighting Installation
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Panel Upgrades
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Wiring Services
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Surge Protection
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Emergency Services
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Smart Home Automation
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;