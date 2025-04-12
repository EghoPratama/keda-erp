import { X } from "lucide-react";
import LoginImage from "../assets/images/undraw_sign-up_z2ku.svg";

function LoginModal({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white w-full max-w-md mx-4 rounded-lg shadow-lg p-6 relative">
                {/* Close button */}
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer">
                    <X className="w-5 h-5" />
                </button>

                <img
                    src={LoginImage}
                    alt="Login Illustration"
                    className="w-28 h-28 mx-auto mb-4"
                />

                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Login</h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Masukan email anda"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Masukan password anda"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-white border-2 border-blue-300 text-blue-300 px-8 py-2 rounded hover:bg-blue-300 hover:text-white transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginModal;
