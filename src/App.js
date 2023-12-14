import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
function App() {
  let navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/data-collection");
  };
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40vh",
        transform: "translateY(-50%)",
      }}
    >
      <h1>Are you ready to inspect your building ?</h1>
      <Button variant="contained" onClick={handleButtonClick}>
        Get started
      </Button>
    </div>
  );
}

export default App;
