import React from "react";
import { FooterLink1 } from "../../data/footer-links1";
import { FooterLink2 } from "../../data/footer-links2";
import { Link } from "react-router-dom";
import { IoIosArrowRoundUp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-emerald-600 text-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start">
        {/* Left Column */}
        <div className="mb-12 lg:mb-0 lg:w-1/3 text-center lg:text-left">
          <div className="text-xl font-medium mb-8">
            <p>8th Floor, Department of</p>
            <p>Computer Science,</p>
            <p>Delhi Technological University,</p>
            <p>Delhi, India</p>
          </div>
          <div className="text-sm">
            <p>(434) 546-4356</p>
            <div className="w-24 h-0.5 bg-white my-3 mx-auto lg:ml-0"></div>
            <p>contact@lift.agency</p>
          </div>
        </div>

        {/* Middle Columns */}
        <div className="flex justify-center lg:justify-between lg:w-1/3 mb-12 lg:mb-0">
          <div className="mr-8 lg:mr-16">
            {FooterLink1.map((link, index) => (
              <Link key={index} to={link.link} className="block mb-3">
                {link.title}
              </Link>
            ))}
          </div>
          <div>
            {FooterLink2.map((link, index) => (
              <Link key={index} to={link.link} className="block mb-3">
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <div className="w-20 h-20 bg-emerald-400 rounded-full flex items-center justify-center">
            <IoIosArrowRoundUp className="text-white" size="40" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 text-center text-sm">
        © 2020 Sponsogram Media. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;