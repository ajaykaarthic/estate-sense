import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import { Grid, IconButton, List, ListItem } from "@mui/material";

import RadioGroupRating from "../components/radio-group-rating";
export const ItemCondition = (props) => {
  const { title = "Item title", itemNumber } = props;

  // console.log(itemNumber);
  return (
    <Grid item>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <Grid container>
            <Grid item xs={8}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {title}
              </div>

              <RadioGroupRating itemNumber={itemNumber} />
            </Grid>
            <div>
              <Grid item xs={2}>
                <IconButton aria-label="delete">
                  <CameraAltIcon />
                </IconButton>
              </Grid>
              <Grid item xs={2}>
                <IconButton aria-label="delete">
                  <SpeakerNotesIcon />
                </IconButton>
              </Grid>
            </div>
          </Grid>
        </ListItem>
      </List>
    </Grid>
  );
};
