"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("Home")

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Learning", href: "#education" },
  ]

  const scrollToSection = (href: string, name: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setActiveTab(name)
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md shadow-sm transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4 relative">
          {/* Logo */}
          <motion.div 
            className="flex items-center left-0 top-0 md:static absolute z-20"
            style={{ position: "absolute", left: 0, top: 0 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image 
              src="/X-white.svg" 
              alt="Logo" 
              width={40}
              height={40}
              className="w-20 h-20 md:w-20 md:h-20 object-contain"
              // Responsive sizing for mobile/tablet/desktop
              priority
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center bg-black border border-gray-800 shadow-xl rounded-full px-1 sm:px-2 py-1 mx-auto">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className={`relative px-3 lg:px-4 py-2 mx-0.5 sm:mx-1 transition-colors duration-200 cursor-pointer text-sm lg:text-base ${
                  activeTab === item.name ? "bg-white rounded-full text-black" : "font-light text-white"
                }`}
                onClick={() => scrollToSection(item.href, item.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium">{item.name}</span>
              </motion.div>
            ))}
          </nav>

          {/* Contact Button - Right Side */}
          <motion.button 
            className="hidden md:block bg-white hover:bg-orange-600 text-black px-3 lg:px-4 py-2 rounded-full transition-colors duration-200 text-sm lg:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#contact", "")}
          >
            Contact
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 z-30 ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden py-4 border-t border-gray-200 bg-black rounded-lg shadow-lg absolute left-0 right-0 top-full z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <div 
                key={item.name}
                className={`mx-2 my-1 py-3 px-4 rounded-lg text-center cursor-pointer transition-colors ${
                  activeTab === item.name ? "bg-white text-black" : "bg-black text-white hover:bg-orange-500 hover:text-white"
                }`}
                onClick={() => scrollToSection(item.href, item.name)}
              >
                {item.name}
              </div>
            ))}
            <div 
              className="mx-2 my-1 py-3 px-4 bg-orange-600 text-white rounded-lg text-center cursor-pointer hover:bg-orange-600 transition-colors"
              onClick={() => scrollToSection("#contact", "")}
            >
              Contact
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
