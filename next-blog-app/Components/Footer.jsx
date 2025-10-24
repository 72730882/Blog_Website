import React from 'react'
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between w-[90%] mx-auto max-w-6xl">
        
        {/* Left side text */}
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Faiza Mohammed. All rights reserved.
        </p>

        {/* Social icons */}
        <div className="flex justify-center gap-5 text-xl">
          <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white hover:text-blue-500 transition-colors duration-200" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-sky-400 transition-colors duration-200" />
          </a>
          <a href="https://github.com/72730882" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-gray-400 transition-colors duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/faiza-mohammed-2287a727b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-blue-600 transition-colors duration-200" />
          </a>
          <a href="https://t.me/Neverlosehope72" target="_blank" rel="noopener noreferrer">
            <FaTelegram className="text-white hover:text-sky-500 transition-colors duration-200" />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-pink-500 transition-colors duration-200" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
