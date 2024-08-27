import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./hotelbillainfo.css";
import Checkbox from '@mui/material/Checkbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import travellers from "../../../images/img/travellers.jpg";
import travellers2 from "../../../images/img/travellers2.jpg";
import travellers3 from "../../../images/img/travellers3.jpg";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const HotelBillaInfo = () => {
  return (
    <div>

      <Grid className="boxshaow" container p={1} mt={1}>
        <Grid item sm={12} lg={4} xs={12}>
          <Grid container>
            <Grid item sm={12} lg={7} xs={12}>
              <Box>
                <img
                  src={travellers}
                  style={{ borderRadius: "10px", height: "95px", width: "100%", padding: "3px" }}
                />
              </Box>
            </Grid>
            <Grid item sm={12} lg={5} xs={12}>
              <Box>
                <img
                  src={travellers}
                  style={{ borderRadius: "10px", width: "100%", height: "95px", padding: "3px" }}
                />
              </Box>
            </Grid>
            <Grid container >
              <Grid item lg={4}>
                <Box>
                  <img
                    src={travellers}
                    style={{ borderRadius: "10px", width: "100%", padding: "3px" }}
                  />
                </Box>
              </Grid>
              <Grid item lg={4}>
                <Box>
                  <img
                    src={travellers}
                    style={{ borderRadius: "10px", width: "100%", padding: "3px" }}
                  />
                </Box>
              </Grid>
              <Grid item lg={4}>
                <Box>
                  <img
                    src={travellers}
                    style={{ borderRadius: "10px", width: "100%", padding: "3px" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={12} lg={5} xs={12}>
          <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "-13px" }}>
            <Typography className="title">Hotel Aroma Executive</Typography>

            <Box>
              <Checkbox value="rating1" style={{ width: "0px" }}
                {...label}
                icon={<StarBorderIcon />}
                checkedIcon={<StarIcon style={{ color: "yellow" }} />}
              />
              <Checkbox value="rating2" style={{ width: "0px" }}
                {...label}
                icon={<StarBorderIcon />}
                checkedIcon={<StarIcon style={{ color: "yellow" }} />}
              />
              <Checkbox value="rating3" style={{ width: "0px" }}
                {...label}
                icon={<StarBorderIcon />}
                checkedIcon={<StarIcon style={{ color: "yellow" }} />}
              />
              <Checkbox value="rating4" style={{ width: "0px" }}
                {...label}
                icon={<StarBorderIcon />}
                checkedIcon={<StarIcon style={{ color: "yellow" }} />}
              />
              <Checkbox style={{ width: "0px" }}
                {...label}
                icon={<StarBorderIcon />}
                checkedIcon={<StarIcon value="rating5" style={{ color: "yellow" }} />}
              />
            </Box>
          </Box>
          <Box>
            <Box ml={1} style={{ display: "flex", alignItems: "center" }}>
              <Typography style={{ color: "#006FFF", fontSize: "14px" }}>Panjim </Typography>
              <Box>
                <Typography className="borderleft" style={{ color: "#666666", fontSize: "14px" }}>300m from Deltin Royale </Typography>
              </Box>
            </Box>
          </Box>
          <Box ml={1}>
            <Button className="button-btn">Couple Friendly </Button>
          </Box>
          <Box ml={1} mt={3} style={{ display: "flex", alignItems: "center" }}>
            <Button className="rating_icon">4.5/5 </Button>
            <Box>
              <Typography style={{ color: "#006FFF", fontSize: "14px" }}>Excellent (982 Verified Ratings)</Typography>
            </Box>
          </Box>

        </Grid>
        <Grid item sm={12} lg={3} xs={12}>
          <form action="/HotelSearchResult">
            <Box mt={3}>
              <Typography className="price1">$3422</Typography>
              <Typography className="price2"> $2334 </Typography>
              <Typography className="price3">+ $322 taxes & fees Per Night</Typography>
              <Button variant="contained" textAlign='right' type='submit'>Continue</Button>
            </Box>
          </form>
        </Grid>

      </Grid>

    </div>
  );
};

export default HotelBillaInfo;
