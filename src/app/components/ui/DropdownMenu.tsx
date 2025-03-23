
import React, { useState, useRef } from "react";
import Link from "next/link";
import { Box, ChevronDown } from "lucide-react";

interface MenuItem {
  label: string;
  href: string;
}

interface DropdownMenuProps {
  label: string;
  items: MenuItem[];
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items }) => {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 150);
  };

  return (
    <div
      className="relative hidden lg:inline "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="flex items-center font-medium text-gray-800 dark:text-gray-200  cursor-pointer">
        <Box className="mr-3" size={18}/>
        {label}
        <ChevronDown
          size={14}
          className={`dark:text-gray-200 text-neutral-700 transition-transform ml-3 mt-0.5 ${
            isHovered ? "rotate-180" : ""
          }`}
        />
      </span>

      {isHovered && (
        <div className="absolute mt-3 -left-1 w-48 bg-white dark:bg-neutral-800 rounded-3xl shadow-lg dark:shadow-inner dark:shadow-neutral-600 z-10">
          <div className="absolute top-0 right-20 -mt-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white dark:border-b-neutral-800 z-20"></div>
          <div className="absolute top-0 right-20 -mt-2.5 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-200 dark:border-b-neutral-700 z-10"></div>

          <ul role="menu" className="py-1">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
