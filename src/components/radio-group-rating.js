import BuildIcon from "@mui/icons-material/Build";
import ReplayIcon from "@mui/icons-material/Replay";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { Box, Grid } from "@mui/material";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import * as React from "react";
import { CBRContext } from "..";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

export const customIcons = {
  1: {
    icon: <ReplayIcon color="error" />,
    label: "Replace",
  },
  2: {
    icon: <BuildIcon color="error" />,
    label: "Repair",
  },
  3: {
    icon: <SentimentVeryDissatisfiedIcon color="warning" />,
    label: "Dirty",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="warning" />,
    label: "Fair",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Good",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};
function getColour() {
  return "#666";
}
export default function RadioGroupRating(props) {
  const { itemNumber } = props;
  const { valueMap, updateValue, getValueByKey } = React.useContext(CBRContext);
  return (
    <Grid>
      <StyledRating
        name="highlight-selected-only"
        IconContainerComponent={IconContainer}
        getLabelText={(value) => {
          return customIcons[value].label;
        }}
        onChange={(e) => {
          const curVal = e?.target?.value;
          if (curVal !== getValueByKey(itemNumber)) {
            updateValue(itemNumber, curVal);
          } else {
            updateValue(itemNumber, -1);
          }
        }}
        highlightSelectedOnly
      />
      {getValueByKey(itemNumber) !== -1 && (
        <Box style={{ fontSize: "14px", fontWeight: "bold" }}>
          Condition:{" "}
          <span style={{ color: `${getColour()}` }}>
            {customIcons[getValueByKey(itemNumber)]?.label}
          </span>
        </Box>
      )}
    </Grid>
  );
}
