import { Button, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ItemCondition } from "../components/item-condition";
import { CBRContext } from "../index";
import { handlePostRequest } from "./axios-calls";
export default function Feedback() {
  let navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/download");
  };
  const { selectedItems, formValues, setFormByKey } =
    React.useContext(CBRContext);
  console.log(selectedItems);
  return (
    <div style={{ padding: "2vw" }}>
      <Grid container direction="column" justifyContent="space-around">
        {/* <ItemCondition title={"Item 1"} itemNumber={1} /> */}
        {Object.values(selectedItems).map((element) => (
          <ItemCondition title={element?.name} itemNumber={element?.id} />
        ))}
        <Button
          variant="contained"
          color="primary"
          onClick={async () => {
            const res = await handlePostRequest(formValues, selectedItems);
            console.log(res);
            if (res) {
              // narativeText
              setFormByKey("narativeText", res);
              handleButtonClick();
            }
          }}
        >
          Submit to generative AI model
        </Button>
      </Grid>
    </div>
  );
}
