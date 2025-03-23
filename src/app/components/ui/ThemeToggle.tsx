import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Dark from "../../../../public/images/darkMode.png";
import Light from "../../../../public/images/lightMode.png";
import Image from "next/image";


interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  width?: string;
  height?: string;
}

export const ThemeToggle: React.FC<ToggleProps> = ({className, width, height}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`relative items-center ${className}`}>
      <button
        onClick={toggleTheme}
        className={`relative inline-flex h-${height} w-${width} items-center rounded-full bg-transparent transition-colors duration-200`}
        aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      >
        {isDark ? (
          <Image
            src={Dark}
            alt="Dark Background"
            objectFit="cover"
            quality={100}
          />
        ) : (
          <Image
            src={Light}
            alt="Light Background"
            objectFit="cover"
            quality={100}
          />
        )}
      </button>
    </div>
  );
};
