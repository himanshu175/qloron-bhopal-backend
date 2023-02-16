import React from "react";
import "./sideNavbar.css";

const SideBar = () => {
  const titleName = "qloron";
  const headerTitle = titleName
    .split(" ")
    .map((title) => title.charAt(0).toUpperCase() + title.slice(1))
    .join(", ");
  return (
    <header className="header">
      <div className="header-title">
        <h1>{headerTitle}</h1>
      </div>
    </header>
  );
};

export default SideBar;
