import * as React from 'react';
import './holidaypackagetab.css';
// hotel tabs

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import { Grid, Typography, Divider } from '@mui/material';
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";

import StarIcon from '@mui/icons-material/Star';
import FastfoodIcon from "@mui/icons-material/Fastfood";
import information from "../../../images/information.png";
import mainImage from "../../../images/mainImage.png";
// import travellers3 from "../../../images/img/travellers3.jpg";
import building from "../../../images/icons/building.png";
import night from '../../../images/icons/night.png';
import beds from '../../../images/icons/beds.png';
import unitednations from '../../../images/icons/unitednations.png';
import addgroup from '../../../images/icons/addgroup.png';
import review from '../../../images/icons/review.png';
import { useNavigate } from 'react-router-dom';
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import hotell from "../../../images/icons/hotell.png";
import breakfast from "../../../images/icons/breakfast.png";
import checkout from "../../../images/icons/checkout.png";
import CloseIcon from "@mui/icons-material/Close";



// bootstrap
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const HolidayPackageTab = (props) => {

    const settings = {
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();

    return (
        <section>
            <div className="container homeform_container">
                <p className="header_row">
                    <h5>{props.header}</h5>
                </p>
                <div className="row content_row" >

                    <div className="col-12" mx={5}>
                        <Box sx={{ width: '100%', typography: 'body1' }} >
                            <TabContext value={value} centered>
                                <Box pt={5}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered >
                                        <Tab label="ITINERARY" value="1" className="hello" />
                                        <Tab label="Policies" value="2" />
                                        <Tab label="Summary " value="3" />
                                    </TabList>
                                </Box>


                                <TabPanel value="1" >
                                    <Box py={2} sx={{ backgroundColor: "white", borderRadius: "20px", }} >

                                        <Grid container spacing={3} py={2}>
                                            <Grid item xs={12} lg={9}>
                                                <Box>
                                                    <Typography
                                                        sx={{ color: "#006FFF", fontSize: "16px", fontWeight: "bold" }}
                                                        py={2}
                                                    >
                                                        Overview
                                                    </Typography>
                                                    <Typography
                                                        sx={{ color: "#666666", fontSize: "12px", fontWeight: "bold" }}
                                                    >
                                                        Plan a memorable trip to the Southern state of Kerala that boasts of
                                                        natural beauty in abundance. Start your exhilarating experience with a
                                                        visit to Munnar - a hill station with verdant valleys and expansive
                                                        tea estates. Later, travel to Thekkady and explore its aromatic spice
                                                        plantations. Here, enjoy a boat ride and partake in several adventure
                                                        activities, like trekking and rock climbing in the Periyar Wildlife
                                                        Sanctuary to make your trip a fun-filled one.
                                                    </Typography>
                                                </Box>
                                                <Box className="header_top">
                                                    <Box>
                                                        <Typography
                                                            sx={{
                                                                color: "#006FFF",
                                                                fontSize: "16px",
                                                                fontWeight: "bold",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                textDecoration: "underline",
                                                            }}
                                                        >
                                                            Day Plan
                                                        </Typography>
                                                        <Typography
                                                            sx={{
                                                                color: "#FF8900",
                                                                fontSize: "16px",
                                                                fontWeight: "bold",
                                                                marginY: "10px",
                                                            }}
                                                        >
                                                            Day 1
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Grid container p={2}>
                                                            <Grid md={6}>
                                                                <Box display="flex" justifyContent="space-around" className='line_style'>
                                                                    <Box>
                                                                        <Typography className="h_time">04:55</Typography>
                                                                        <Typography className="h_address">New Delhi</Typography>
                                                                        <Typography className="h_address">Tue, 29 Feb</Typography>
                                                                    </Box>
                                                                    <Box>
                                                                        <FlightTakeoffIcon sx={{ color: "#25B1CA" }} />
                                                                    </Box>
                                                                    <Box display="flex" justifyContent="space-around">
                                                                        <Box>
                                                                            <Typography className="r_address">09h 15m</Typography>
                                                                            <Typography className="r_address">
                                                                                1 Stop via Jaipur
                                                                            </Typography>
                                                                        </Box>
                                                                    </Box>

                                                                    <Box>
                                                                        <FlightLandIcon sx={{ color: "#25B1CA" }} />
                                                                    </Box>
                                                                    <Box>
                                                                        <Typography className="p_time">04:55</Typography>
                                                                        <Typography className="p_address">New Delhi</Typography>
                                                                        <Typography className="p_address">Tue, 29 Feb</Typography>
                                                                    </Box>
                                                                </Box>
                                                            </Grid>
                                                            <Grid md={6}>
                                                                <Box display="flex" ml={2}>
                                                                    <Box sx={{ width: "20%", height: "30%" }}>
                                                                        <img src={mainImage} className="flight_img" />
                                                                    </Box>
                                                                    <Box px={2}>
                                                                        <Typography color="#252525" fontSize="12px" fontWeight="bold">
                                                                            WelcomHotel Dwarka - Member ITC Hotel Group
                                                                        </Typography>
                                                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                                                            <StarIcon style={{ color: "#FF8900" }} />
                                                                            <StarIcon style={{ color: "#FF8900" }} />
                                                                            <StarIcon style={{ color: "#FF8900" }} />
                                                                            <StarIcon style={{ color: "#FF8900" }} />
                                                                        </Box>
                                                                    </Box>
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                        <Box
                                                            display="flex"
                                                            justifyContent="center"
                                                            alignItems="center"
                                                            py={3}
                                                        >
                                                            <FastfoodIcon sx={{ color: "#25B1CA", marginRight: "10px" }} />
                                                            <Typography color="#252525" fontSize="12px" fontWeight="bold">
                                                                Meal Plan:
                                                            </Typography>
                                                            <Typography color="#FF8900" fontSize="12px" fontWeight="bold">
                                                                Meals as per hotel plan
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            <Box display="flex">
                                                                <Typography color="#006FFF" fontSize="12px" fontWeight="bold">
                                                                    Day 1 -
                                                                </Typography>
                                                                <Typography color="#252525" fontSize="12px" fontWeight="bold">
                                                                    Arrive in Cochin | Drive from Cochin to Munnar (135 km/approx. 5
                                                                    hours)
                                                                </Typography>
                                                            </Box>
                                                            <Typography color="#666666" fontSize="12px" fontWeight="bold">
                                                                Upon arrival at the Cochin Airport, a Travvolt representative will
                                                                be there to greet you and provide assistance in boarding the
                                                                designated vehicle that will drive you to Munnar. An exotic
                                                                location, Munnar is popular across the country for its tea
                                                                plantations sprawling across its diverse landscape. With lush
                                                                green valleys and rolling hills, the region is an idyllic getaway
                                                                for nature lovers. After a comfortable journey from the airport to
                                                                the hotel in Munnar, check-in and take some rest. You can spend
                                                                the remaining day either relaxing in the hotel room or going for a
                                                                nature walk in the beautiful surroundings of this hill station.
                                                                Retire to the hotel in the evening to stay overnight.
                                                            </Typography>
                                                        </Box>
                                                        <Typography
                                                            sx={{
                                                                color: "#FF8900",
                                                                fontSize: "16px",
                                                                fontWeight: "bold",
                                                                marginY: "10px",
                                                            }}
                                                        >
                                                            Day 2
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Grid container p={2}>
                                                            <Grid md={6}>
                                                                <Box display="flex" ml={2} className='line_style'>
                                                                    <Box sx={{ width: "20%", height: "30%" }}>
                                                                        <img src={mainImage} className="flight_img" />
                                                                    </Box>
                                                                    <Box px={2}>
                                                                        <Typography color="#252525" fontSize="12px" fontWeight="bold">
                                                                            WelcomHotel Dwarka - Member ITC Hotel Group
                                                                        </Typography>
                                                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                                                            <StarIcon style={{ color: "#FF8900" }} />
                                                                            <StarIcon style={{ color: "#FF8900" }} />
                                                                            <StarIcon style={{ color: "#FF8900" }} />
                                                                            <StarIcon style={{ color: "#FF8900" }} />
                                                                        </Box>
                                                                    </Box>
                                                                </Box>
                                                            </Grid>
                                                            <Grid md={6}>
                                                                <Box display="flex" ml={2} textAlign="center" alignItems="center">
                                                                    <Box sx={{ width: "20%", height: "30%" }}>
                                                                        <img src={information} className="flight_img" />
                                                                    </Box>
                                                                    <Box sx={{ color: "red", display: "flex" }}>
                                                                        <ul>
                                                                            <li
                                                                                style={{
                                                                                    fontSize: "10px",
                                                                                    color: "#252525",
                                                                                    fontWeight: "bold",
                                                                                    textAlign: "left",
                                                                                }}
                                                                            >
                                                                                Visit Eravikulam National Park
                                                                            </li>
                                                                            <li
                                                                                style={{
                                                                                    fontSize: "10px",
                                                                                    color: "#252525",
                                                                                    fontWeight: "bold",
                                                                                    textAlign: "left",
                                                                                }}
                                                                            >
                                                                                Visit to Mattupetty Dam
                                                                            </li>
                                                                            <li
                                                                                style={{
                                                                                    fontSize: "10px",
                                                                                    color: "#252525",
                                                                                    fontWeight: "bold",
                                                                                    textAlign: "left",
                                                                                }}
                                                                            >
                                                                                Visit to Flower Garden
                                                                            </li>
                                                                        </ul>
                                                                        <ul>
                                                                            <li
                                                                                style={{
                                                                                    fontSize: "10px",
                                                                                    color: "#252525",
                                                                                    fontWeight: "bold",
                                                                                    textAlign: "left",
                                                                                }}
                                                                            >
                                                                                Visit to Tea Museum
                                                                            </li>
                                                                            <li
                                                                                style={{
                                                                                    fontSize: "10px",
                                                                                    color: "#252525",
                                                                                    fontWeight: "bold",
                                                                                    textAlign: "left",
                                                                                }}
                                                                            >
                                                                                Visit to Eco Point
                                                                            </li>
                                                                        </ul>
                                                                    </Box>
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                        <Box
                                                            display="flex"
                                                            justifyContent="center"
                                                            alignItems="center"
                                                            py={3}
                                                        >
                                                            <FastfoodIcon sx={{ color: "#25B1CA", marginRight: "10px" }} />
                                                            <Typography color="#252525" fontSize="12px" fontWeight="bold">
                                                                Meal Plan:
                                                            </Typography>
                                                            <Typography color="#FF8900" fontSize="12px" fontWeight="bold">
                                                                Meals as per hotel plan
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            <Box display="flex">
                                                                <Typography color="#006FFF" fontSize="12px" fontWeight="bold">
                                                                    Day 2 -
                                                                </Typography>
                                                                <Typography color="#252525" fontSize="12px" fontWeight="bold">
                                                                    Sightseeing in Munnar
                                                                </Typography>
                                                            </Box>
                                                            <Typography color="#666666" fontSize="12px" fontWeight="bold">
                                                                Gear up for a full-day sightseeing tour of Munnar. Surrounded by
                                                                lush greenery and lofty mountains, this hill station has lots in
                                                                store for its visitors, making it one of the most sought-after
                                                                destinations in the country. Some of the prominent attractions of
                                                                this place are the Eravikulam National Park, Mattupetty Dam. After
                                                                exploring the natural beauty of Munnar, return to the hotel and
                                                                take a good night’s sleep.
                                                            </Typography>
                                                        </Box>

                                                        <Typography
                                                            sx={{
                                                                color: "#FF8900",
                                                                fontSize: "16px",
                                                                fontWeight: "bold",
                                                                marginY: "10px",
                                                            }}
                                                        >
                                                            Day 3
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Grid container p={2}>
                                                            <Grid md={6}>
                                                                <Box display="flex" ml={2} className='line_style'>
                                                                    <Box sx={{ width: "20%", height: "30%" }}>
                                                                        <img src={mainImage} className="flight_img" />
                                                                    </Box>
                                                                    <Box px={2}>
                                                                        <Typography color="#252525" fontSize="12px" fontWeight="bold">
                                                                            WelcomHotel Dwarka - Member ITC Hotel Group
                                                                        </Typography>
                                                                        <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                                                            <StarIcon style={{ color: "#FF8900" }} />
                                                                            <StarIcon style={{ color: "#FF8900" }} />
                                                                            <StarIcon style={{ color: "#FF8900" }} />
                                                                            <StarIcon style={{ color: "#FF8900" }} />
                                                                        </Box>
                                                                    </Box>
                                                                </Box>
                                                            </Grid>
                                                            <Grid md={6}>
                                                                <Box display="flex" ml={2} textAlign="center" alignItems="center">
                                                                    <Box sx={{ width: "20%", height: "30%" }}>
                                                                        <img src={information} className="flight_img" />
                                                                    </Box>
                                                                    <Box sx={{ color: "red", display: "flex" }}>
                                                                        <ul>
                                                                            <li
                                                                                style={{
                                                                                    fontSize: "10px",
                                                                                    color: "#252525",
                                                                                    fontWeight: "bold",
                                                                                }}
                                                                            >
                                                                                Visit Periyar National Park
                                                                            </li>
                                                                        </ul>
                                                                        <ul>
                                                                            <li
                                                                                style={{
                                                                                    fontSize: "10px",
                                                                                    color: "#252525",
                                                                                    fontWeight: "bold",
                                                                                }}
                                                                            >
                                                                                Transfer to Airport by Car
                                                                            </li>
                                                                        </ul>
                                                                    </Box>
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                        <Box
                                                            display="flex"
                                                            justifyContent="center"
                                                            alignItems="center"
                                                            py={3}
                                                        >
                                                            <FastfoodIcon sx={{ color: "#25B1CA", marginRight: "10px" }} />
                                                            <Typography color="#252525" fontSize="12px" fontWeight="bold">
                                                                Meal Plan:
                                                            </Typography>
                                                            <Typography color="#FF8900" fontSize="12px" fontWeight="bold">
                                                                Meals as per hotel plan
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            <Box display="flex">
                                                                <Typography color="#006FFF" fontSize="12px" fontWeight="bold">
                                                                    Day 3 -
                                                                </Typography>
                                                                <Typography color="#252525" fontSize="12px" fontWeight="bold">
                                                                    Drive from Munnar to Thekkady (130 km/approx. 4 hours)
                                                                </Typography>
                                                            </Box>
                                                            <Typography color="#666666" fontSize="12px" fontWeight="bold">
                                                                UpToday you may choose to indulge in adventure activities (on
                                                                direct payment basis), like bamboo rafting, border hiking and
                                                                trekking. For an adrenaline rush, you can also partake in other
                                                                activities like wildlife train and hiking. Tourists also have an
                                                                option of enjoying a boat ride (on direct payment basis) on the
                                                                artificial lake in the Periyar Wildlife Sanctuary. This natural
                                                                reserve is spread across an area of about 925 sq km and serves as
                                                                a haven for wildlife. With rich biodiversity and scenic beauty,
                                                                this park is certainly a paradise for nature lovers as well as
                                                                wildlife enthusiasts. The presence of the beautiful artificial
                                                                lake enhances the beauty of this park. After a thrilling
                                                                experience all day long, return to the hotel and sleep the night
                                                                away.
                                                            </Typography>
                                                        </Box>

                                                        <Typography
                                                            sx={{
                                                                color: "#FF8900",
                                                                fontSize: "16px",
                                                                fontWeight: "bold",
                                                                marginY: "10px",
                                                            }}
                                                        >
                                                            Day 4
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Grid
                                                            container
                                                            p={2}
                                                            textAlign="center"
                                                            display="flex"
                                                            justifyContent="center"
                                                        >
                                                            <Grid item lg={6}>
                                                                <Box display="flex" justifyContent="space-around">
                                                                    <Box>
                                                                        <Typography className="h_time">04:55</Typography>
                                                                        <Typography className="h_address">New Delhi</Typography>
                                                                        <Typography className="h_address">Tue, 29 Feb</Typography>
                                                                    </Box>
                                                                    <Box>
                                                                        <FlightTakeoffIcon sx={{ color: "#25B1CA" }} />
                                                                    </Box>
                                                                    <Box display="flex" justifyContent="space-around">
                                                                        <Box>
                                                                            <Typography className="r_address">09h 15m</Typography>
                                                                            <Typography className="r_address">
                                                                                1 Stop via Jaipur
                                                                            </Typography>
                                                                        </Box>
                                                                    </Box>

                                                                    <Box>
                                                                        <FlightLandIcon sx={{ color: "#25B1CA" }} />
                                                                    </Box>
                                                                    <Box>
                                                                        <Typography className="p_time">04:55</Typography>
                                                                        <Typography className="p_address">New Delhi</Typography>
                                                                        <Typography className="p_address">Tue, 29 Feb</Typography>
                                                                    </Box>
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                        <Box>
                                                            <Box display="flex">
                                                                <Typography color="#006FFF" fontSize="12px" fontWeight="bold">
                                                                    Day 4 -
                                                                </Typography>
                                                                <Typography color="#252525" fontSize="12px" fontWeight="bold">
                                                                    Depart from Cochin
                                                                </Typography>
                                                            </Box>
                                                            <Typography color="#666666" fontSize="12px" fontWeight="bold">
                                                                Check-out from the hotel and leave for the Cochin Airport to board
                                                                your return flight.
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <form action="/HolidayGuestDetail">
                                                        <Box textAlign="center" mt={3}>
                                                            <Button
                                                                variant="contained"
                                                                textAlign="center"
                                                                display="flex"
                                                                justifyContent="center"
                                                                type="submit"
                                                            >
                                                                Book Now
                                                            </Button>
                                                        </Box>
                                                    </form>
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
                                                        <Button type='submit' onClick={() => navigate('/HolidayPassengerDetail')} className="btn_proceed" variant="contained">Proceed To Book Online</Button>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>

                                    </Box>
                                </TabPanel>
                                <TabPanel value="2" >
                                    <Box py={2} sx={{ backgroundColor: "white", borderRadius: "20px", }} >
                                        <Grid container spacing={3}>
                                            <Grid item sm={12} xs={12} lg={9}>
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
                                                <Box mt={1}>
                                                    <Typography className="Package">Exclusions</Typography>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Package price does not include Gala dinner charges
                                                            applicable on Christmas and New Year's Eve
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box mt={1}>
                                                    <Typography className="Package">
                                                        Terms and Conditions
                                                    </Typography>
                                                </Box>
                                                <Box display="flex" alignItems="baseline">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Standard check-in time at the hotel is normally 2:00 pm and
                                                            check-out is 11:00 am. An early check-in, or a late
                                                            check-out is solely based on the discretion of the hotel.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="baseline">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            The itinerary is fixed and cannot be modified.
                                                            Transportation shall be provided as per the itinerary and
                                                            will not be at disposal. For any paid activity which is
                                                            non-operational due to any unforeseen reason, we will
                                                            process refund & same should reach the guest within 30 days
                                                            of processing the refund.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="baseline">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            {" "}
                                                            If your flights involve a combination of different airlines,
                                                            you may have to collect your luggage on arrival at the
                                                            connecting hub and register it again while checking in for
                                                            the onward journey to your destination.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Double or Twin bed type provided during check-in is at the
                                                            final discretion of hotel.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            A maximum of 3 adults are allowed in one room. The third
                                                            occupant shall be provided a mattress/rollaway bed.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Also, for any activity which is complimentary and not
                                                            charged to Travvolt & guest, no refund will be processed.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            AC will not be functional anywhere in cool or hilly areas.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            {" "}
                                                            Entrance fee, sightseeing tickets and guide charges are not
                                                            included in the packages.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Airline seats and hotel rooms are subject to availability at
                                                            the time of booking.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Any other items not mentioned under Inclusions are not
                                                            included in the cost of the booking.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Cost of deviation and cost of extension of the validity on
                                                            your ticket is not included.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            {" "}
                                                            For queries regarding cancellations and refunds, please
                                                            refer to our Cancellation Policy.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            {" "}
                                                            Disputes, if any, shall be subject to the exclusive
                                                            jurisdiction of the courts in New Delhi.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Check-in time on a houseboat is 12 pm and check-out time is
                                                            9:00 am.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Due to its climatic conditions, Munnar in Kerala does not
                                                            have AC rooms.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            Most of the Hotels in Munnar are located far away from the
                                                            city centre and local market.{" "}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" alignItems="center">
                                                    <Box>
                                                        <div className="dotted"></div>
                                                    </Box>
                                                    <Box ml={1}>
                                                        <Typography className="paragrapph">
                                                            If a guest is staying on a houseboat, the sightseeing will
                                                            not be conducted.{" "}
                                                        </Typography>
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
                                                    <Button type='submit' onClick={() => navigate('/HolidayPassengerDetail')} className="btn_proceed" variant="contained">Proceed To Book Online</Button>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>


                                    </Box>
                                </TabPanel>
                                <TabPanel value="3">
                                    <Box py={2} sx={{ backgroundColor: "white", borderRadius: "20px", }} >

                                        <Grid container spacing={3} py={2}>
                                            <Grid item sm={12} xs={12} lg={9}>
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
                                                            <img src={hotell}  />
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
                                                    <Button type='submit' onClick={() => navigate('/HolidayPassengerDetail')} className="btn_proceed" variant="contained">Proceed To Book Online</Button>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>

                                    </Box>
                                </TabPanel>

                            </TabContext>
                        </Box>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HolidayPackageTab;