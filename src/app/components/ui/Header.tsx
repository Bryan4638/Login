import { Menu, X } from "lucide-react";
import SideBar from "./SideBar";
import { ThemeToggle } from "./ThemeToggle";
import { DropdownMenu } from "./DropdownMenu";
import { LanguageSelector } from "./LanguageSelector";
import Link from "next/link";
import {FC} from "react";
import { useSideBarStore } from "../../store/useSideBarStore";

interface Language {
  code: string;
  name: string;
  flagCode: string;
}


const Header = () => {
  const {isSidebarOpen, setIsSidebarOpen} = useSideBarStore();

  const productMenuItems = [
    { label: "Gift Cards", href: "/" },
    { label: "Device Service", href: "/" },
    { label: "Boxes/Dongles/Credits", href: "/about" },
  ];

  const handleSelectLanguage = (language: Language) => {
    console.log("Selected language:", language);
  };
  return (
    <header className="py-1.5 w-full mt-2">
      <div className="px-4">
        <div className="flex justify-around items-center">
          <button
            onClick={setIsSidebarOpen}
            className={`md:hidden fixed top-4 z-50 p-2 left-6 rounded-full bg-white dark:bg-neutral-800 size-9 flex items-center justify-center dark:shadow-inner shadow-md shadow-neutral-400 dark:shadow-neutral-600 transform transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "translate-x-60" : "-translate-x-0"
            }`}
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </button>
          <div
            className={`fixed left-0 top-0 h-full bg-neutral-100 w-80 rounded-[0px_32px_32px_0px] overflow-hidden border-[none] dark:shadow-[0px_5px_1.5px_-4px_#05050540,0px_6px_4px_-4px_#0505051a,0px_6px_13px_#0505051a,0px_24px_24px_-16px_#05050517,inset_2px_4px_16px_#f8f8f80f] dark:backdrop-blur-[0.2px] dark:backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(0.2px)_brightness(100%)] dark:[background:linear-gradient(180deg,rgba(40,40,40,0.6)_0%,rgba(40,40,40,0)_100%)] transform transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <SideBar />
          </div>
          <div
            className={`flex items-center space-x-10 transform transition-transform duration-300 ease-in-out z-10 ${
              isSidebarOpen ? "translate-x-80" : "-translate-x-0"
            }`}
          >
            <h1 className="text-3xl font-bold">DirectCodes</h1>
            <ThemeToggle className="hidden md:flex" width="16" height="10" />
            <DropdownMenu label="Product" items={productMenuItems} />
          </div>

          <div className=" items-center space-x-4 hidden md:flex">
            <LanguageSelector onSelectLanguage={handleSelectLanguage} />
            <Link href="/signIn">
              <button
                style={{}}
                className="py-1.5 px-5 h-12 w-28 rounded-full  bg-white dark:bg-[#212121] shadow-md shadow-neutral-400 dark:shadow-neutral-600 dark:shadow-inner dark:text-white border-gray-300 text-sm text-gray-800 hover:bg-gray-50 transition-colors duration-200"
              >
                Log In
              </button>
            </Link>
            <Link href="/signUp">
              <button className="py-1.5 px-5 h-12 w-28 rounded-full  bg-white dark:bg-[#212121] shadow-md shadow-neutral-400 dark:shadow-neutral-600 dark:shadow-inner dark:text-white border-gray-300 text-sm text-gray-800 hover:bg-gray-50 transition-colors duration-200">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
