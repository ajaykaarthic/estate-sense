import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { CBRContext } from "../index";
import { FormHumanSelect } from "./form-human-select";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function DataCollection() {
  let navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/feedback");
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const {
    setFormByKey,
    getFormValueByKey,
    formValues,
    updateRenovationDetails,
    getRenovationDetails,
  } = React.useContext(CBRContext);
  console.log(formValues);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleTypeChange = (event) => {
    setFormByKey("typeofProperty", event.target.value);
  };
  const categories = ["Residential", "Commercial", "Industrial"];
  const yesNo = ["Yes", "No"];
  return (
    <React.Fragment>
      <Paper elevation={3} sx={{ marginRight: "2%", marginLeft: "2%" }}>
        <Box sx={{ padding: 5 }}>
          <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
            We are listening, Tell us more !
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} xl={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Property Type
              </InputLabel>
            </Grid>
            <Grid item xs={12} xl={10}>
              <FormControl fullWidth size="small">
                <InputLabel id="type">Type</InputLabel>
                <Select
                  labelId="type"
                  id="type"
                  value={getFormValueByKey("typeofProperty")}
                  label="Age"
                  onChange={handleTypeChange}
                >
                  {categories.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} xl={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Owner name
              </InputLabel>
            </Grid>
            <Grid item xs={12} xl={10}>
              <TextField
                id="ownerName"
                label="Owner name"
                required
                fullWidth
                onChange={(e) => {
                  setFormByKey("ownerName", e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} xl={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Owner Phonenumber
              </InputLabel>
            </Grid>
            <Grid item xs={12} xl={10}>
              <TextField
                id="ownerPhonenumber"
                label="PhNo:"
                required
                fullWidth
                onChange={(e) => {
                  setFormByKey("ownerPhonenumber", e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} xl={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Year constructed
              </InputLabel>
            </Grid>
            <Grid item xs={12} xl={10}>
              <TextField
                id="year"
                label="Year"
                fullWidth
                onChange={(e) => {
                  setFormByKey("yearConstructed", e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} xl={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Size of Property in square foot
              </InputLabel>
            </Grid>
            <Grid item xs={12} xl={10}>
              <TextField
                id="sizeInsqft"
                label="sqft"
                fullWidth
                required
                onChange={(e) => {
                  setFormByKey("sizeOfProperty", e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} xl={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Property Identification Number
              </InputLabel>
            </Grid>
            <Grid item xs={12} xl={10}>
              <TextField
                id="pin"
                label="PIN"
                fullWidth
                required
                onChange={(e) => {
                  setFormByKey("pin", e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} xl={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Address
              </InputLabel>
            </Grid>
            <Grid item xs={12} xl={10}>
              <TextField
                id="address"
                label="Address"
                fullWidth
                multiline
                rows={4}
                required
                onChange={(e) => {
                  setFormByKey("address", e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} xl={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Size of carpet in square foot
              </InputLabel>
            </Grid>
            <Grid item xs={12} xl={10}>
              <TextField
                id="sizeOfCarpet"
                label="sqft"
                fullWidth
                required
                onChange={(e) => {
                  setFormByKey("sizeOfCarpet", e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} xl={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Number of rooms
              </InputLabel>
            </Grid>
            <Grid item xs={12} xl={10}>
              <TextField
                id="rooms"
                label="No. of rooms"
                fullWidth
                required
                value={getFormValueByKey("numberOfRooms")}
                onChange={(e) => {
                  if (e.target.value.length !== 0) {
                    const ele = parseInt(e.target.value);
                    console.log(typeof ele);
                    if (typeof ele != "string") {
                      setFormByKey("numberOfRooms", parseInt(e.target.value));
                    } else {
                      handleClick();
                    }
                  } else {
                    setFormByKey("numberOfRooms", 0);
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} xl={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Has garage?
              </InputLabel>
            </Grid>
            <Grid item xs={12} xl={10}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Garage?</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={getFormValueByKey("hasGarage")}
                  label="Has garage"
                  onChange={(e) => setFormByKey("hasGarage", e.target.value)}
                >
                  {yesNo.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} xl={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Is SmartHome?
              </InputLabel>
            </Grid>
            <Grid item xs={12} xl={10}>
              <FormControl fullWidth size="small">
                <InputLabel id="isSmartHome">SmartHome?</InputLabel>
                <Select
                  labelId="isSmartHome"
                  id="isSmartHome"
                  value={getFormValueByKey("isSmartHome")}
                  label="isSmartHome"
                  onChange={(e) => setFormByKey("isSmartHome", e.target.value)}
                >
                  {yesNo.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} xl={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Has ParkingFacility?
              </InputLabel>
            </Grid>
            <Grid item xs={12} xl={10}>
              <FormControl fullWidth size="small">
                <InputLabel id="hasParkingFacility">
                  ParkingFacility?
                </InputLabel>
                <Select
                  labelId="hasParkingFacility"
                  id="hasParkingFacility"
                  value={getFormValueByKey("hasParkingFacility")}
                  label="hasParkingFacility"
                  onChange={(e) =>
                    setFormByKey("hasParkingFacility", e.target.value)
                  }
                >
                  {yesNo.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} xl={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Has SecuritySystems?
              </InputLabel>
            </Grid>
            <Grid item xs={12} xl={10}>
              <FormControl fullWidth size="small">
                <InputLabel id="hasSecuritySystems">
                  SecuritySystems?
                </InputLabel>
                <Select
                  labelId="hasSecuritySystems"
                  id="hasSecuritySystems"
                  value={getFormValueByKey("hasSecuritySystems")}
                  label="hasSecuritySystems"
                  onChange={(e) =>
                    setFormByKey("hasSecuritySystems", e.target.value)
                  }
                >
                  {yesNo.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} xl={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                is Renovated?
              </InputLabel>
            </Grid>
            <Grid item xs={12} xl={10}>
              <FormControl fullWidth size="small">
                <InputLabel id="isRenovated">Renovated?</InputLabel>
                <Select
                  labelId="isRenovated"
                  id="isRenovated"
                  value={getFormValueByKey("isRenovated")}
                  label="isRenovated"
                  onChange={(e) => setFormByKey("isRenovated", e.target.value)}
                >
                  {yesNo.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {getFormValueByKey("isRenovated") &&
            getFormValueByKey("isRenovated") !== "No" ? (
              <>
                <Grid item xs={12} xl={2}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    Is Toilet Renovated?
                  </InputLabel>
                </Grid>
                <Grid item xs={12} xl={10}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="isToiletRenovated">
                      is renovated?
                    </InputLabel>
                    <Select
                      labelId="isToiletRenovated"
                      id="isToiletRenovated"
                      value={getRenovationDetails("isToiletRenovated")}
                      label="isToiletRenovated"
                      onChange={(e) =>
                        updateRenovationDetails(
                          "isToiletRenovated",
                          e.target.value
                        )
                      }
                    >
                      {yesNo.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} xl={2}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    Is ceiling Renovated?
                  </InputLabel>
                </Grid>
                <Grid item xs={12} xl={10}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="isCeilingRenovated">
                      is ceiling renovated?
                    </InputLabel>
                    <Select
                      labelId="isCeilingRenovated"
                      id="isCeilingRenovated"
                      value={getRenovationDetails("isCeilingRenovated")}
                      label="isCeilingRenovated"
                      onChange={(e) =>
                        updateRenovationDetails(
                          "isCeilingRenovated",
                          e.target.value
                        )
                      }
                    >
                      {yesNo.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} xl={2}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    Is flooring Renovated?
                  </InputLabel>
                </Grid>
                <Grid item xs={12} xl={10}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="isFlooringRenovated">
                      is flooring renovated?
                    </InputLabel>
                    <Select
                      labelId="isFlooringRenovated"
                      id="isFlooringRenovated"
                      value={getRenovationDetails("isFlooringRenovated")}
                      label="isFlooringRenovated"
                      onChange={(e) =>
                        updateRenovationDetails(
                          "isFlooringRenovated",
                          e.target.value
                        )
                      }
                    >
                      {yesNo.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} xl={2}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    Is kitchen Renovated?
                  </InputLabel>
                </Grid>
                <Grid item xs={12} xl={10}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="isKitchenRenovated">
                      is kitchen renovated?
                    </InputLabel>
                    <Select
                      labelId="isKitchenRenovated"
                      id="isKitchenRenovated"
                      value={getRenovationDetails("isKitchenRenovated")}
                      label="isKitchenRenovated"
                      onChange={(e) =>
                        updateRenovationDetails(
                          "isKitchenRenovated",
                          e.target.value
                        )
                      }
                    >
                      {yesNo.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </>
            ) : (
              <></>
            )}

            <FormHumanSelect />
            <Grid item xs={12} sm={6} />
            <Grid item xs={12} sm={5} />
            <Grid item xs={12} sm={4}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleButtonClick}
              >
                Start assesment
              </Button>
            </Grid>
            <Grid item xs={12} sm={5} />
          </Grid>
        </Box>
      </Paper>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Please enter a number!!
        </Alert>
      </Snackbar>
      ;
    </React.Fragment>
  );
}
