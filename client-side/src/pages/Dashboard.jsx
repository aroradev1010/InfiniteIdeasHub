import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import Header from "../components/Header";
import DashUsers from "../components/DashUsers";
import DashboardComp from "../components/DashboardComp";
import { useSelector } from "react-redux";
import DashComments from "../components/DashComments";
const Dashboard = () => {
  const location = useLocation();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  console.log(isOpen);
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="">
          {/* Sidebar */}
          <div className={`${isOpen ? "hidden" : ""}`}>
            <DashSidebar />
          </div>
        </div>
        {/* profile... */}
        {tab === "profile" && <DashProfile />}
        {/* posts... */}
        {tab === "posts" && <DashPosts />}
        {/* users */}
        {tab === "users" && <DashUsers />}
        {/* comments */}
        {tab === "comments" && <DashComments />}
        {/* dashboard comp */}
        {tab === "dash" && <DashboardComp />}
      </div>
    </>
  );
};

export default Dashboard;
