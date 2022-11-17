import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import DownArrow from "../../assets/images/DownArrow.svg";
import MenuOpenIcon from "../../assets/images/MenuOpen.svg";
import MenuClose from "../../assets/images/MenuClose.svg";
type Props = {};

const Header = (props: Props) => {
  const [dropMenu, setDropMenu] = useState(false);
  const [MenuOpen, setMenuOpen] = useState(true);

  return (
    <nav className="flex justify-between items-center px-5 md:px-[36px] lg:px-[72px] py-2 relative">
      <Link to="">
        <img src={Logo} alt="Logo" />
      </Link>

      <button
        onClick={() => {
          setMenuOpen(!MenuOpen);
        }}
        className="lg:hidden"
      >
        {MenuOpen ? (
          <img src={MenuOpenIcon} alt="MenuOpenIcon" />
        ) : (
          <img src={MenuClose} alt="MenuClose" />
        )}
      </button>

      <ul
        className={`lg:flex  ${
          MenuOpen && "hidden"
        } items-center absolute top-12 lg:top-0 right-5 lg:relative bg-white`}
      >
        <li className="lg:px-6 pt-4 lg:pt-0">
          <Link to="" className="text-[14px] font-medium">
            Home
          </Link>
        </li>
        <li className="lg:px-6 pt-4 lg:pt-0">
          <Link to="/about" className="text-[14px] font-medium">
            About Us
          </Link>
        </li>
        <ul className="lg:px-6 pt-4 lg:pt-0 ">
          <li
            className="flex items-center cursor-pointer text-[14px] font-medium relative"
            onClick={() => {
              setDropMenu(!dropMenu);
            }}
          >
            Solutions
            <img src={DownArrow} alt="DownArrow" className="pl-2" />
          </li>
          {dropMenu && (
            <ul className="relative lg:absolute lg:border border-[#0000001a] w-full lg:w-[171px]  pl-3 rounded-sm shadow-sm">
              <li className="py-2">
                <Link
                  to="/solutions/cloud-solutions"
                  className="text-xs font-medium "
                >
                  Cloud Solutions
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/solutions/workplace-modernization"
                  className="text-xs font-medium "
                >
                  Workplace Modernization
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/solutions/managed-services"
                  className="text-xs font-medium "
                >
                  24x7 Managed Services
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/solutions/app-and-data"
                  className="text-xs font-medium "
                >
                  App & Data
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/solutions/cloud-security"
                  className="text-xs font-medium "
                >
                  Cloud Security
                </Link>
              </li>
            </ul>
          )}
        </ul>
        <li className="lg:px-6 pt-4 lg:pt-0">
          <Link to="/cloud-partners" className="text-[14px] font-medium">
            Cloud Partners
          </Link>
        </li>
        <li className="lg:px-6 pt-4 lg:pt-0">
          <Link to="/careers" className="text-[14px] font-medium">
            Careers
          </Link>
        </li>
        <li className="px-6 py-2 bg-[#C862C1] rounded-[4px] mt-4 lg:mt-0">
          <Link
            to="/contact-us"
            className="text-[16px] font-semibold text-white"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
