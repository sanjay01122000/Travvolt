import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./hotelreviewleft.css";
import StarIcon from "@mui/icons-material/Star";
import travellers from "../../../images/img/travellers.jpg";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const HotelReviewLeft = () => {
  const initialvalue = {
    select: "",
    fname: "",
    lname: "",
    email: "",
    number: "",
  };
  const [serviceList, setServiceList] = useState([{ service: "" }]);
  const [values, setValues] = useState(initialvalue);
  const [error, setError] = useState(false);
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };
  // end


  function handleSubmit(e) {
    e.preventDefault();

    if (
      values.fname.length < 1 ||
      values.lname.length < 1 ||
      values.email.length < 10 ||
      values.number.length < 1
    ) {
      setError(true);
    }
  }

  return (
    <div>
      <Box
        my={2}
        sx={{
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "10px 58px",
        }}
      >
        <Box>
          <Typography className="heading_main">Review Booking</Typography>
        </Box>
        <Box mt={2} p={2} className="box_shadow">
          <Grid container>
            <Grid item xs={12} md={9}>
              <Box display="flex" alignItems="center">
                <Typography className="heading">
                  Dusit Thani Abu Dhabi
                </Typography>
                <Box>
                  <StarIcon style={{ color: "yellow" }} />
                  <StarIcon style={{ color: "yellow" }} />
                  <StarIcon style={{ color: "yellow" }} />
                  <StarIcon style={{ color: "yellow" }} />
                  <StarIcon style={{ color: "yellow" }} />
                </Box>
              </Box>

              <Typography className="paragraph">
                Al Muroor Road , 4th street , PO Box 52799, 52799 Abu Dhabi,
                United Arab Emirates, Abu Dhabi, United Arab Emirates
              </Typography>
              <Box mt={1}>
                <Grid container>
                  <Grid item xs={12} md={3}>
                    <Typography className="check_in_out">Check-In </Typography>
                    <Typography className="date">16 Feb, 2023</Typography>
                    <Typography className="days">Thursday, 12 PM</Typography>
                  </Grid>
                  <Grid mt={3} item xs={12} md={3}>
                    <Box display="flex" alignItems="center">
                      <Typography className="dot"></Typography>
                      <Typography className="line"></Typography>
                      <Typography className="dot"></Typography>
                    </Box>
                  </Grid>
                  <Grid item ml={2} xs={12} md={5}>
                    <Typography className="check_in_out">Check-Out </Typography>
                    <Typography className="date">21 Feb, 2023</Typography>
                    <Typography className="days">Tuesday, 12 PM</Typography>
                  </Grid>
                </Grid>
                <Box ml={12}>
                  <Typography className="result">
                    5 Nights | 2 Adults | 1 Room
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box>
                <img
                  src={travellers}
                  style={{
                    borderRadius: "10px",
                    height: "95px",
                    width: "100%",
                    padding: "3px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={2} p={2} className="box_shadow">
          <Grid container>
            <Grid item xs={12} md={12}>
              <Box display="flex" alignItems="center">
                <Typography className="heading">Deluxe King</Typography>
                <Box>
                  <Typography className="paragraph">2 Adult</Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography className="dot"></Typography>
                <Box ml={1}>
                  <Typography className="breakfast">Free Breakfast</Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography className="non_refundable">
                  {" "}
                  X Non-Refundable{" "}
                </Typography>
                <Box
                  ml={1}
                  className="border_line"
                  display="flex"
                  alignItems="center"
                >
                  <Typography className="refund">
                    On Cancellation, You will not get any refund{" "}
                  </Typography>
                </Box>
                <Box ml={1}>
                  <Typography className="policy">
                    Cancellation Policy Details
                  </Typography>
                </Box>
              </Box>
              <Box mt={1} className="bottom_line"></Box>
              <Box>
                <Box>
                  <Typography className="heading">
                    Important information
                  </Typography>
                </Box>
                <Box display="flex">
                  <Box>
                    <Typography className="dot"></Typography>
                  </Box>
                  <Box ml={1}>
                    <Typography className="paragraph">
                      This property offers transfers from the airport
                      (surcharges may apply). To arrange pick-up, guests must
                      contact the property 24 hours prior to arrival, using the
                      contact information on the booking confirmation. Front
                      desk staff will greet guests on arrival.
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography className="dot"></Typography>
                  <Box ml={1}>
                    <Typography className="paragraph">
                      The hotel may choose to charge your card any time post
                      booking.
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography className="dot"></Typography>
                  <Box ml={1}>
                    <Typography className="paragraph">
                      Unmarried couples are not allowed
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography className="dot"></Typography>
                  <Box ml={1}>
                    <Typography className="paragraph">
                      Guests below 18 years of age are not allowed at the
                      property.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={2} p={2} className="box_shadow">
          <Grid container>
            <Grid item xs={12} md={12}>
              <Box>
                <Typography className="heading">Guest Details</Typography>
                <Box>
                  {serviceList.map((singleService, index) => (
                    <div key={index} className="services" py={1}>
                      <Box>
                        <Typography className="Top_txt" py={2}>
                          Travellers
                        </Typography>
                        <Grid container spacing={3} mt={1}>
                          <Grid item xs={12} sm={12} md={2}>
                            <Box className="topest_field">
                              <label className="label_field">
                                Title<span style={{ color: "red" }}>*</span>
                              </label>
                              <select
                                className="select_class"
                                name="select"
                                value={values.select}
                                onChange={handleChange}
                              >
                                <option value="">Select</option>
                                <option value="1">Mr</option>
                                <option value="2">Mr</option>
                                <option value="3">Mr</option>
                                <option value="4">Mr</option>
                              </select>
                              {error && values.select.length < 1 ? (
                                <label
                                  style={{
                                    color: "red",
                                    fontSize: "12px",
                                    textAlign: "left",
                                  }}
                                >
                                  Please Select Title{" "}
                                </label>
                              ) : (
                                ""
                              )}
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={12} md={4}>
                            <Box className="topest_field">
                              <label className="label_field">
                                First Name
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                value={values.fname}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                name="fname"
                              />
                              {error && values.fname.length < 1 ? (
                                <label
                                  style={{
                                    color: "red",
                                    fontSize: "12px",
                                    textAlign: "left",
                                  }}
                                >
                                  Please Enter First Name{" "}
                                </label>
                              ) : (
                                ""
                              )}
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={12} md={4} py={1}>
                            <Box className="topest_field">
                              <label className="label_field">
                                Last Name<span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                value={values.lname}
                                onChange={handleChange}
                                placeholder="Enter your last name"
                                name="lname"
                              />
                              {error && values.lname.length < 1 ? (
                                <label
                                  style={{
                                    color: "red",
                                    fontSize: "12px",
                                    textAlign: "left",
                                  }}
                                >
                                  Please Enter Last Name{" "}
                                </label>
                              ) : (
                                ""
                              )}
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid container spacing={3} my={1}>
                          <Grid item xs={12} sm={12} md={4}>
                            <Box className="topest_field">
                              <label className="label_field">
                                Email<span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="email"
                                placeholder="Enter your Email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                              />
                              {error && values.email.length < 1 ? (
                                <label
                                  style={{
                                    color: "red",
                                    fontSize: "12px",
                                    textAlign: "left",
                                  }}
                                >
                                  Please Enter Your email{" "}
                                </label>
                              ) : (
                                ""
                              )}
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={12} md={4} py={1}>
                         


                            <Box className="topest_field">
                              <label className="label_field">
                                Mobile Number
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <PhoneInput style={{position:"initial", height:"50px",width:"306px",borderRadius:"10px",border:"3px solid #CACACA"}}
                                country={"in"}
                                enableSearch={true}
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                              />
                              {error && values.number.length < 10 ? (
                                <label
                                  style={{
                                    color: "red",
                                    fontSize: "12px",
                                    textAlign: "left",
                                  }}
                                >
                                  Please Enter Your number{" "}
                                </label>
                              ) : (
                                ""
                              )}
                            </Box>
                          </Grid>
                        </Grid>
                        <Box py={2}>
                          <Typography className="booking_id">
                            (Booking voucher will be sent to this email ID)
                          </Typography>
                        </Box>

                        <Box
                          className="second_division"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {serviceList.length - 1 === index &&
                            serviceList.length < 9 && (
                              <Button
                                style={{ color: "#008FCC" }}
                                variant=""
                                type="button"
                                onClick={() => {
                                  handleServiceAdd();
                                 
                                }}
                              >
                                <span>+ Add More Passenger Details</span>
                              </Button>
                            )}
                          {serviceList.length !== 1 && (
                            <Button
                              variant="contained"
                              color="warning"
                              type="button"
                              onClick={() => {
                                handleServiceRemove(index);
                             
                              }}
                            >
                              <span> -Remove </span>
                            </Button>
                          )}
                        </Box>
                      </Box>
                    </div>
                  ))}
                </Box>
                <Box mt={1} display="flex" alignItems="center" justifyContent="center">
                  <Button style={{width:"200px",borderRadius:"20px"}}
                    type="submit"
                    onClick={handleSubmit}
                    variant="contained"
                  >
                    Reserve Now
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default HotelReviewLeft;
