import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LayoutDashboard } from "lucide-react";
import LoginModal from "./LoginModal.jsx";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    return (
        <div className="relative">
            <nav className="bg-white sticky top-0 z-50">
                <div className="flex justify-between items-center py-4 px-6">
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                            <LayoutDashboard className="w-5 h-5" />
                        </div>
                        <span className="text-white font-bold text-lg z-10">HOME</span>

                        <div className="bg-blue-300 rounded-br-full h-24 md:h-48 w-40 md:w-[250px] absolute top-0 left-0"></div>
                        {/*<div className="bg-blue-500 rounded-br-full h-40 w-full absolute top-0 right-0"></div>*/}

                    </Link>
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="text-black hover:text-blue-300 text-lg font-bold">ABOUT</a>
                        <a href="#pricing" className="text-black hover:text-blue-300 text-lg font-bold">PRICING</a>
                        <a href="#contact" className="text-black hover:text-blue-300 text-lg font-bold">CONTACT</a>
                        <button
                            onClick={() => setShowLoginModal(true)}
                            className="cursor-pointer bg-white border-2 border-blue-300 text-blue-300 px-8 py-2 rounded hover:bg-blue-300 hover:text-white"
                        >
                            Login
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden px-6 pb-4 space-y-2 flex flex-col w-full">
                        <a
                            href="#about"
                            className="text-center text-black hover:text-blue-300 text-lg font-bold"
                            onClick={() => setIsOpen(false)}
                        >
                            ABOUT
                        </a>
                        <a
                            href="#pricing"
                            className="text-center text-black hover:text-blue-300 text-lg font-bold"
                            onClick={() => setIsOpen(false)}
                        >
                            PRICING
                        </a>
                        <a
                            href="#contact"
                            className="text-center text-black hover:text-blue-300 text-lg font-bold"
                            onClick={() => setIsOpen(false)}
                        >
                            CONTACT
                        </a>
                        <button
                            onClick={() => setShowLoginModal(true)}
                            className="cursor-pointer bg-white border-2 border-blue-300 text-blue-300 px-8 py-2 rounded hover:bg-blue-300 hover:text-white"
                        >
                            Login
                        </button>
                    </div>
                )}
            </nav>

            {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
        </div>
    );
}

export default Navbar;
