"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import LanguageSwitcher from "./LanguageSwitch";
import Image from "next/image";

const headerData = [
  { title: "HOME", href: "/" },
  {
    title: "Package",
    href: "#",
  },
  {
    title: "Experiences",
    href: "#",
    dropdown: [
      { title: "Bagan", href: "#" },
      { title: "Mandalay", href: "#" },
      { title: "Yangon", href: "#" },
      { title: "Taunggyi", href: "#" },
      { title: "Kalaw", href: "#" },
      { title: "Hpa-an", href: "#" },
      { title: "Inle Lake", href: "#" },
      { title: "Ngwesaung", href: "#" },
      { title: "Chaung Thar", href: "#" },
    ],
  },
  { title: "About Us", href: "#" },
  { title: "Contact Us", href: "#" },
  { title: "Vlogger", href: "#" }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          alt="STG Cement Distribution Logo"
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
                  <div className="absolute top-full left-0 bg-white shadow-lg w-56 py-3 flex flex-col text-gray-600">
                    {item.dropdown.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        className="px-4 py-2 hover:bg-gray-100 hover:text-[#D8AF53] transition-all duration-200"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <LanguageSwitcher />
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
            alt="STG Cement Distribution Logo"
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
                          isActive ? "text-blue-400 font-semibold" : ""
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
                        <Link key={i} href={sub.href} className="block py-1">
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
                      isActive ? "text-blue-400 font-semibold" : ""
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
