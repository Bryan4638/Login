import React, { useState, useEffect, useRef } from "react";
import ReactCountryFlag from "react-country-flag";
import { ChevronDown } from "lucide-react";

interface Language {
  code: string;
  name: string;
  flagCode: string;
}

interface LanguageSelectorProps {
  size?: number;
  onSelectLanguage: (language: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  size = 10,
  onSelectLanguage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
    code: "en",
    name: "English",
    flagCode: "GB",
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = [
    { code: "en", name: "English", flagCode: "GB" },
    { code: "de", name: "Deutsch", flagCode: "DE" },
    { code: "pl", name: "Polish", flagCode: "PL" },
    { code: "pt", name: "Portugues", flagCode: "PT" },
    { code: "ru", name: "Русский", flagCode: "RU" },
    { code: "es", name: "Español", flagCode: "ES" },
    { code: "fr", name: "Français", flagCode: "FR" },
    { code: "it", name: "Italiano", flagCode: "IT" },
    { code: "nl", name: "Nederlands", flagCode: "NL" },
    { code: "ja", name: "日本語", flagCode: "JP" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectLanguage = (language: Language) => {
    setSelectedLanguage(language);
    onSelectLanguage(language);
    setIsOpen(false);
  };

  const renderFlag = (flagCode: string) => (
    <ReactCountryFlag
      countryCode={flagCode}
      svg
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
      }}
    />
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center">
        <div
          className={`flex items-center justify-center h-11 w-11 rounded-full bg-gray-100 dark:bg-neutral-800 shadow-md shadow-neutral-400 dark:shadow-inner dark:shadow-neutral-600 mr-[-0.5rem] z-10 overflow-hidden`}
        >
          {renderFlag(selectedLanguage.flagCode)}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 rounded-r-md border-gray-200  pl-3 pr-2 py-1 bg-transparent dark:text-gray-200"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span className="uppercase font-medium text-base pl-3">
            {selectedLanguage.code}
          </span>
          <ChevronDown
            size={23}
            className={`text-orange-500 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute top-full -right-12 mt-3 py-3 w-44 bg-white  dark:bg-neutral-800 rounded-2xl shadow-lg shadow-neutral-400 dark:shadow-inner dark:shadow-neutral-600 border border-gray-200 dark:border-none z-10 ">
          <ul
            role="listbox"
            className="py-1 max-h-60 overflow-y-auto scrollbar-hide"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(156, 163, 175, 0.5) transparent",
            }}
          >
            {languages.map((language) => (
              <li key={language.code}>
                <div className="flex dark:hover:bg-gradient-to-r hover:bg-gradient-to-r dark:from-neutral-700 from-neutral-200 to-transparents items-center">
                  {selectedLanguage.name === language.name && (
                    <span className=" size-2 rounded-full bg-orange-700 -m-1 shadow-[0_0_8px_4px_rgba(255,0,0,0.5)]"></span>
                  )}
                  <button
                    onClick={() => handleSelectLanguage(language)}
                    className="flex items-center w-full px-4 py-2 text-sm text-left dark:text-gray-200 "
                  >
                    <div className="flex items-center gap-3">
                      {renderFlag(language.flagCode)}
                      <span>{language.name}</span>
                    </div>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
