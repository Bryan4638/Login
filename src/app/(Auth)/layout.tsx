"use client"
import Image from "next/image";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import Light from "../../../public/images/Stars.png";
import Dark from "../../../public/images/StarsDark.png";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
      <div className="relative h-screen">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <Image
            src={Light}
            alt="Light Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="absolute inset-0 hidden dark:flex items-center justify-center  dark:bg-[#1e1e1e]">
          <Image
            src={Dark}
            alt="Light Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="relative z-10">
          <div className="h-screen w-screen flex flex-col bg-transparent transition-colors duration-200 overflow-hidden">
            <Header/>
            {children}

            <Footer />
          </div>
        </div>
      </div>
  );
}
