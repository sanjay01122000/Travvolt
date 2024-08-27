
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import React, { useState } from "react";
// hotel tabs
import "bootstrap/dist/css/bootstrap.css";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Grid, Paper, Radio, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import AddIcon from '@mui/icons-material/Add';
import GppGoodIcon from '@mui/icons-material/GppGood';
import email from "../../../../images/email.png";
import chat from "../../../../images/chat.png";
import SquareIcon from '@mui/icons-material/Square';
import flight from "../../../../images/flight.png";

import './booknow.css';

function valuetext(value) {
    return `${value}°C`;
}



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };




    const [value, setValue] = React.useState('1');



    // Add form

    const [serviceList, setServiceList] = useState([{ service: "" }]);

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

    return (
        <div className="container ">
            <div className="row popular_content">

                <div className="col-12">
                    <div className='row' style={{ display: 'flex' }}>

                        <div className='col-md-9 ' >

                            <div className='leftsection' display='flex' justifyContent='center' alignItems='center' py={3}>
                                <Typography className='top_heading'>Complete Your Booking</Typography>
                                <Box p={3}>
                                    <Accordion sx={{ borderRadius: '20px', marginBottom: '20px', boxShadow: '2px 2px 8px gray', backgroundColor: 'white' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                            <Typography className='para_head' mb={1}>Ticket Details</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Box className='ticket_details' p={3}>
                                                {/* <Typography className='para_head' mb={1}>Ticket Details</Typography> */}
                                                <Grid container className='deals'>
                                                    <Grid md={3} className='deal_const'>
                                                        <Typography className='txt_m'>IndiGO</Typography>
                                                        <Typography className='txt_small'>6E 2431, 6E 909</Typography>
                                                        <Typography className='txt_small1'>Economy</Typography>
                                                    </Grid>
                                                    <Grid md={3} className='deal_const'>
                                                        <Typography className='time_up'>DEL 17:25</Typography>
                                                        <Typography sx={{ fontSize: '16px', color: '#707070', marginTop: '10px' }} >Tue, 27 Dec, 2022</Typography>
                                                        <Typography sx={{ fontSize: '16px', color: '#FF8900', lineHeight: '1', font: ' normal normal bold 16px/16px Quicksand !important' }}>Indira Gandhi International Airport, New Delhi, India (Terminal 1)</Typography>
                                                    </Grid>
                                                    <Grid md={3} className='deal_const' >
                                                        <Typography sx={{ fontSize: '14px', color: '#707070', textAlign: 'center' }}>09h 15m</Typography>
                                                        <Typography textAlign='center' style={{ color: '#39BBCE' }}>.....<ConnectingAirportsIcon />........</Typography>
                                                        <Typography sx={{ textAlign: 'center' }}>Flight Duration</Typography>
                                                    </Grid>
                                                    <Grid md={3} className='deal_const' style={{ textAlign: 'right' }}>
                                                        <Typography className='time_up' style={{ textAlign: 'right' }}>BOM 19:25</Typography>
                                                        <Typography sx={{ fontSize: '16px', color: '#707070', marginTop: '10px' }} >Tue, 27 Dec, 2022</Typography>
                                                        <Typography sx={{ fontSize: '16px', color: '#FF8900', lineHeight: '1', font: ' normal normal bold 16px/16px Quicksand !important' }}>Indira Gandhi International Airport, New Delhi, India (Terminal 1)</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <Box className='ticket_details' py={1}>
                                                <form action="/seatselect">
                                                    <Typography px={4}  className='para_head'>Important Information</Typography>
                                                    <Typography className='guidline'><AddIcon style={{ color: 'red', backgroundColor: '#f9f9f9', borderRadius: '50%' }} />COVID Guidelines and Vaccination Requirements</Typography>
                                                    <ul>
                                                        <li className='list_item'>COVID test/vaccination rules: All travellers entering Maharashtra must carry either a final COVID vaccination certificate (both doses done) OR a negative RT PCR report with a sample taken within 72 hours before arrival. RT-PCR test timeline starts from the swab collection time. Negative RT-PCR test report is not required for fully vaccinated travellers to enter Maharashtra. Travellers might not be allowed to board their flights if they are not carrying a valid test report/vaccination certificate. Thermal screening will be done for all travellers. For Mumbai: In exceptional cases like family distress, etc., testing may be allowed on arrival at the airport.</li>
                                                        <li className='list_item'><b>Quarantine rules: </b>When arriving from a domestic city/state: No quarantine or hand stamping for asymptomatic travellers. Pre-registration or e-Pass requirements: Download and update Aarogya</li>
                                                        <li className='list_item'>Check the detailed list of travel guidelines issued by Indian States and UTs here Know More</li>

                                                        <li className='list_item'>If you have arrived on any international flight and are taking a connecting domestic flight, please check the 'Travelling to India' tab Here</li>
                                                    </ul>
                                                    <Typography className='guidline'><AddIcon style={{ color: 'red', backgroundColor: '#f9f9f9', borderRadius: '50%' }} />Pre-Flight Checklist</Typography>
                                                    <ul>
                                                        <li className='list_item'>Remember to web check-in before arriving at the airport; carry a printed or soft copy of the boarding pass. Wearing masks/face covers is no longer mandatory. However, all travellers are advised to wear them, in view of the threat posed by COVID-19. </li>
                                                        <li className='list_item'> One hand bag up to 7 kgs and 55x35x25cm, is allowed per traveller as cabin baggage. Certain personal articles like a lady's purse, laptop bags, etc. can be carried additionally. </li>
                                                    </ul>
                                                    <p style={{ marginLeft: '24px' }} className='list_item'>
                                                        <b>DISCLAIMER:</b> The information provided above is only for ready reference and convenience of customers, and may not be exhaustive. We strongly recommend that you check the full text of the guidelines issued by the State Governments and Airlines before travelling to ensure smooth travel. We accept no liability in this regard. In case you do not meet the required guidelines, the airline or state authorities can stop you from travelling.

                                                    </p>
                                                    <Divider py={5} />
                                                    <Box>
                                                        <Box style={{ display: 'flex', marginTop: '10px' }} px={2}>
                                                            <GppGoodIcon style={{ color: 'gold' }} />
                                                            <div>
                                                                <Typography className='list_item' style={{ color: 'black' }}>Travel Insurance</Typography>
                                                                <Typography style={{ font: "normal normal bold  Quicksand !important", fontSize: '12px', color: '#252525' }}>30min settlement | Easy clain process</Typography>
                                                            </div>
                                                        </Box>
                                                        <Box style={{ display: 'flex', justifyContent: 'space-between' }} px={4} pt={1}>
                                                            <Typography style={{ font: "normal normal bold 12px Quicksand !important", color: '#252525' }}>Delays Beyond 60mins</Typography>
                                                            <Typography style={{ font: "normal normal bold 12px Quicksand !important", color: '#FF951A' }}>Flat ₹1000</Typography>
                                                        </Box>
                                                        <Box style={{ display: 'flex', justifyContent: 'space-between' }} px={4} pt={1}>
                                                            <Typography style={{ font: "normal normal bold 12px Quicksand !important", color: '#252525' }}>Airline Cancellation</Typography>
                                                            <Typography style={{ font: "normal normal bold 12px Quicksand !important", color: '#FF951A' }}>Flat ₹2500</Typography>
                                                        </Box>
                                                        <Box style={{ display: 'flex', justifyContent: 'space-between' }} px={4} pt={1}>
                                                            <Typography style={{ font: "normal normal bold 12px Quicksand !important", color: '#252525' }}>Missed Flight</Typography>
                                                            <Typography style={{ font: "normal normal bold 12px Quicksand !important", color: '#FF951A' }}>Flat ₹3500</Typography>
                                                        </Box>
                                                        <Typography sx={{ color: '#006FFF', font: 'normal normal bold 12px/15px Quicksand', justifyContent: 'center', display: 'flex', marginTop: '10px', marginLeft: '10px' }}>*Don't let a flight delay or cancellation add to your worries. Get your trip Insured.</Typography>
                                                        <Stack spacing={2} direction="row" display='flex' justifyContent='center' py={1}>
                                                            <Button variant="outlined">Insure for ₹249/ person</Button>
                                                            <Button variant="outlined">I will take the risk</Button>
                                                        </Stack>
                                                    </Box>
                                                    <Divider py={5} />

                                                    <Box margin='10px 15px'>
                                                        <Box style={{ display: 'flex', marginTop: '12px', marginBottom: '12px' }} px={2}>
                                                            <Typography className='list_item' style={{ color: 'black', marginY: '12px' }}>Traveller Details</Typography>
                                                        </Box>
                                                        <Box style={{ backgroundColor: 'white', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', }} p={2}>

                                                            <Box>

                                                                <Typography className="Top_txt" py={3}>Travellers</Typography>
                                                                {serviceList.map((singleService, index) => (
                                                                    <div key={index} className="services" py={1}>
                                                                        <Box>

                                                                            <Grid container spacing={3} my={1}>
                                                                                <Grid item xs={12} sm={12} md={4}>
                                                                                    <Box className="topest_field" >
                                                                                        <label className="label_field">First Name<span style={{ color: 'red' }}>*</span></label>
                                                                                        <input type='text' placeholder="Enter your name" name="fname" />
                                                                                    </Box>
                                                                                </Grid>
                                                                                <Grid item xs={12} sm={12} md={4} py={1}>
                                                                                    <Box className="topest_field">
                                                                                        <label className="label_field">Last Name<span style={{ color: 'red' }}>*</span></label>
                                                                                        <input type='text' placeholder="Enter your last name" name="lname" />
                                                                                    </Box>
                                                                                </Grid>
                                                                            </Grid>
                                                                            <Grid container spacing={3} my={1}>
                                                                                <Grid item xs={12} sm={12} md={2}>
                                                                                    <Box className="topest_field" >
                                                                                        <label className="label_field">Gender<span style={{ color: 'red' }}>*</span></label>
                                                                                        {/* <input type='text' placeholder="Enter your Gender" name="gender" /> */}
                                                                                        <select className="select_class">
                                                                                            <option>Sedlect</option>
                                                                                            <option>Female</option>
                                                                                            <option>Male</option>
                                                                                            <option>Other</option>
                                                                                        </select>
                                                                                    </Box>
                                                                                </Grid>
                                                                                <Grid item xs={12} sm={12} md={3} py={1}>
                                                                                    <Box className="topest_field">
                                                                                        <label className="label_field">Mobile Number<span style={{ color: 'red' }}>*</span></label>
                                                                                        <input type='number' placeholder="Mobile Number" name="mobile_number" />
                                                                                    </Box>
                                                                                </Grid>
                                                                                <Grid item xs={12} sm={12} md={3} py={1}>
                                                                                    <Box className="topest_field">
                                                                                        <label className="label_field">Date of Birth<span style={{ color: 'red' }}>*</span></label>
                                                                                        <input type='date' placeholder=" Date of Birth" name="date_of_birth" />
                                                                                    </Box>
                                                                                </Grid>
                                                                            </Grid>
                                                                            <Grid container spacing={3} my={1}>
                                                                                <Grid item xs={12} sm={12} md={3}>
                                                                                    <Box className="topest_field" >
                                                                                        <label className="label_field">Email<span style={{ color: 'red' }}>*</span></label>
                                                                                        <input type='email' placeholder="Enter your Email" name="email" />
                                                                                    </Box>
                                                                                </Grid>
                                                                                <Grid item xs={12} sm={12} md={7} py={1}>
                                                                                    <Box className="topest_field">
                                                                                        <label className="label_field">Address<span style={{ color: 'red' }}>*</span></label>
                                                                                        <input type='text' placeholder="Enter your Address " name="address" />
                                                                                    </Box>
                                                                                </Grid>

                                                                            </Grid>
                                                                            <Grid container spacing={3} my={1}>
                                                                                <Grid item xs={12} sm={12} md={2}>
                                                                                    <Box className="topest_field" >
                                                                                        <label className="label_field">City<span style={{ color: 'red' }}>*</span></label>
                                                                                        <input type='text' placeholder=" City" name="City" />
                                                                                    </Box>
                                                                                </Grid>
                                                                                <Grid item xs={12} sm={12} md={3} py={1}>
                                                                                    <Box className="topest_field">
                                                                                        <label className="label_field">Country<span style={{ color: 'red' }}>*</span></label>
                                                                                        {/* <input type='text' placeholder="Country" name="country" /> */}
                                                                                        <select className="select_class">
                                                                                            <option>Select</option>
                                                                                            <option>India</option>
                                                                                            <option>Canada</option>
                                                                                            <option>USA</option>
                                                                                        </select>
                                                                                    </Box>
                                                                                </Grid>

                                                                            </Grid>

                                                                            <Box className="second_division" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                                {serviceList.length - 1 === index && serviceList.length < 9 && (
                                                                                    <Button
                                                                                        variant="contained"
                                                                                        type="button"
                                                                                        onClick={handleServiceAdd}
                                                                                    >
                                                                                        <span>+ Add a Service</span>
                                                                                    </Button>
                                                                                )}
                                                                                {serviceList.length !== 1 && (
                                                                                    <Button
                                                                                        variant="contained"
                                                                                        color='warning'
                                                                                        type="button"
                                                                                        onClick={() => handleServiceRemove(index)}
                                                                                    >
                                                                                        <span>- Remove</span>
                                                                                    </Button>
                                                                                )}
                                                                            </Box>
                                                                        </Box>

                                                                    </div>
                                                                ))}

                                                            </Box>





                                                        </Box>
                                                        <Box style={{ marginTop: '10px' }} px={2}>
                                                            <Typography className='list_item' style={{ color: 'black', marginTop: '12px' }}>Booking Details will be sent to</Typography>
                                                            <Box style={{ display: 'flex', marginTop: '15px', justifyContent: 'left' }}>
                                                                <div style={{ display: 'flex', }}>
                                                                    <img src={email} />
                                                                    <Box mx={2}>
                                                                        <input type='email' placeholder='Add Email Id' name="email" mx={2} style={{ height: '30px', width: '100%', border: 'none', boxShadow: '0px 3px 6px #00000029', borderRadius: '5px' }} />
                                                                    </Box>
                                                                </div>
                                                                <div style={{ display: 'flex', marginLeft: '250px' }}>
                                                                    <img src={chat} />
                                                                    <Box mx={2}>
                                                                        <input type='email' placeholder='Add Mobile Number' name='mobile_number' mx={2} style={{ height: '30px', width: '100%', border: 'none', boxShadow: '0px 3px 6px #00000029', borderRadius: '5px' }} />
                                                                    </Box>
                                                                </div>
                                                            </Box>
                                                            <Box style={{ marginTop: '10px', display: 'flex' }}>
                                                                <Checkbox {...label} />
                                                                <Typography className='list_item' display='flex' alignItems="center">I have a GST number</Typography>
                                                            </Box>
                                                            <Box style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                                                                <Button type='submit' variant='contained' sx={{ borderRadius: '20px', color: 'white', backgroundColor: '#006FFF', fontSize: '18px' }}>Continue</Button>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </form>
                                            </Box>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion sx={{ borderRadius: '20px', marginBottom: '20px', boxShadow: '2px 2px 8px gray', backgroundColor: 'white' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                            <Box>
                                                <Typography className='para_head'>Seats & Meal</Typography>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div className='container seat_section'>
                                                <Typography className='seat_Top_heading'>Complete Your Booking</Typography>
                                                <Box className='Inner_seat_section'>
                                                    <Typography className='seat_heading' p={3}>Ticket Details</Typography>
                                                    <Grid container className='deals'>
                                                        <Grid md={3} className='deal_const'>
                                                            <Typography className='txt_m'>IndiGO</Typography>
                                                            <Typography className='txt_small'>6E 2431, 6E 909</Typography>
                                                            <Typography className='txt_small1'>Economy</Typography>
                                                        </Grid>
                                                        <Grid md={3} className='deal_const'>
                                                            <Typography className='time_up'>DEL 17:25</Typography>
                                                            <Typography sx={{ fontSize: '16px', color: '#707070', marginTop: '10px' }} >Tue, 27 Dec, 2022</Typography>
                                                        </Grid>
                                                        <Grid md={3} className='deal_const' >
                                                            <Typography sx={{ fontSize: '14px', color: '#707070', textAlign: 'center' }}>09h 15m</Typography>
                                                            <Typography textAlign='center' style={{ color: '#39BBCE' }}>.....<ConnectingAirportsIcon />........</Typography>
                                                            <Typography sx={{ textAlign: 'center' }}>Flight Duration</Typography>
                                                        </Grid>
                                                        <Grid md={3} className='deal_const' style={{ textAlign: 'right' }}>
                                                            <Typography className='time_up' style={{ textAlign: 'right' }}>BOM 19:25</Typography>
                                                            <Typography sx={{ fontSize: '16px', color: '#707070', marginTop: '10px' }} >Tue, 27 Dec, 2022</Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid
                                                        spacing={2}
                                                        container
                                                        sx={{
                                                            marginTop: '20px',
                                                            display: "flex",
                                                            alignContent: "start",
                                                            textAlign: "center",
                                                            paddingY: "15px",
                                                        }}
                                                        className="booknowp"
                                                    >
                                                        <Grid md={3} my={10}>
                                                            <div
                                                                py={5}
                                                                style={{
                                                                    boxShadow: "0px 0px 6px gray",
                                                                    paddingTop: "10px",
                                                                    paddingBottom: "10px",
                                                                    borderRadius: "10px",
                                                                    padding: "5px",
                                                                    backgroundColor: "#F5F5F5",
                                                                }}
                                                            >
                                                                <Box
                                                                    display="flex"
                                                                    justifyContent="start"
                                                                    alignItems="center"
                                                                    color="#F5F5F5"
                                                                    px={1}
                                                                    my={2}
                                                                >
                                                                    <Checkbox {...label}
                                                                        icon={<SquareIcon style={{ color: "#fff", fontSize: "17px" }} />}
                                                                        checkedIcon={<SquareIcon style={{ color: "#FF8901", border: "none", fontSize: "17px" }} />} />
                                                                    <Box mx={1}>

                                                                        <Typography
                                                                            fontSize="14px"
                                                                            letter-spacing="0px"
                                                                            color=" #252525"
                                                                        >
                                                                            Free
                                                                        </Typography>
                                                                    </Box>
                                                                </Box>
                                                                <Box
                                                                    display="flex"
                                                                    justifyContent="start"
                                                                    alignItems="center"
                                                                    color="#F5F5F5"
                                                                    px={1}
                                                                    my={2}
                                                                >
                                                                    <Checkbox {...label}
                                                                        icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                        checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                    <Box mx={1}>

                                                                        <Typography
                                                                            fontSize="14px"
                                                                            letter-spacing="0px"
                                                                            color=" #252525"
                                                                        >
                                                                            ₹200 - ₹350
                                                                        </Typography>
                                                                    </Box>
                                                                </Box>
                                                                <Box
                                                                    display="flex"
                                                                    justifyContent="start"
                                                                    alignItems="center"
                                                                    color="#F5F5F5"
                                                                    px={1}
                                                                    my={2}
                                                                >
                                                                    <Checkbox {...label}
                                                                        icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                        checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                    <Box mx={1}>

                                                                        <Typography
                                                                            fontSize="14px"
                                                                            letter-spacing="0px"
                                                                            color=" #252525"
                                                                        >
                                                                            ₹1200 - ₹1350
                                                                        </Typography>
                                                                    </Box>
                                                                </Box>
                                                                <Box
                                                                    display="flex"
                                                                    justifyContent="start"
                                                                    alignItems="center"
                                                                    color="#F5F5F5"
                                                                    px={1}
                                                                    my={2}
                                                                >
                                                                    <Checkbox {...label}
                                                                        icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                        checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                    <Box mx={1}>

                                                                        <Typography
                                                                            fontSize="14px"
                                                                            letter-spacing="0px"
                                                                            color=" #252525"
                                                                        >
                                                                            Exit Row Seats
                                                                        </Typography>
                                                                    </Box>
                                                                </Box>
                                                                <Box
                                                                    display="flex"
                                                                    justifyContent="start"
                                                                    alignItems="center"
                                                                    color="#F5F5F5"
                                                                    px={1}
                                                                    my={2}
                                                                >
                                                                    <Checkbox {...label}
                                                                        icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                        checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                    <Box mx={1}>

                                                                        <Typography
                                                                            fontSize="14px"
                                                                            letter-spacing="0px"
                                                                            color=" #252525"
                                                                        >
                                                                            Non Reclining
                                                                        </Typography>
                                                                    </Box>
                                                                </Box>
                                                                <Box
                                                                    display="flex"
                                                                    justifyContent="start"
                                                                    alignItems="center"
                                                                    color="#F5F5F5"
                                                                    px={1}
                                                                    my={2}
                                                                >
                                                                    <Checkbox {...label}
                                                                        icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                        checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                    <Box mx={1}>

                                                                        <Typography fontSize="14px" color=" #252525">
                                                                            Occupied
                                                                        </Typography>
                                                                    </Box>
                                                                </Box>
                                                            </div>
                                                        </Grid>

                                                        <Grid md={6} >
                                                            <Box overflow="scroll">
                                                                <img src={flight} className="bgimg" />
                                                                <Grid container className="sheetbook" px={7} >
                                                                    <Grid md={6}>
                                                                        <Box display="flex"
                                                                            fontSize="14px"
                                                                            paddingRight="20px"
                                                                            paddingLeft="25px"
                                                                            justifyContent="space-between" >
                                                                            <Box>A</Box>
                                                                            <Box>B</Box>
                                                                            <Box>C</Box>
                                                                        </Box>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>1</Typography>

                                                                            <Box className="cart" >
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart" >
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart" >
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box display="flex" justifyContent="space-around"
                                                                            fontSize="14px"
                                                                            paddingRight="25px"
                                                                            paddingLeft="10px">
                                                                            <Box>D</Box>
                                                                            <Box>E</Box>
                                                                            <Box>F</Box>
                                                                        </Box>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart" >
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart" >
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart" >
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>1</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>2</Typography>
                                                                            <Box className="cart" >
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart" >
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart" >
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>2</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>3</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>3</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>4</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>4</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>5</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>5</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>6</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>6</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>7</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>7</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>8</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>8</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>9</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>9</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>10</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>10</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>11</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>11</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>12</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>12</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>13</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>13</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>14</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>14</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>15</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>15</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>16</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>16</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>17</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>17</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>18</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>18</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>19</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>19</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>20</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>20</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>21</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>21</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>22</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>22</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>23</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>23</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>24</Typography>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid md={6}>
                                                                        <Box
                                                                            display="flex"
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                        >
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Box className="cart">
                                                                                <Checkbox {...label}
                                                                                    icon={<SquareIcon style={{ color: "#fff", boxShadow: "0px 1px 5px grey", fontSize: "17px" }} />}
                                                                                    checkedIcon={<SquareIcon style={{ color: "#FF8901", boxShadow: "0px 1px 5px grey", border: "none", fontSize: "17px" }} />} />
                                                                            </Box>
                                                                            <Typography style={{ fontSize: '14px', marginLeft: '5px' }}>24</Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                </Grid>
                                                            </Box>
                                                        </Grid>

                                                        <Grid md={3} my={10}>
                                                            {/* <div
                                                                py={5}
                                                                style={{
                                                                    boxShadow: "0px 0px 6px gray",
                                                                    paddingTop: "10px",
                                                                    paddingBottom: "10px",
                                                                    borderRadius: "10px",
                                                                    padding: "10px",
                                                                    backgroundColor: "#F5F5F5",
                                                                }}
                                                            >
                                                                <Box mx={5}>

                                                                    <Typography fontSize="14px" color=" #666666">
                                                                        Seat Details
                                                                    </Typography>
                                                                </Box>
                                                                <Box mx={2} mt={1}>

                                                                    <Typography fontSize="14px" color=" #0052D0">
                                                                        BOM-DEL(6E-2172)
                                                                    </Typography>
                                                                </Box>

                                                                <Box mx={2} display="flex"
                                                                    justifyContent="space-between">
                                                                    Total
                                                                    <Box>
                                                                        <Typography fontSize="14px" color=" #FF8900">
                                                                            ₹322
                                                                        </Typography>
                                                                    </Box>
                                                                </Box>
                                                            </div> */}
                                                            <form action='/payment'>
                                                                <Box my={2}>
                                                                    <Button variant="contained"
                                                                        my={1}
                                                                        type="submit">
                                                                        Proceed to Pay
                                                                    </Button>
                                                                </Box>
                                                            </form>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>

                                </Box>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <Box className='leftsection' py={5} >
                                <Typography className='main_he'>Fare Summary</Typography>
                                <Typography className='main_m'>1 Adult</Typography>
                                <Box className='fare_summery' py={1}>
                                    <Typography color='#006FFF' sx={{ fontSize: '12px', font: 'normal normal bold 12px Quicksand', justifyContent: 'space-between', marginX: '20px' }}>Base Fare</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginX: '20px' }} pt={1}>
                                        <Typography fontSize='10px' font='normal normal bold 10px Quicksand'>Adult (1)</Typography>
                                        <Typography fontSize='12px' font='normal normal bold 12px Quicksand' color="#FF8900" fontWeight='bold'>₹23443</Typography>
                                    </Box>
                                </Box>
                                <Box className='fare_summery' py={1}>
                                    <Typography color='#006FFF' sx={{ fontSize: '12px', font: 'normal normal bold 12px Quicksand', justifyContent: 'space-between', marginX: '20px' }}>Base Fare</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginX: '20px' }} pt={1}>
                                        <Typography fontSize='10px' font='normal normal bold 10px Quicksand'>Total fee & surcharges:</Typography>
                                        <Typography fontSize='12px' font='normal normal bold 12px Quicksand' color="#FF8900" fontWeight='bold'>₹243</Typography>
                                    </Box>
                                </Box>
                                <Box className='fare_summery' py={1}>
                                    <Typography color='#006FFF' sx={{ fontSize: '12px', font: 'normal normal bold 12px Quicksand', justifyContent: 'space-between', marginX: '20px' }}>Other Services</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginX: '20px' }} pt={1}>
                                        <Typography fontSize='10px' font='normal normal bold 10px Quicksand'>Charity</Typography>
                                        <Typography fontSize='12px' font='normal normal bold 12px Quicksand' color="#FF8900" fontWeight='bold'>₹10</Typography>
                                    </Box>
                                </Box>
                                <Box className='fare_summery' py={1}>

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginX: '20px' }} pt={1}>
                                        <Typography color='#006FFF' sx={{ fontSize: '12px', font: 'normal normal bold 12px Quicksand', }}>Total Amount</Typography>
                                        <Typography fontSize='12px' font='normal normal bold 12px Quicksand' color="#FF8900" fontWeight='bold'>₹24510</Typography>
                                    </Box>
                                </Box>
                                <Box py={1}>
                                    <Divider />
                                </Box>
                                <Box pb={3}>
                                    <Typography className='main_he'>Cancellation Refund Policy</Typography>
                                    <Typography sx={{ color: '#006FFF', font: 'normal normal bold 12px Quicksand', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>DEL-BOM</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-around', }} pt={1}>
                                        <Typography fontSize='10px' font='normal normal bold 8px Quicksand' color='#707070' fontWeight='bold'>Cancel Between (IST)</Typography>
                                        <Typography fontSize='12px' font='normal normal bold 8px Quicksand' color='#707070' fontWeight='bold'>Cancellation Penalty</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginX: '20px' }} pt={1}>
                                        <Typography color='#006FFF' sx={{ fontSize: '8px', font: 'normal normal bold 8px Quicksand', }}>Now - 14 Jan (11:50)</Typography>
                                        <Typography fontSize='8px' font='normal normal bold 8px Quicksand' color="#FF8900" fontWeight='bold'>₹2345</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginX: '20px' }} pt={1}>
                                        <Typography color='#006FFF' sx={{ fontSize: '8px', font: 'normal normal bold 8px Quicksand', }}>14 Jan (11:50) - 18 Jan (09:50)</Typography>
                                        <Typography fontSize='8px' font='normal normal bold 8px Quicksand' color="#FF8900" fontWeight='bold'>₹3453</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginX: '20px' }} py={1}>
                                        <Typography color='#006FFF' sx={{ fontSize: '8px', font: 'normal normal bold 8px Quicksand', }}>18 Jan (09:50) - 18 Jan (11:50)</Typography>
                                        <Typography fontSize='8px' font='normal normal bold 8px Quicksand' color="#FF8900" fontWeight='bold'>₹4565</Typography>
                                    </Box>
                                </Box>

                            </Box>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
