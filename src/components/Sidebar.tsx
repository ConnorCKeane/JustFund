import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleMouseEnter = (link: string) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const linkStyle = (link: string): React.CSSProperties => ({
    display: "block",
    color: "#4d7a57",
    fontSize: "20px",
    fontFamily: "'SF Pro Display', sans-serif",
    fontWeight: "500",
    textDecoration: "none",
    margin: "15px 0",
    padding: "10px 15px",
    borderRadius: "4px",
    backgroundColor: "#fcf7ed",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    textAlign: "center" as const,
    whiteSpace: "nowrap",
    transform: hoveredLink === link ? "scale(1.05)" : "scale(1)",
  });

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "200px",
        height: "100vh",
        backgroundColor: "#4d7a57",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20px",
        zIndex: 1000,
      }}
    >
      {/* Logo Section */}
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <img
          src="/JustFundLogo.png"
          alt="JustFund Logo"
          style={{
            width: "150px",
            height: "auto",
            transition: "width 0.3s ease",
          }}
        />
      </div>

      {/* Navigation Links centered within the sidebar */}
      <nav
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <NavLink
          to="/Home"
          style={() => linkStyle("Home")}
          onMouseEnter={() => handleMouseEnter("Home")}
          onMouseLeave={handleMouseLeave}
        >
          Home
        </NavLink>
        <NavLink
          to="/events"
          style={() => linkStyle("Events")}
          onMouseEnter={() => handleMouseEnter("Events")}
          onMouseLeave={handleMouseLeave}
        >
          Causes
        </NavLink>
        <NavLink
          to="/OurMission"
          style={() => linkStyle("OurMission")}
          onMouseEnter={() => handleMouseEnter("OurMission")}
          onMouseLeave={handleMouseLeave}
        >
          About
        </NavLink>
      </nav>

      {/* Footer Section */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          fontSize: "12px",
          color: "white",
          textAlign: "center",
          width: "100%",
          padding: "10px",
        }}
      >
        © 2025 Gemhallics. All rights reserved.
      </div>
    </div>
  );
};

export default Sidebar;