// components/Layout.tsx
"use client"
import {Capriola} from "next/font/google";
import "./globals.css";
import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
const geistSans = Capriola({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-capriola",
});
const geistMono = Capriola({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-capriola",
});
const backgroundImageStyle = {
  backgroundImage: `url(
    https://st2.depositphotos.com/10956332/42514/i/450/depositphotos_425144442-stock-photo-volumetric-abstract-background-copy-space.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  color: 'white',
  marginTop: 5,
  padding: 50,
  margin:10,
  alignItems: 'center',
};
const RootLayout = ({ children }: { children: React.ReactNode }) =>{
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en">
      <body
        style={backgroundImageStyle} className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className="grid grid-cols-2 lg:mr-20 sm:mr-12">
      <h1 className="text-3xl float-left">M@@EYDAH</h1>
      <div className="lg:hidden">
      <button
      className="float-right text-white text-2xl focus:outline-none"
      onClick={toggleMenu}
      >
      ☰
      </button>
      {isMenuOpen && (
          <div className="mt-10 flex flex-col space-y-2  border-2 border-white  top-full left-0 w-full rounded-md mr-5">
            <Link href="/About" className="text-white hover:text-gray-300 p-4">
              Home
            </Link>
            <Link href="/Resume" className="hover:text-gray-300 text-white p-4">
              About
            </Link>
            <Link href="/Porfolio" className="hover:text-gray-300 text-white p-4">
              Work
            </Link>
            <Link href="/contact" className="hover:text-gray-300 text-white p-4">
              Contact
            </Link>
          </div>
        )}
      </div>
      </div>
      <div className="grid lg:grid-cols-[1fr_2fr] sm:grid-cols-1 sm:grid-rows-1fr-1fr gap-4 mr-16 mt-4">
        <div className="">
           <Sidebar/>
        </div>
        <div className="h-auto">
          <div className="">
            <div className="flex">
                <div className="w-1/5"></div>
                <div className="h-32 rounded-l-xl text-black p-4 w-4/5 sm:hidden lg:block !hidden lg:!block">
                <nav className="flex space-x-4">
                <div className="bg-white rounded-lg h-24 w-28 place-items-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 40 40">
                <path fill="#98ccfd" d="M1.5,5c0-1.733,1.767-3.5,3.5-3.5h30c1.733,0,3.5,1.767,3.5,3.5v26c0,1.733-1.767,3.5-3.5,3.5H6.819 L1.5,38.933V5z"></path><path fill="#4788c7" d="M35,2c1.458,0,3,1.542,3,3v26c0,1.458-1.542,3-3,3H7H6.638L6.36,34.232L2,37.865V5 c0-1.458,1.542-3,3-3H35 M35,1H5C3,1,1,3,1,5v35l6-5h28c2,0,4-2,4-4V5C39,3,37,1,35,1L35,1z"></path><path fill="#fff" d="M20 7.259A1.696 1.696 0 1 0 20 10.651 1.696 1.696 0 1 0 20 7.259zM21 25L21 13 17 13 17 15 19 15 19 25 17 25 17 27 23 27 23 25z"></path>
                </svg> 
                <Link href="/About" className="hover:text-gray-600">
                  About
                </Link>
                </div>
                <div className="bg-white rounded-lg w-28 h-24 place-items-center">
                <Image width={70} height={70} src="https://img.icons8.com/bubbles/100/resume.png" alt="resume"/>
                <Link href="/Resume" className="hover:text-gray-600">
                  Resume
                </Link>
                </div>
                <div className="bg-white rounded-lg w-28 h-24 place-items-center">
                <Image width={70} height={70} src="https://img.icons8.com/ios-filled/50/office.png" alt="office"/>
                <Link href="/Porfolio" className="hover:text-gray-600">
                  Work
                </Link>
                </div>
                <div className="bg-white rounded-lg w-28 h-24 place-items-center">
                <Image width={70} height={70} src="https://img.icons8.com/color/48/blog.png" alt="blog"/>
                <Link href="/services" className="hover:text-gray-600">
                    Blog
                </Link>
                </div>
                <div className="bg-white rounded-lg w-28 h-24 place-items-center">
                <Image width={70} height={70} src="https://img.icons8.com/color/48/contact-card.png" alt="contact-card"/>
                <Link href="/contact" className="hover:text-gray-600">
                  Contact
                </Link>
                </div>
               </nav>

                </div>
            </div>
            </div>
            <div className="overflow-y-auto">
              {children}
            </div>
        </div>
      </div>
      </body>
    </html>
  );
}
export default RootLayout;
