
import { Grid, Typography, Divider, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import hotell from "../../../images/icons/hotell.png";
import breakfast from "../../../images/icons/breakfast.png";
import checkout from "../../../images/icons/checkout.png";
import CloseIcon from "@mui/icons-material/Close";
import building from "../../../images/icons/building.png";
import night from '../../../images/icons/night.png';
import beds from '../../../images/icons/beds.png';
import unitednations from '../../../images/icons/unitednations.png';
import addgroup from '../../../images/icons/addgroup.png';
import review from '../../../images/icons/review.png';
import React, { useState } from "react";

import "./holidaypassengerReviewbooking.css";

const HolidayPassengerBookingReview = () => {

    const navigate = useNavigate();

    const [selectedOption, setSelectedOption] = useState("");
    console.log(selectedOption);
    const [ratingOption, setRatingOption] = useState("");
    console.log(ratingOption);
    const [bookingOption, setBookingOption] = useState("");
    console.log(bookingOption);

    return (
        <div className='container'>
            <Box mt={3} p={3} sx={{ backgroundColor: "white", borderRadius: "20px", }} >

                <Grid container spacing={3} py={2}>
                    <Grid item xs={12} lg={9}>
                        <Box>
                            <Box>
                                <Typography className='premium_kerala'>Premium 4N Kerala Vacay</Typography>
                                <Box className='box_container' mt={2}>
                                    <Box>
                                        <Typography className='day_night'>4N/5D</Typography>
                                    </Box>
                                    <Box>
                                        <Typography className='day_destination'>2N Munnar</Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <Typography className="doted"></Typography>
                                        <Typography className="dashed_line"></Typography>
                                        <Typography className="doted"></Typography>
                                    </Box>
                                    <Box>
                                        <Typography className='day_destination'>1N Thekkady</Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <Typography className="doted"></Typography>
                                        <Typography className="dashed_line"></Typography>
                                        <Typography className="doted"></Typography>
                                    </Box>
                                    <Box>
                                        <Typography className='day_destination'>1N Alleppey</Typography>
                                    </Box>
                                </Box>
                                <Typography className='passenger_time' my={1}>Apr 3, 2023 - Apr 7, 2023 / From New Delhi | 1 Room - 2 Adults</Typography>
                            </Box>
                            <Box className='passenger_form_container'>
                                <Typography className='passenger_detail'>Travellers Details</Typography>
                                <Typography className='passenger_time'>2 Travellers - 1 Room | 2 Adults</Typography>
                                <Box className='radio_passenger_btn' mt={1}>
                                    <Box className='radio_passenger_btn'>
                                        <input className="radio" type="radio" value="option1"
                                            checked={selectedOption === "option1"}
                                            onClick={(e) => setSelectedOption("option1")} /><Typography className='booking_for'>I'm Booking for myself</Typography>
                                    </Box>

                                    <Box className='radio_passenger_btn' ml={5}>
                                        <input ml={2} className="radio" type="radio" value="option2"
                                            checked={selectedOption === "option2"}
                                            onClick={(e) => setSelectedOption("option2")} /><Typography className='booking_for'>I'm Booking for Someone else</Typography>
                                    </Box>
                                </Box>

                                <Box py={2}>
                                    <Typography className='guest_detail'>Guest Details</Typography>
                                </Box>
                                <Box py={2}>
                                    <Typography className='traveller_one'>Traveller 1</Typography>
                                </Box>
                                <Box>
                                    <Grid container spacing={3} my={1}>
                                        <Grid item xs={12} sm={12} md={2}>
                                            <Box>
                                                <Typography class="passenger_name">First Name :</Typography>
                                                <Typography class="passenger_name">Last Name :</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={3} py={1}>
                                            <Box>
                                                <Typography class="passenger_name">Priyam</Typography>
                                                <Typography class="passenger_name">Singh</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={2} py={1}>

                                        </Grid>
                                        <Grid item xs={12} sm={12} md={2} py={1}>
                                            <Box>
                                                <Typography class="passenger_name">Gender :</Typography>
                                                <Typography class="passenger_name">Date of Birth :</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={3} py={1}>
                                            <Box>
                                                <Typography class="passenger_name">Female</Typography>
                                                <Typography class="passenger_name">17/02/1999</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box py={2}>
                                    <Typography className='traveller_one'>+ Add More Passenger Details</Typography>
                                </Box>
                                <Box pt={2}>
                                    <Typography className='guest_detail'>Please enter contact details</Typography>
                                </Box>
                                <Box>
                                    <Grid container spacing={3} my={1}>
                                        <Grid item xs={12} sm={12} md={2}>
                                            <Box>
                                                <Typography class="passenger_name">Email:</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={3} py={1}>
                                            <Box>
                                                <Typography class="passenger_name">priyamsingh1010"gmail.com</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={2} py={1}>

                                        </Grid>
                                        <Grid item xs={12} sm={12} md={2}>
                                            <Box>
                                                <Typography class="passenger_name">Mobile Number :</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={3} py={1}>
                                            <Box>
                                                <Typography class="passenger_name">986587456</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box pt={2}>
                                    <Typography className='guest_detail'>Please enter GST Details</Typography>
                                </Box>
                                <Box>
                                    <Grid container spacing={3} my={1}>
                                        <Grid item xs={12} sm={12} md={2}>
                                            <Box>
                                                <Typography class="passenger_name">GST Details :</Typography>
                                                <Typography class="passenger_name">Address :</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={3} py={1}>
                                            <Box>
                                                <Typography class="passenger_name">...</Typography>
                                                <Typography class="passenger_name">Abc Maharashtra</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={2} py={1}>

                                        </Grid>
                                        <Grid item xs={12} sm={12} md={2}>
                                            <Box>
                                                <Typography class="passenger_name">GST State :</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={2} py={1}>
                                            <Box>
                                                <Typography class="passenger_name">Maharashtra</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box pt={2}>
                                    <Typography className='guest_detail'>Special Request</Typography>
                                </Box>
                                <Box>
                                    <Grid container spacing={3} my={1}>
                                        <Grid item xs={12} sm={12} md={3}>
                                            <Box>
                                                <Typography class="passenger_name">Enter Special Request:</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4} py={1}>
                                            <Box>
                                                <Typography class="passenger_name">...</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box mt={4}>
                                    <Typography className='package_itinerary_heading'>Package Itinerary & Inclusions</Typography>
                                    <Typography className='passenger_time' my={1}>Itinerary / 2 Flight / 3 Hotel / 5 Transfers / 7 Activities</Typography>
                                </Box>
                                <Box>
                                    <Box>
                                        <Typography className="heading_package">
                                            Package Inclusions
                                        </Typography>
                                    </Box>

                                    <Box px={2} style={{ borderLeft: "6px solid #707070" }} >
                                        <Box display="flex" alignItems="center">
                                            <Box>
                                                <FlightOutlinedIcon />
                                            </Box>
                                            <Box mt={1}>
                                                <Typography className="flight_text">
                                                    Arrival in Goa by Go First G8-232 | Departing on 01 Apr,
                                                    10:45 AM | Arriving on 1Apr, 01:30 PM | Includes Check in
                                                    Baggage
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box display="flex" alignItems="center">
                                            <Box>
                                                <DirectionsCarFilledIcon />
                                            </Box>
                                            <Box mt={1}>
                                                <Typography className="flight_text">
                                                    Airport to Hotel in Goa
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box mt={1} ml={2}>
                                            <Typography className="goa_text">Goa - 3 Night Stay</Typography>
                                        </Box>
                                        <Box mt={1} ml={2} display="flex" alignItems="center">
                                            <Box>
                                                <Typography className="days_text">
                                                    Day 1 <br /> Apr 1, Sat
                                                </Typography>
                                                <Typography></Typography>
                                            </Box>
                                            <Box px={2}>
                                                <img src={hotell} />
                                            </Box>
                                            <Box>
                                                <Typography className="stay_text">
                                                    Check in to Hotel Regent Leguna, 3 Star
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box mt={1} ml={2} display="flex" alignItems="center">
                                            <Box>
                                                <Typography className="days_text">
                                                    Day 2 <br /> Apr 2, Sun
                                                </Typography>
                                                <Typography></Typography>
                                            </Box>
                                            <Box px={2}>
                                                <img src={breakfast} />
                                            </Box>
                                            <Box>
                                                <Typography className="stay_text">
                                                    Day Meals: Breakfast: Included at Hotel Regent Laguna, Goa
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box mt={1} ml={2} display="flex" alignItems="center">
                                            <Box>
                                                <Typography className="days_text">
                                                    Day 3 <br /> Apr 3, Mon
                                                </Typography>
                                                <Typography></Typography>
                                            </Box>
                                            <Box px={2}>
                                                <img src={breakfast} />
                                            </Box>
                                            <Box>
                                                <Typography className="stay_text">
                                                    Day Meals: Breakfast: Included at Hotel Regent Laguna, Goa
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box mt={1} ml={2} display="flex" alignItems="center">
                                            <Box>
                                                <Typography className="days_text">
                                                    Day 4 <br /> Apr 4, Tue
                                                </Typography>
                                                <Typography></Typography>
                                            </Box>
                                            <Box px={2}>
                                                <img src={breakfast} />
                                            </Box>
                                            <Box>
                                                <Typography className="stay_text">
                                                    Day Meals: Breakfast: Included at Hotel Regent Laguna, Goa
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box display="flex" alignItems="center">
                                            <Box>
                                                <DirectionsCarFilledIcon />
                                            </Box>
                                            <Box mt={1}>
                                                <Typography className="flight_text">
                                                    Hotel in Goa to Airport
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box display="flex" alignItems="center">
                                            <Box>
                                                <FlightOutlinedIcon />
                                            </Box>
                                            <Box mt={1}>
                                                <Typography className="flight_text">
                                                    Departure from Goa by Go First Flight G8-243 | Departure on
                                                    04 Apr, 05:30 PM | Arriving on 04 Apr, 08:20 PM Check In
                                                    Baggage
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box px={3}>
                                        <Box mt={2} display="flex" alignItems="center">
                                            <Box>
                                                <img src={checkout} />
                                            </Box>
                                            <Box>
                                                <Typography className="check_out">
                                                    Checkout from Hotel in Goa
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box mt={2}>
                                            <Typography className="exclusion_text">
                                                Package Exclusions
                                            </Typography>
                                        </Box>
                                        <Box mt={1} display="flex" alignItems="center">
                                            <Box>
                                                <CloseIcon style={{ color: "red", width: "18px", height: "18px", fontWeight: "bold" }} />
                                            </Box>
                                            <Box>
                                                <Typography className="close_text">Expenses of personal nature</Typography>
                                            </Box>
                                        </Box>
                                        <Box display="flex" alignItems="center">
                                            <Box>
                                                <CloseIcon style={{ color: "red", width: "18px", height: "18px", fontWeight: "bold" }} />
                                            </Box>
                                            <Box>
                                                <Typography className="close_text">EMentioned cost is not valid between 6 pm & 8 pm</Typography>
                                            </Box>
                                        </Box>
                                        <Box display="flex" alignItems="center">
                                            <Box>
                                                <CloseIcon style={{ color: "red", width: "18px", height: "18px", fontWeight: "bold" }} />
                                            </Box>
                                            <Box>
                                                <Typography className="close_text">Anything not mentioned under inclusions</Typography>
                                            </Box>
                                        </Box>
                                        <Box display="flex" alignItems="center">
                                            <Box>
                                                <CloseIcon style={{ color: "red", width: "18px", height: "18px", fontWeight: "bold" }} />
                                            </Box>
                                            <Box>
                                                <Typography className="close_text">Package price does not include Gala dinner charges applicable on Christmas and New Year's Eve</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box mt={4}>
                                    <Typography className='package_itinerary_heading'>Cancellation & Date Change</Typography>
                                    <Typography className='passenger_time' my={1}>Package Cancellation Policy</Typography>
                                </Box>
                                <Box>
                                    <Box>
                                        <Typography className="CANCELLATION">
                                            CANCELLATION & DATE CHANGE
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography className="content">
                                            How much will it cost to cancel or change the start date after
                                            making a booking?
                                        </Typography>
                                    </Box>
                                    <Box mt={1}>
                                        <Typography className="Package">
                                            Package Cancellation Policy
                                        </Typography>
                                        <Typography className="Package">
                                            Cancellation & Charges:
                                        </Typography>
                                    </Box>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        <Box>
                                            <Typography className="Cancellation">
                                                Cancellation Time
                                            </Typography>
                                            <Typography className="Time">Till 03 Feb 23</Typography>
                                            <Typography className="Time">After 03 Feb 23</Typography>
                                        </Box>
                                        <Box>
                                            <Typography className="Cancellation">
                                                Cancellation Charges
                                            </Typography>
                                            <Typography className="Charges">
                                                ₹2,000 Cancellation Fee
                                            </Typography>
                                            <Typography className="Charges">Non Refundable</Typography>
                                        </Box>
                                    </Box>
                                    <Box mt={1}>
                                        <Typography className="Note">
                                            Note: These are non-refundable amounts as per the current
                                            components attached. In the case of component
                                            change/modifications, the policy will change accordingly.
                                        </Typography>
                                    </Box>
                                    <Box mt={1}>
                                        <Typography className="Package">
                                            Package Date Change Policy
                                        </Typography>
                                    </Box>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        <Box mt={1}>
                                            <Typography className="Cancellation">
                                                Date Change Possible
                                            </Typography>
                                            <Typography className="Time">Till 03 Feb 23</Typography>
                                            <Typography className="Time">After 03 Feb 23</Typography>
                                        </Box>
                                        <Box mt={1}>
                                            <Typography className="Cancellation">Date Change</Typography>
                                            <Typography className="Charges">
                                                ₹0 Date Change Fee
                                            </Typography>
                                            <Typography className="Charges">
                                                Date cannot be changed
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box display="flex" alignItems="baseline" mt={2}>
                                    <Box>
                                        <div className="dotted"></div>
                                    </Box>
                                    <Box ml={1}>
                                        <Typography className="paragrapph">
                                            These are non-refundable amounts as per the current components attached. In the case of component change/modification, the policy will change accordingly.
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" alignItems="baseline">
                                    <Box>
                                        <div className="dotted"></div>
                                    </Box>
                                    <Box ml={1}>
                                        <Typography className="paragrapph">
                                            Data change fees don't include any fare change in the components on the new date.
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" alignItems="baseline">
                                    <Box>
                                        <div className="dotted"></div>
                                    </Box>
                                    <Box ml={1}>
                                        <Typography className="paragrapph">
                                            Fare difference as applicable will be charged separately. Date change will depend on the availability of the components on the requested date.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={12} xs={12} lg={3}>
                        <Box className="border_left">
                            <Box mt={1}>
                                <Typography className="Holiday">
                                    Your Holiday Package
                                </Typography>
                                <Divider sx={{ backgroundColor: "gray", marginY: "8px" }} />
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box>
                                    <img src={building} />
                                </Box>
                                <Box>
                                    <Typography className="holiday_Package" ml={1}>
                                        New Delhi To Kerela
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box>
                                    <img src={night} />
                                </Box>
                                <Box>
                                    <Typography className="holiday_Package" ml={1}>
                                        4 Night(s) (05 Feb-08 Feb, 2023)
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box>
                                    <img src={beds} />
                                </Box>
                                <Box>
                                    <Typography className="holiday_Package" ml={1}>
                                        1 Room(s)
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box>
                                    <img src={unitednations} />
                                </Box>
                                <Box>
                                    <Typography className="holiday_Package" ml={1}>
                                        Indian
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box>
                                    <img src={addgroup} />
                                </Box>
                                <Box>
                                    <Typography className="holiday_Package" ml={1}>
                                        2 Adult(s)
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box>
                                    <img src={review} />
                                </Box>
                                <Box>
                                    <Typography className="holiday_Package" ml={1}>
                                        5 Star or more
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider sx={{ backgroundColor: "gray", marginY: "8px" }} />
                            <Box>
                                <Typography className="package_text">$4147</Typography>
                            </Box>
                            <Box>
                                <Typography className="package_text_color">$4147</Typography>
                            </Box>
                            <Box>
                                <Typography className="package_person">per person* (*Excluding applicable taxes)</Typography>
                            </Box>
                            <Box mt={1} display="flex" justifyContent="center">
                                <Button type='submit' onClick={() => navigate('/HolidayPassengerReviewBooking')} className="btn_proceed" variant="contained">Proceed</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </div>
    )
}

export default HolidayPassengerBookingReview
