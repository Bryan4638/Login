import React from "react";
import { Button } from "./Button";
import { ThemeToggle } from "./ThemeToggle";
import { Box } from "lucide-react";
import { Divider } from "./Divider";
import { LanguageSelector } from "./LanguageSelector";
import Link from "next/link";

function SideBar() {
  const menuItems = [
    { title: "Gift Cards" },
    { title: "Device Service" },
    { title: "Boxes / Dongles / Credits" },
  ];
  const footerLinks = ["Terms & Conditions", "Privacy Policy", "Contact us"];
  return (
    <div className="pl-7 pt-7 w-full h-full flex flex-col items-start justify-start">
      <div className="inline-flex items-center gap-[70px]  top-7 left-[24px]">
        <h1 className="text-3xl font-bold">DirectCodes</h1>
      </div>
      {/* Sign Up and Log In buttons */}
      <div className="flex w-[262px] items-center gap-4 pt-16 ">
        <Link href="/signUp">
          <Button className="flex w-[123px] items-center justify-center gap-2.5 px-8 py-4 bg-[#282828b2] rounded-[32px] overflow-hidden shadow-[inset_2px_4px_16px_#f8f8f80f,inset_0px_2px_2px_#f8f8f814] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] border-none">
            <span className="font-base-2-SM font-[number:var(--base-2-SM-font-weight)] text-[#f8f8f8f2] text-[length:var(--base-2-SM-font-size)] text-center tracking-[var(--base-2-SM-letter-spacing)] leading-[var(--base-2-SM-line-height)] whitespace-nowrap [font-style:var(--base-2-SM-font-style)]">
              Sign Up
            </span>
          </Button>
        </Link>
        <Link href="/signIn">
          <Button
            variant="outline"
            className="flex w-[123px] items-center justify-center gap-2.5 px-8 py-4 bg-white dark:bg-[#282828b2] rounded-[32px] overflow-hidden 
          shadow-lg
          dark:shadow-[inset_2px_4px_16px_#f8f8f80f,inset_0px_2px_2px_#f8f8f814] dark:backdrop-blur-[50px] backdrop-brightness-[100%] dark:[-webkit-backdrop-filter:blur(50px)_brightness(100%)] border-none"
          >
            <span className="font-[number:var(--base-2-SM-font-weight)] text-neutral-900 dark:text-[#f8f8f8b2] text-[length:var(--base-2-SM-font-size)] leading-[var(--base-2-SM-line-height)] font-base-2-SM text-center tracking-[var(--base-2-SM-letter-spacing)] whitespace-nowrap [font-style:var(--base-2-SM-font-style)]">
              Log In
            </span>
          </Button>
        </Link>
      </div>

      {/* Navigation menu */}
      <nav className=" w-[268px] h-[180px] pt-14">
        <div className=" w-[141px] h-6 flex items-center gap-2.5">
          <Box />
          <div className=" w-[107px] h-5 ">
            <span className="opacity-80 font-semibold text-gray-800 text-lg dark:text-gray-200 leading-5 whitespace-nowrap tracking-[0]">
              Product page
            </span>
          </div>
        </div>
        <Divider />
        <div className="flex flex-col gap-6">
          {menuItems.map((item, index) => (
            <h1
              key={index}
              className="opacity-80 font-medium text-neutral-900 dark:text-[#f8f8f8b2] text-base leading-5 whitespace-nowrap tracking-[0] cursor-pointer hover:text-[#f8f8f8f2] transition-colors "
            >
              {item.title}
            </h1>
          ))}
        </div>
      </nav>

      {/* Theme toggle */}
      <div className="inline-flex items-center gap-6 pt-24">
        <div className=" w-24 h-[52px] bg-[100%_100%]">
          <ThemeToggle />
        </div>
        <div className="flex flex-col w-[92px] items-start gap-2">
          <div className="self-stretch mt-[-1.00px] opacity-80 font-medium text-neutral-950 dark:text-[#f8f8f8f2] text-base leading-5  tracking-[0]">
            Dark Theme
          </div>
          <div className=" self-stretch font-normal text-neutral-800 dark:text-[#f8f8f880] text-sm leading-4 tracking-[0]">
            Currently
          </div>
        </div>
      </div>

      {/* Language selector */}
      <div className="inline-flex items-center gap-3 pt-12">
        <LanguageSelector
          size={12}
          onSelectLanguage={(len) => console.log(len)}
        />
      </div>

      {/* Footer links */}
      <div className="inline-flex flex-col items-start justify-center gap-6 pt-16">
        {footerLinks.map((link, index) => (
          <div
            key={index}
            className=" w-fit opacity-80 font-medium text-neutral-950 dark:text-[#f8f8f8f2] text-base leading-5 whitespace-nowrap  tracking-[0] cursor-pointer hover:opacity-100 transition-opacity"
          >
            {link}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
