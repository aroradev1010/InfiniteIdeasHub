import React from "react";
import { Link, useLocation } from "react-router-dom";

import { toggleTheme } from "../redux/theme/themSlice";
import { toggleSidebar } from "../redux/sidebar/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import "../css/header.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const { theme } = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.user);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar()); // Use dispatch here
  };
  return (
    <div className="top">
      {path.includes("/dashboard") && (
        // Show the menu button only on the profile page
        <button
          className="ml-5  text-black text-[15px]"
          onClick={handleToggleSidebar}
          aria-label="Toggle Sidebar"
        >
          ☰
        </button>
      )}
      <div
        className={`topLeft gap-3 ${
          path.includes("/dashboard") ? "opacity-0 -mr-10" : ""
        }`}
      >
        <FaFacebook />
        <FaInstagram />
        <FaLinkedin />
      </div>
      <div className="topCenter">
        <ul className="topList ">
          <li
            className={`topListItem hover: ${
              path == "/" ? "opacity-[.5] " : ""
            }`}
          >
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <Link to={"/about"}>
            <li
              className={`topListItem hover: ${
                path == "/about" ? "opacity-[.5] " : ""
              }`}
            >
              ABOUT
            </li>
          </Link>
        </ul>
      </div>
      <div className="topRight">
        {currentUser ? (
          <Link className="link" to="/dashboard?tab=profile">
            <img className="topImg" src={currentUser.profilePicture} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link
                className="link bg-[#2222] px-10 py-3 rounded-3xl"
                to="/sign-up"
              >
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
