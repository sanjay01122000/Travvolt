import React, { useState } from "react";
import "./busservices.css";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import {
  Typography,
  Box,
  Button,
  Grid,
  Stack,
  Checkbox,
} from "@mui/material";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import ChairIcon from "@mui/icons-material/Chair";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BusInteriorSlider from "./BusInteriorSlider";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const BusServices = () => {


  const [isShown, setIsShown] = useState(false);
  const [isShownTwo, setIsShownTwo] = useState(false);
  const [isShownThree, setIsShownThree] = useState(false);
  const [isShownFour, setIsShownFour] = useState(false);
  const [isShownFive, setIsShownFive] = useState(false);
  const [isShownSix, setIsShownSix] = useState(false);
  // tabs
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // end


  return (
    <div className="side_container">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Box>
              <Box className="bus_name">
                <Typography className="bus_name">Gola Bus Service</Typography>
                <Typography className="rating_bus">4.9/5</Typography>
                <Typography className="number_of_rate">126 Ratings</Typography>
              </Box>
              <Box className="bus_name">
                <Typography className="number_of_rate">
                  A/C Seater / Sleeper (2+1)
                </Typography>
                <Box className="bus_name" px={2}>
                  <AirlineSeatReclineNormalIcon />
                  <Typography className="number_of_rate">
                    31 Seats Left
                  </Typography>
                </Box>
                <Typography className="number_of_rate" px={2}>
                  11 Window Seats
                </Typography>
              </Box>
              <Box className="bus_name">
                <Typography className="timing_date">23:30, 19 FEB</Typography>
                <Box className="vertical_line"></Box>
                <Typography className="Bus_duration">07hrs 15mins</Typography>
                <Box className="vertical_line"></Box>
                <Typography className="timing_date">06:45, 20 FEB</Typography>
              </Box>
            </Box>
            <Box></Box>
          </div>
          <div className="col-md-4">
            <Box className="pricing_container">
              <GpsFixedIcon className="gps_icon" />
              <Typography className="live_tracking">Live Tracking</Typography>
            </Box>
            <Box mt={1}>
              <Typography className="starting_from">Starting From</Typography>
              <Box className="rate_container">
                <Typography className="starting_from">$415 </Typography>
                <Typography className="starting_price">$345</Typography>
              </Box>
              <Typography className="save_price">Save $70</Typography>
            </Box>
            <Box textAlign="right">
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                  }}
                  mb={1}
                >
                  <Button
                    variant="contained"
                    type="submit"
                    data-toggle="collapse"
                    data-target="#multiCollapseExample2"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample2"
                  >
                    <Typography sx={{ cursor: "pointer" }}>
                      Book Seat
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </div>
        </div>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 1px 6px #00000029",
                }}
              >
                <Tab
                  label="Policies"
                  value="1"
                  sx={{
                    font: " normal normal bold 12px/15px Quicksand",
                    color: "#666666",
                  }}
                />
                <Tab
                  label="Photos"
                  value="2"
                  sx={{
                    font: " normal normal bold 12px/15px Quicksand",
                    color: "#666666",
                  }}
                />
                <Tab
                  label="Amenities"
                  value="3"
                  sx={{
                    font: " normal normal bold 12px/15px Quicksand",
                    color: "#666666",
                  }}
                />
                <Tab
                  label="Pick & Drop"
                  value="4"
                  sx={{
                    font: " normal normal bold 12px/15px Quicksand",
                    color: "#666666",
                  }}
                />
                <Tab
                  label="Reviews"
                  value="5"
                  sx={{
                    font: " normal normal bold 12px/15px Quicksand",
                    color: "#666666",
                  }}
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Box>
                <Stack direction="row" spacing="2">
                  <Button
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                  >
                    <Typography className="tab_hover_txt">
                      Cancellation
                    </Typography>
                  </Button>
                  <Button
                    onMouseEnter={() => setIsShownTwo(true)}
                    onMouseLeave={() => setIsShownTwo(false)}
                  >
                    <Typography className="tab_hover_txt">
                      Child Passenger
                    </Typography>
                  </Button>
                  <Button
                    onMouseEnter={() => setIsShownThree(true)}
                    onMouseLeave={() => setIsShownThree(false)}
                  >
                    <Typography className="tab_hover_txt">Languege</Typography>
                  </Button>
                  <Button
                    onMouseEnter={() => setIsShownFour(true)}
                    onMouseLeave={() => setIsShownFour(false)}
                  >
                    <Typography className="tab_hover_txt"> Pets </Typography>
                  </Button>
                  <Button
                    onMouseEnter={() => setIsShownFive(true)}
                    onMouseLeave={() => setIsShownFive(false)}
                  >
                    <Typography className="tab_hover_txt"> Liquor</Typography>
                  </Button>
                  <Button
                    onMouseEnter={() => setIsShownSix(true)}
                    onMouseLeave={() => setIsShownSix(false)}
                  >
                    <Typography className="tab_hover_txt">
                      PickUp Time
                    </Typography>
                  </Button>
                </Stack>
                {isShown && (
                  <Grid container spacing={3}>
                    <Grid item sm={12} lg={4}>
                      <Box my={2}>
                        <Typography className="cancle_time">
                          Cancellation Time
                        </Typography>
                        <Typography className="before_departure">
                          (before departure)
                        </Typography>
                      </Box>
                      <Box>
                        <Typography className="cancle_para">
                          more than 168 hrs before travel
                        </Typography>
                        <Typography className="cancle_para">
                          48 to 168 hr(s) before travel
                        </Typography>
                        <Typography className="cancle_para">
                          24 to 48 hr(s) before travel
                        </Typography>
                        <Typography className="cancle_para">
                          12 to 24 hr(s) before travel
                        </Typography>
                        <Typography className="cancle_para">
                          6 to 12 hr(s) before travel
                        </Typography>
                        <Typography className="cancle_para">
                          3 to 6 hr(s) before travel
                        </Typography>
                        <Typography className="cancle_para">
                          0 to 3 hr(s) before travel
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item sm={12} lg={2}>
                      <Box my={2}>
                        <Typography className="cancle_time" textAlign="left">
                          Penalty %
                        </Typography>
                      </Box>
                      <Box marginTop={4}>
                        <Typography className="per_cent">10 %</Typography>
                        <Typography className="per_cent">10 %</Typography>
                        <Typography className="per_cent">18 %</Typography>
                        <Typography className="per_cent">40 %</Typography>
                        <Typography className="per_cent">60 %</Typography>
                        <Typography className="per_cent">100 %</Typography>
                        <Typography className="per_cent">100 %</Typography>
                      </Box>
                    </Grid>
                    <Grid item sm={12} lg={6}>
                      <Box my={2}>
                        <Typography className="cancle_time">
                          Information :
                        </Typography>
                      </Box>
                      <Box mt={4}>
                        <Typography className="info_li">
                          * The penalty is calculated based on total seat worth
                          1999
                        </Typography>
                        <Typography className="info_li">
                          * Penalty is calculated basis the bus service
                          scheduled start time at: 23-02-2023 20:00 (subject to
                          change).
                        </Typography>
                        <Typography className="info_li">
                          * Partial cancellation is not allowed for this ticket.
                        </Typography>
                        <Typography className="info_li">
                          * Please note : the ticket cannot be cancelled after
                          the bus departs from the first boarding point.
                        </Typography>
                        <Typography className="info_li">
                          * Above defined cancellation charges are illustrated
                          basis maximum fare applicable. Exact cancellation
                          charges will depend on the final price charged along
                          with discount and other adjustments.
                        </Typography>
                        <Typography className="info_li">
                          * Cancellation amount shown above may also vary basis
                          the non-refundable components of the ticket defined by
                          the bus operator
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                )}
                {isShownTwo && (
                  <Box mt={2}>
                    <ul>
                      <li>Children above the age of 6 will need a ticket</li>
                    </ul>
                  </Box>
                )}
                {isShownThree && (
                  <Box mt={2}>
                    <ul>
                      <li>
                        2 pieces of luggage will be accepted free of charge per
                        passenger. Excess items will be chargeable
                      </li>
                      <li>
                        Excess baggage over 10 kgs per passenger will be
                        chargeable
                      </li>
                    </ul>
                  </Box>
                )}
                {isShownFour && (
                  <Box mt={2}>
                    <ul>
                      <li>Pets are not allowed</li>
                    </ul>
                  </Box>
                )}
                {isShownFive && (
                  <Box mt={2}>
                    <ul>
                      <li>
                        Carrying or consuming liquor inside the bus is
                        prohibited. Bus operator reserves the right to deboard
                        drunk passengers.
                      </li>
                    </ul>
                  </Box>
                )}
                {isShownSix && (
                  <Box mt={2}>
                    <ul>
                      <li>
                        Bus operator is not obligated to wait beyond the
                        scheduled departure time of the bus. No refund request
                        will be entertained for late arriving passengers.
                      </li>
                    </ul>
                  </Box>
                )}
              </Box>
            </TabPanel>
            <TabPanel value="2">
              <BusInteriorSlider />
            </TabPanel>
            <TabPanel value="3">
              <Box>
                <Typography className="cancle_time">Bus Amenities</Typography>
              </Box>
              <Box>
                <Grid container spacing={3}>
                  <Grid item sm={12} lg={2}>
                    <Box my={3}>
                      <Box display="flex" alignItems="center" my={2}>
                        🍶
                        <Typography className="cancle_w">
                          Water Bottle
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" my={2}>
                        🛏<Typography className="cancle_w">Bed Sheet</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={12} lg={2}>
                    <Box my={3}>
                      <Box display="flex" alignItems="center" my={2}>
                        👻<Typography className="cancle_w">Blankets</Typography>
                      </Box>
                      <Box display="flex" alignItems="center" my={2}>
                        🎫<Typography className="cancle_w">M-ticket</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={12} lg={2}>
                    <Box my={3}>
                      <Box display="flex" alignItems="center" my={2}>
                        ⚡
                        <Typography className="cancle_w">
                          Charging Point
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" my={2}>
                        🍿<Typography className="cancle_w">Snacks</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={12} lg={2}>
                    <Box my={3}>
                      <Box display="flex" alignItems="center" my={2}>
                        🛏<Typography className="cancle_w">Pillow</Typography>
                      </Box>
                      <Box display="flex" alignItems="center" my={2}>
                        🚽<Typography className="cancle_w">Toilet</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={12} lg={2}>
                    <Box my={3}>
                      <Box display="flex" alignItems="center" my={2}>
                        💡
                        <Typography className="cancle_w">
                          Reading Light
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" my={2}>
                        👮
                        <Typography className="cancle_w">Tour Guide</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={12} lg={2}>
                    <Box my={3}>
                      <Box display="flex" alignItems="center" my={2}>
                        📷<Typography className="cancle_w">CCTV</Typography>
                      </Box>
                      <Box display="flex" alignItems="center" my={2}>
                        🔌
                        <Typography className="cancle_w">
                          USB port for charger
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel value="4">
              <Grid container spacing={3}>
                <Grid item sm={12} lg={6}>
                  <Box>
                    <Typography className="cancle_time">
                      Pickup Points
                    </Typography>
                  </Box>
                  <Box className="pickup_container">
                    <Box display="flex" alignItems="center">
                      <Typography className="duration_station">
                        20:00
                      </Typography>
                      <Typography className="duration_station" ml={2}>
                        Kashmiri Gate, kashmiri gate metro station
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Typography className="duration_station">
                        20:40
                      </Typography>
                      <Typography className="duration_station" ml={2}>
                        Others, gautam buddha gate chilla border
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item sm={12} lg={6}>
                  <Box>
                    <Typography className="cancle_time">Drop Points</Typography>
                  </Box>
                  <Box className="pickup_container">
                    <Box display="flex" alignItems="center">
                      <Typography className="duration_station">
                        20:30
                      </Typography>
                      <Typography className="duration_station" ml={2}>
                        Rama Devi Chowraha, rama devi chowraha
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="5">Item Three</TabPanel>
          </TabContext>
        </Box>
        <div className="row">
          <div className="col-md-12">
            <Box>
              <Box>
                <div class="collapse multi-collapse" id="multiCollapseExample2">
                  <div class="card card-body" style={{ border: "none" }}>
                    <Grid container spacing={1}>
                      <Grid item p={0} sm={12} lg={1}>
                        <Stack direction="column" spacing={1}>
                          <Button
                            variant="contained"
                            type="submit"
                            className="btn_seat_all"
                          >
                            <Typography className="btn_style">
                              Seat Price
                            </Typography>
                          </Button>
                          <Button
                            variant="contained"
                            type="submit"
                            className="btn_seat_all"
                          >
                            <Typography className="btn_style">All</Typography>
                          </Button>
                          <Button
                            variant="contained"
                            type="submit"
                            className="btn_seat_all"
                          >
                            <Typography className="btn_style">
                              ₹2,343
                            </Typography>
                          </Button>
                          <Button
                            variant="contained"
                            type="submit"
                            className="btn_seat_all"
                          >
                            <Typography className="btn_style">
                              ₹3,454
                            </Typography>
                          </Button>
                          <Button
                            variant="contained"
                            type="submit"
                            className="btn_seat_all"
                          >
                            <Typography className="btn_style">
                              ₹4,456
                            </Typography>
                          </Button>
                        </Stack>
                      </Grid>
                      <Grid item sm={12} lg={5}>
                        <Box
                          style={{
                            backgroundColor: "#CFF5FF",
                            borderRadius: "10px",
                          }}
                        >
                          <Grid container>
                            <Grid item sm={12} md={8}>
                              <Box direction="column">
                                <Stack direction="row">
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                </Stack>
                                <Stack direction="row">
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                </Stack>
                              </Box>
                            </Grid>
                            <Grid item sm={12} md={4}>
                              <Box>
                                <Box className="box_contain">
                                  <Box className="box_space"></Box>
                                </Box>
                              </Box>
                            </Grid>
                          </Grid>

                          <Box sx={{ height: "10px" }}></Box>

                          <Grid container>
                            <Grid item sm={12} md={8}>
                              <Box direction="column">
                                <Stack direction="row">
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                </Stack>
                                <Stack direction="row">
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                </Stack>
                              </Box>
                            </Grid>
                            <Grid item sm={12} md={4}>
                              <Box>
                                <Box className="box_contain">
                                  <Box className="box_space"></Box>
                                </Box>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={5}>
                        <Box
                          style={{
                            backgroundColor: "#CFF5FF",
                            borderRadius: "10px",
                          }}
                        >
                          <Grid container>
                            <Grid item sm={12} md={8}>
                              <Box direction="column">
                                <Stack direction="row">
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                </Stack>
                                <Stack direction="row">
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                </Stack>
                              </Box>
                            </Grid>
                            <Grid item sm={12} md={4}>
                              <Box>
                                <Box className="box_contain">
                                  <Box className="box_space"></Box>
                                </Box>
                              </Box>
                            </Grid>
                          </Grid>

                          <Box sx={{ height: "10px" }}></Box>

                          <Grid container>
                            <Grid item sm={12} md={8}>
                              <Box direction="column">
                                <Stack direction="row">
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                </Stack>
                                <Stack direction="row">
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                  <Box className="seat">
                                    <Checkbox
                                      {...label}
                                      icon={
                                        <ChairIcon className="chair_seat" />
                                      }
                                      checkedIcon={
                                        <ChairIcon className="select_chair_seat" />
                                      }
                                    />
                                  </Box>
                                </Stack>
                              </Box>
                            </Grid>
                            <Grid item sm={12} md={4}>
                              <Box>
                                <Box className="box_contain">
                                  <Box className="box_space"></Box>
                                </Box>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                       <Grid item sm={12} lg={1}>
                        <Stack direction="column" spacing={1}>
                          <Box display="flex" alignItems="center">
                            <Checkbox 
                              {...label}
                              icon={<ChairIcon className="chair_seat" />}
                              checkedIcon={
                                <ChairIcon  className="select_chair_seat" />
                              }
                            />
                            <Typography className="avail_seat">
                              Available Seat
                            </Typography>
                          </Box>
                          <Box display="flex" alignItems="center">
                            <Checkbox 
                              {...label}
                              icon={<ChairIcon className="chair_seat" />}
                              checkedIcon={
                                <ChairIcon className="select_chair_seat" />
                              }
                            />
                            <Typography className="avail_seat">
                              Reserved for ladies
                            </Typography>
                          </Box>
                          <Box display="flex" alignItems="center">
                            <Checkbox
                              {...label}
                              icon={<ChairIcon className="chair_seat" />}
                              checkedIcon={
                                <ChairIcon className="select_chair_seat" />
                              }
                            />
                            <Typography className="avail_seat">
                              Booked Seat
                            </Typography>
                          </Box>
                          <Box display="flex" alignItems="center">
                            <Checkbox
                              {...label}
                              icon={<ChairIcon className="chair_seat" />}
                              checkedIcon={
                                <ChairIcon className="select_chair_seat" />
                              }
                            />
                            <Typography className="avail_seat">
                              Selected Seat
                            </Typography>
                          </Box>
                        </Stack>
                      </Grid>
                    </Grid>
                    <form action="/BusReviewBooking">
                      <Box mt={1}>
                        <Button variant="contained" type="submit">
                          Book Now
                        </Button>
                      </Box>
                    </form>
                  </div>
                </div>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
)
}

export default BusServices;
