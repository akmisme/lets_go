"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, CircleUserRound } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitch";
import Image from "next/image";
import Log from "@/app/components/login";
import Register from "./register";
import Popup from "./popup";
import { usePathname } from "next/navigation";
import en from "../../messages/en.json";
import mm from "../../messages/mm.json";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false); // added
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // detect locale from URL
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = ["en", "mm"].includes(pathSegments[0])
    ? pathSegments[0]
    : "en";

  // load translations
  const headerData = currentLocale === "mm" ? mm.header : en.header;
  const accountData = currentLocale === "mm" ? mm.account : en.account;

  return (
    <header
      className={`w-full fixed top-0 z-[1000] transition-all duration-500 ${
        scrolled ? "bg-white shadow" : "bg-white shadow"
      }`}
    >
      {/* Main navigation */}
      <div className="flex items-center justify-between px-6 py-3 relative">
        {/* Logo */}
        <Image
          src="/assets/logo.avif"
          className="hover:rotate-360 transition-transform ease-in-out duration-500 delay-300 cursor-pointer"
          alt="Golden Yellow"
          width={100}
          height={0}
          style={{ height: "auto" }}
          priority
        />

        {/* Desktop Nav */}
        <nav className="max-[769px]:hidden flex items-center gap-8 text-sm font-semibold text-gray-700">
          {headerData.map((item, index) => {
            const cleanPath = pathname.replace(/^\/(en|mm)/, "") || "/";
            const isActive = cleanPath === item.href;

            return (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() =>
                  setOpenDropdown(item.dropdown ? item.title : null)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <div className="flex items-center gap-1 cursor-pointer">
                    <Link
                      href={item.href}
                      className={`transition-all duration-200 ${
                        isActive ? "text-[#936521]" : "hover:text-[#D8AF53]"
                      }`}
                    >
                      {item.title}
                    </Link>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`transition-all duration-200 ${
                      isActive ? "text-[#936521]" : "hover:text-[#D8AF53]"
                    }`}
                  >
                    {item.title}
                  </Link>
                )}

                {/* Dropdown menu */}
                {item.dropdown && openDropdown === item.title && (
                  <div className="absolute top-full left-0 bg-white shadow-lg w-130 py-3 flex flex-col text-gray-600">
                    <div className="grid grid-cols-4 mx-auto gap-4 mt-10 justify-center">
                      {item.dropdown.map((sub, i) => (
                        <Link href={sub.href}>
                          <div
                            key={i}
                            className="bg-white flex flex-col justify-center items-center hover:shadow-md rounded-4xl p-1 gap-2 hover:-mt-1 hover:mb-1 transition-transform ease-in-out duration-500 delay-300 cursor-pointer"
                          >
                            <img
                              src={sub.image}
                              className="rounded-4xl"
                              alt="#"
                              height={100}
                              width={100}
                            />
                            <p>{sub.title}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <LanguageSwitcher />

          {/* User icon with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setUserMenuOpen(true)}
            onMouseLeave={() => setUserMenuOpen(false)}
          >
            <CircleUserRound className="w-6 h-6 text-gray-700 cursor-pointer hover:text-[#936521]" />

            {userMenuOpen && accountData.map((acc, index)=> (
              <div key={index} className="absolute right-0 top-4 mt-2 w-40 bg-white shadow-lg rounded-md py-2 text-sm text-gray-700">
                {/* ✅ Login Button */}
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full"
                  onClick={() => setOpenLogin(true)}
                >
                  {acc.name1}
                </button>

                {/* ✅ Register Button */}
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full"
                  onClick={() => setOpenRegister(true)}
                >
                  {acc.name2}
                </button>
              </div>
            ))}

            {/* ✅ Login Popup */}
            <Popup isOpen={openLogin} onClose={() => setOpenLogin(false)}>
              <Log />
            </Popup>

            {/* ✅ Register Popup */}
            <Popup isOpen={openRegister} onClose={() => setOpenRegister(false)}>
              <Register />
            </Popup>
          </div>
        </nav>

        {/* Mobile button */}
        <div className="min-[769px]:hidden flex items-center">
          <LanguageSwitcher />
          <button
            className=" text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 md:flex-col left-0 h-full w-64 bg-white z-[60] shadow-2xl border-r border-gray-200 transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-400">
          <Image
            src="/assets/logo.avif"
            alt="Golden Yellow"
            width={80}
            height={0}
            style={{ height: "auto" }}
            priority
          />
          <button onClick={() => setMobileMenuOpen(false)}>
            <X className="w-6 h-4 text-gray-700" />
          </button>
        </div>

        <nav className="flex flex-col p-4 text-gray-700 font-medium space-y-2">
          {headerData.map((item, index) => {
            const cleanPath = pathname.replace(/^\/(en|mm)/, "") || "/";
            const isActive = cleanPath === item.href;

            return (
              <div key={index}>
                {item.dropdown ? (
                  <>
                    <div className="flex justify-between items-center w-full">
                      <Link
                        href={item.href}
                        className={`block ${
                          isActive ? "text-[#936521] font-semibold" : ""
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.title ? null : item.title
                          )
                        }
                        className="p-1"
                      >
                        <ChevronDown
                          className={`w-4 h-6 transition-transform duration-300 ${
                            openDropdown === item.title
                              ? "rotate-180 text-[#936521]"
                              : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Dropdown items */}
                    <div
                      className={`ml-4 mt-2 flex flex-col text-sm space-y-1 overflow-y-auto overflow-hidden transition-all duration-300 ${
                        openDropdown === item.title
                          ? "max-h-80 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.dropdown.map((sub, i) => (
                        <Link
                          key={i}
                          href={sub.href}
                          className="block py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block ${
                      isActive ? "text-[#936521] font-semibold" : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Overlay behind sidebar */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
