import React from "react";

interface DividerProps {
  text?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ text, className }) => {
  if (!text) {
    return (
      <hr
        className={`border-gray-200 dark:border-neutral-600 my-4 ${
          className || ""
        }`}
      />
    );
  }

  return (
    <div className={`relative flex items-center my-6 ${className || ""}`}>
      <div className="h-[1px] flex-grow  bg-gradient-to-r to-neutral-600 from-transparent "></div>
      <span className="flex-shrink mx-4 text-sm text-gray-500 dark:text-gray-400">
        {text}
      </span>
      <div className="h-[1px] flex-grow  bg-gradient-to-r from-neutral-600 to-transparent"></div>
    </div>
  );
};
