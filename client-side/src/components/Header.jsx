import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { toggleTheme } from "../redux/theme/themSlice";
import { toggleSidebar } from "../redux/sidebar/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";
import "../css/header.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
const Header = () => {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const { theme } = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.user);

  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = res.json();
      if (!res.ok) {
        console.log(data.message);
      } else dispatch(signoutSuccess());
    } catch (error) {}
  };

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
              <Link className="link bg-[#2222] px-10 py-3 rounded-3xl" to="/sign-up">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
    // <Navbar className="dark:bg-[rgb(9,13,31)] pt-5">
    //   <Link
    //     to="/"
    //     className=" self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
    //   >
    //     <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
    //       Sahand's
    //     </span>
    //     Blog
    //   </Link>
    //   {/* <form onSubmit={handleSubmit}> */}
    //   {/* <TextInput
    //     type="text"
    //     placeholder="Search..."
    //     rightIcon={AiOutlineSearch}
    //     className="hidden lg:inline"
    //     value={searchTerm}
    //     onChange={(e) => setSearchTerm(e.target.value)}
    //   /> */}
    //   {/* </form> */}
    //   {/* <Button className="w-12 h-10 lg:hidden" color="gray" pill>
    //     <AiOutlineSearch />
    //   </Button> */}
    //   <div className="flex gap-5 md:order-2 items-center">
    //     {currentUser ? (
    //       <Dropdown
    //         arrowIcon={false}
    //         inline
    //         label={
    //           <Avatar alt="user" img={currentUser.profilePicture} rounded />
    //         }
    //       >
    //         <Dropdown.Header>
    //           <span className="block text-sm">@{currentUser.username}</span>
    //           <span className="block text-sm font-medium truncate">
    //             {currentUser.email}
    //           </span>
    //         </Dropdown.Header>
    //         <Link to={"/dashboard?tab=profile"}>
    //           <Dropdown.Item>Profile</Dropdown.Item>
    //         </Link>
    //         <Dropdown.Divider />
    //         <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
    //         <Dropdown.Divider />
    //         <div className="pl-4 py-3">
    //           <label class="switch">
    //             <input
    //               type="checkbox"
    //               onChange={() => dispatch(toggleTheme())}
    //             />
    //             <span class="slider"></span>
    //           </label>
    //         </div>
    //       </Dropdown>
    //     ) : (
    //       <Link to="/sign-in">
    //         <Button gradientDuoTone="purpleToBlue" outline>
    //           Sign In
    //         </Button>
    //       </Link>
    //     )}

    //     <Navbar.Toggle />
    //   </div>
    //   <Navbar.Collapse className="">
    //     <Navbar.Link as={"div"} className="text-[12px]">
    //       <Link className={path === "/" ? "activeLink " : ""} to="/">
    //         Blog
    //       </Link>
    //     </Navbar.Link>
    //     <Navbar.Link as={"div"} className="text-[12px]">
    //       <Link className={path === "/about" ? "activeLink" : ""} to="/about">
    //         About
    //       </Link>
    //     </Navbar.Link>
    //     <Navbar.Link className="text-[12px]" as={"div"}>
    //       <Link
    //         className={path === "/projects" ? "activeLink" : ""}
    //         to="/projects"
    //       >
    //         Projects
    //       </Link>
    //     </Navbar.Link>
    //   </Navbar.Collapse>
    // </Navbar>
  );
};

export default Header;
