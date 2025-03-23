import { Mail } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";
import { useSideBarStore } from "../../store/useSideBarStore";

const Footer = () => {
  const {isSidebarOpen} = useSideBarStore();

  return (
    <footer className="py-1.5 w-full mb-4">
      <div
        className={`px-6 w-full flex-1 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-80" : "translate-x-0"
        }`}
      >
        <div className="flex justify-around items-center w-full">
          <div className="space-x-4 font-medium hidden md:flex">
            <Link
              href="/terms"
              className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/"
              className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            >
              Contact us
            </Link>
          </div>

          <div className="items-center relative flex ">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="text-gray-400 dark:text-gray-500" size={14} />
            </div>
            <input
              type="email"
              placeholder="E-mail address"
              className="px-3 py-2 pl-9 w-80 text-xs h-10 text-gray-700 dark:text-gray-300 bg-gray-300 dark:bg-[#121212] rounded-l-full focus:outline-none "
            />
            <button
              type="button"
              className="absolute shadow-inner h-12 w-28 dark:shadow-neutral-500 -right-7 rounded-full px-4 py-3 text-xs text-black dark:text-white bg-white dark:bg-[#212121] hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-200"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
