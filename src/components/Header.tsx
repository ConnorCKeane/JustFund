import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleMouseEnter = (link: string) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const linkStyle = (isActive: boolean, link: string) => {
    const baseFontSize = 22;
    // Increase scale dramatically on hover/active while keeping text centered.
    const scaleFactor = hoveredLink === link || isActive ? 1.5 : 1;
    return {
      display: "inline",
      textAlign: "center",
      color: "white",
      fontSize: baseFontSize,
      fontFamily: "'SF Pro Display', sans-serif",
      fontWeight: isActive ? "bold" : "500",
      lineHeight: "30px",
      letterSpacing: 1.62,
      textDecoration: "none",
      margin: "0 20px",
      transition: "transform 0.3s ease",
      transform: `scale(${scaleFactor})`,
      transformOrigin: "center",
      cursor: "pointer",
    };
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        background: "#4d7a57",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        fontFamily: "'SF Pro Display', sans-serif",
      }}
    >
      {/* Left side logo */}
      <div style={{ display: "flex", alignItems: "center", width: "200px" }}>
        <img src="/JustFundLogo.png" alt="JustFund Logo" style={{ height: "100px" }} />
      </div>

      {/* Center navigation links */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "space-between",
          width: "700px",
          color: "white",
         
        }}
      >
        <NavLink
          to="/Events"
          style={({ isActive }) => linkStyle(isActive, "Events")}
          onMouseEnter={() => handleMouseEnter("Events")}
          onMouseLeave={handleMouseLeave}
        >
          Take Action
        </NavLink>

        <NavLink
          to="/Home"
          style={({ isActive }) => linkStyle(isActive, "Home")}
          onMouseEnter={() => handleMouseEnter("Home")}
          onMouseLeave={handleMouseLeave}
        >
          Home
        </NavLink>

        <NavLink
          to="/OurMission"
          style={({ isActive }) => linkStyle(isActive, "Our Mission")}
          onMouseEnter={() => handleMouseEnter("Our Mission")}
          onMouseLeave={handleMouseLeave}
        >
          Our Mission
        </NavLink>
      </div>
    </div>
  );
};

export default Header;