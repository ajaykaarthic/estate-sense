import { Button } from "@mui/material";
import React from "react";
import { CBRContext } from "../index";
import { generatePDF } from "./pdf";

export const DownloadReport = () => {
  const { selectedItems, formValues, setFormByKey } =
    React.useContext(CBRContext);
  console.log(formValues);
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40vh",
        transform: "translateY(-50%)",
      }}
    >
      <h1>Thank you, download your final report.</h1>
      <Button
        variant="contained"
        onClick={() => {
          generatePDF(formValues, selectedItems);
        }}
      >
        Download report
      </Button>
    </div>
  );
};
