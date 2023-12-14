import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundColor: "green",
    padding: "1px",
    color: "white",
    textAlign: "center",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
  };

  return (
    <header style={headerStyle}>
      <h1>CBRE</h1>
    </header>
  );
};

export default Header;
