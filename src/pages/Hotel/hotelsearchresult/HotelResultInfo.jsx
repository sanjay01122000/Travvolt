import { Typography, Box, Grid, Divider, Button, Link } from '@mui/material';
import React from 'react';
import "./hotelresultinfo.css";
import travellers from "../../../images/img/travellers.jpg";
import travellers2 from "../../../images/img/travellers2.jpg";
import travellers3 from "../../../images/img/travellers3.jpg";
import PeopleIcon from '@mui/icons-material/People';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RoomInfo from './RoomInfo';
import jacuzzi from "../../../images/card/jacuzzi.png"
import jacuzzy from "../../../images/img/jacuzzy.jpg"
import spa from "../../../images/img/spa.jpg"
import launge from "../../../images/img/launge.jpg"
import nightsview from "../../../images/img/nightsview.jpg"
import relax from "../../../images/card/relax.png";
import StarRateIcon from '@mui/icons-material/StarRate';
import TestimonialSlider from "./TestimonialSlider";
import Offerscard from "../../../components/Offerscard";
// bootstrap
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Star, StarBorder } from '@mui/icons-material';
// import travellers from "../../../images/img/travellers.jpg";
// import GoogleMap from '../../../components/GoogleMap';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`
    };
}
const HotelResultInfo = () => {

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className='container bg-light h_detail my-3 p-3'>
            <div className='row'>
                <div className='col-12'>
                    <Box>
                        <Typography className='hotel_info_head'>Dusit Thani Abu Dhabi </Typography>
                        <Typography className='hotel_info_para'>Al Muroor Road, 4th street, PO Box 52799, 52799 Abu Dhabi, United Arab Emirates</Typography>
                    </Box>
                    <Box>
                        <Grid container spacing={3}>
                            <Grid item sm={12} lg={8} xs={12}>
                                <Grid container>
                                    <Grid item sm={12} lg={8} xs={12}>
                                        <Box>
                                            <img src={travellers} style={{ borderRadius: '10px', width: '100%', }} className='style_img' />
                                        </Box>
                                    </Grid>
                                    <Grid item sm={12} lg={4} xs={12}>
                                        <Box ml={2}>
                                            <img src={travellers2} style={{ borderRadius: '10px', width: '100%', height: '100%', }} className='style_img my-2' />
                                            <img src={travellers3} style={{ borderRadius: '10px', width: '100%', height: '50%', }} className='style_img my-2' />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={12} lg={4} xs={12}>
                                <form action='/HotelReviewBooking'>
                                    <Box className='budget_room' p={2}>

                                        <Typography className='budget_txt'>Budget Room</Typography>
                                        <Box className='budget_flex' mt={2}>
                                            <Box display='flex' alignItems='center'>
                                                <PeopleIcon style={{ width: '20%' }} />
                                                <Typography className='budget_ad'>For 2 Adults</Typography>
                                            </Box>
                                            <Box>
                                                <Typography className='budget_price'>Per Night $5000</Typography>
                                            </Box>
                                        </Box>
                                        <Box className='budget_flex' my={1}>
                                            <Box display='flex' alignItems='center'>
                                                <DisabledByDefaultIcon style={{ width: '15%', color: '#FF0000' }} />
                                                <Typography className='budget_ad'>Non-Refundable</Typography>
                                            </Box>
                                            <Box>
                                                <Typography className='budget_pricing'>$4354</Typography>
                                            </Box>
                                        </Box>
                                        <Box className='budget_flex' my={1}>
                                            <Box display='flex' >
                                                <CheckBoxIcon style={{ width: '10%', color: 'greenyellow' }} />
                                                <Typography className='budget_ad'>Room Only | Non- Refundable</Typography>
                                            </Box>
                                            <Box>
                                                <Typography className='budget_price'>+$32 taxes & fees </Typography>
                                                <Typography className='budget_price_saving'>Saving $1354</Typography>
                                            </Box>
                                        </Box>
                                        <Divider py={1} style={{ backgroundColor: 'gray', padding: '1px' }} />
                                        <Box my={1} textAlign='center'>
                                            <Button variant='contained' className='option_btnn' type='submit'>View All Room Options</Button>
                                        </Box>
                                    </Box>
                                </form>
                                <Box my={2}>
                                    <Box>
                                        <iframe
                                            className="google-iframe"
                                            // title={title.toString()}
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.028505479224!2d77.41801431500616!3d28.50879008246683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9a5b9420fc9%3A0x9ee0df967cd4d452!2sAlphathum%20by%20Bhutani%20Group!5e0!3m2!1sen!2sin!4v1676282173381!5m2!1sen!2sin"

                                            style={{ border: 0 }}
                                            allowFullScreen
                                            aria-hidden="false"
                                            tabIndex="0"
                                            width='100%'
                                            height='200px'
                                            border='5px solid black'
                                            borderRadius='10px'
                                        />

                                    </Box>
                                </Box>
                                <Box display='flex' alignItems='center' my={1}>
                                    <BrunchDiningIcon style={{ width: '8%', color: '#FF8900' }} />
                                    <Typography className='break_avail' ml={1}>Free Breakfast Available</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' my={1}>
                                    <CurrencyExchangeIcon style={{ width: '8%', color: '#FF8900' }} />
                                    <Typography className='break_avail' ml={1}>100% Money Back Guarantee</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box my={2}>
                        <Box sx={{ bgcolor: "background.paper", width: "100%", borderRadius: '10px' }}>
                            <AppBar position="static" style={{ backgroundColor: 'white', color: 'black', borderRadius: '10px' }}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="inherit"
                                    background="white"
                                    variant="fullWidth"
                                    aria-label="full width tabs example"
                                    fontWeight='bold'
                                >
                                    <Tab label="Overview" {...a11yProps(0)} />
                                    <Tab label="Rooms" {...a11yProps(1)} />
                                    <Tab label="Amenities" {...a11yProps(2)} />
                                    <Tab label="Location" {...a11yProps(2)} />
                                    <Tab label="User Reviews" {...a11yProps(2)} />
                                    <Tab label="Property Rules" {...a11yProps(2)} />
                                    <Tab label="Similar Properties" {...a11yProps(2)} />
                                </Tabs>
                            </AppBar>
                            <SwipeableViews
                                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                                index={value}
                                onChangeIndex={handleChangeIndex}
                            >
                                <TabPanel value={value} index={0} dir={theme.direction}>
                                    <Box>
                                        <Typography className='over_view'>Overview</Typography>
                                        <Typography className='over_view_para' mt={1}>Located on Sheikh Zayed Road, the Dusit Thani Dubai offers an amazing view of Burj Khalifa and Dubai skyline, and quick access to major attractions such as Dubai Aquarium.</Typography>
                                        <Box my={1}>
                                            <ul className='list_col'>
                                                <li>The hotel has temperature-controlled rooftop pool, spa, fitness centre and sauna rooms.</li>
                                                <li>he Dusit Thani Dubai has Hindi-speaking staff to make you feel at home. </li>
                                                <li>Dusit Thani Dubai dining venues include an Asian hawker centre with Indian street food.</li>
                                                <li>For kids, it has special meals (buffet too), play area, games and babysitting service.</li>
                                            </ul>
                                        </Box>
                                    </Box>
                                </TabPanel>
                                <TabPanel value={value} index={1} dir={theme.direction}>
                                    <Box>
                                        <FormControl>
                                            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                                <FormControlLabel value="free_cancellation" control={<Radio />} label="Free Cancellation" className='radio_fnt' />
                                                <FormControlLabel value="vreakfast_included" control={<Radio />} label="Breakfast Included" className='radio_fnt' />
                                                <FormControlLabel value="pay_at_hotel" control={<Radio />} label="Pay at Hotel" className='radio_fnt' />
                                            </RadioGroup>
                                        </FormControl>
                                    </Box>
                                    <Box my={2}>
                                        <RoomInfo />
                                    </Box>
                                    <Box my={2}>
                                        <RoomInfo />
                                    </Box>
                                    <Box my={2}>
                                        <RoomInfo />
                                    </Box>
                                </TabPanel>
                                <TabPanel value={value} index={2} dir={theme.direction}>
                                    <Box>
                                        <Typography className='amentities'>Amenities at Dusit Thani Abu Dhabi</Typography>
                                        <Box>
                                            <Grid container spacing={3} my={1}>
                                                <Grid item xs={4} sm={4} lg={2}>
                                                    <Box display='flex' alignItems='center'>
                                                        <Box>
                                                            <img src={jacuzzi} />
                                                        </Box>
                                                        <Box ml={1}>
                                                            <Typography className='jacuzzi'>Jacuzzi</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box display='flex' alignItems='center' mt={4}>
                                                        <Box>
                                                            <img src={relax} />
                                                        </Box>
                                                        <Box ml={1}>
                                                            <Typography className='jacuzzi'>Spa</Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={4} sm={4} lg={2}>
                                                    <Box>
                                                        <Box mb={2}>
                                                            <Typography className='tbl_head'>Basic Facilities </Typography>
                                                        </Box>
                                                        <Box mb={2}>
                                                            <Typography className='tbl_content'> - Free Parking </Typography>
                                                            <Typography className='tbl_content'> - Free Wi-Fi  </Typography>
                                                            <Typography className='tbl_content'> -  Kitchenette  </Typography>
                                                            <Typography className='tbl_content'> - Elevator/Lift  </Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={4} sm={4} lg={2}>
                                                    <Box>
                                                        <Box mb={2}>
                                                            <Typography className='tbl_head'>Transfers</Typography>
                                                        </Box>
                                                        <Box mb={2}>
                                                            <Typography className='tbl_content'>  - Paid Pickup/Drop </Typography>
                                                            <Typography className='tbl_content'> - Paid Shuttle Service  </Typography>
                                                            <Typography className='tbl_content'> - Paid Airport Transfers </Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={4} sm={4} lg={2}>
                                                    <Box>
                                                        <Box mb={2}>
                                                            <Typography className='tbl_head'>Family and kids</Typography>
                                                        </Box>
                                                        <Box mb={2}>
                                                            <Typography className='tbl_content'>  - Childcare Services</Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={4} sm={4} lg={2}>
                                                    <Box>
                                                        <Box mb={2}>
                                                            <Typography className='tbl_head'>Food and Drinks</Typography>
                                                        </Box>
                                                        <Box mb={2}>
                                                            <Typography className='tbl_content'>- Bakery</Typography>
                                                            <Typography className='tbl_content'>- Bar</Typography>
                                                            <Typography className='tbl_content'>- Cafe</Typography>
                                                            <Typography className='tbl_content'>- Restaurant</Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={4} sm={4} lg={2}>
                                                    <Box>
                                                        <Box mb={2}>
                                                            <Typography className='tbl_head'>Payment Services</Typography>
                                                        </Box>
                                                        <Box mb={2}>
                                                            <Typography className='tbl_content'>- ATM</Typography>
                                                            <Typography className='tbl_content'>- Currency Exchange</Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box>
                                            <Grid container spacing={3}>
                                                <Grid item sm={4} lg={4}>
                                                    <Box>
                                                        <img src={jacuzzy} style={{ width: '100%', borderRadius: '10px' }} className='style_img' />
                                                        <Typography className='jac_cuzzi'>Jacuzzi</Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item sm={4} lg={4}>
                                                    <Box>
                                                        <img src={spa} style={{ width: '100%', borderRadius: '10px' }} className='style_img' />
                                                        <Typography className='jac_cuzzi'>Spa</Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item sm={4} lg={4}>
                                                    <Box>
                                                        <img src={launge} style={{ width: '100%', borderRadius: '10px' }} className='style_img' />
                                                        <Typography className='jac_cuzzi'>Common Launge</Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </TabPanel>
                                <TabPanel value={value} index={3} dir={theme.direction}>
                                    <Box>
                                        <Typography className='location_heading'>Location</Typography>
                                        <Typography className='location_para'>The Location of Al Ain Palace Hotel has been rated 4.4 by 210 guests</Typography>
                                    </Box>
                                    <Box>
                                        {/* <GoogleMap/> */}

                                        <Box>
                                            <iframe
                                                className="google-iframe"
                                                // title={title.toString()}
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.028505479224!2d77.41801431500616!3d28.50879008246683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9a5b9420fc9%3A0x9ee0df967cd4d452!2sAlphathum%20by%20Bhutani%20Group!5e0!3m2!1sen!2sin!4v1676282173381!5m2!1sen!2sin"

                                                style={{ border: 0 }}
                                                allowFullScreen
                                                aria-hidden="false"
                                                tabIndex="0"
                                                width='100%'
                                                height='500px'
                                            />

                                        </Box>
                                    </Box>

                                </TabPanel>
                                <TabPanel value={value} index={4} dir={theme.direction}>
                                    <Box>
                                        <Typography className='review_heading'>User Ratings & Reviews </Typography>
                                        <Typography className='useReview_para'>Photo By Guests</Typography>
                                    </Box>
                                    <Box>
                                        <Grid container spacing={2}>
                                            <Grid item sm={12} lg={6}>
                                                <Box my={3}>
                                                    <img src={travellers} className='style_img' style={{ borderRadius: '10px', width: '100%' }} />
                                                </Box>
                                            </Grid>
                                            <Grid item sm={12} lg={6}>
                                                <Box my={3}>
                                                    <Grid container spacing={2}>
                                                        <Grid item lg={8}>
                                                            <Box>
                                                                <Grid container spacing={2}>
                                                                    <Grid item lg={12}>
                                                                        <Box>
                                                                            <img src={travellers3} className='style_img' style={{ borderRadius: '10px', width: '100%' }} />
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid item lg={12}>
                                                                        <Box>
                                                                            <Grid container spacing={2}>
                                                                                <Grid item lg={6}>
                                                                                    <Box>
                                                                                        <img src={travellers2} className='style_img' style={{ borderRadius: '10px', width: '100%' }} />
                                                                                    </Box>
                                                                                </Grid>
                                                                                <Grid item lg={6}>
                                                                                    <Box>
                                                                                        <img src={travellers3} className='style_img' style={{ borderRadius: '10px', width: '100%' }} />
                                                                                    </Box>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </Box>
                                                                    </Grid>
                                                                </Grid>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item lg={4}>
                                                            <Box>
                                                                <img src={nightsview} className='style_img' style={{ borderRadius: '10px', width: '100%', height: '415px' }} />
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box>
                                        <Typography className='user_review'>User Ratings & Reviews </Typography>
                                        <Typography className='useReview_para'> Important information that you need to know before you book!</Typography>
                                    </Box>
                                    <Box>
                                        <Grid container spacing={3}>
                                            <Grid item sm={12} lg={2}>
                                                <Box>
                                                    <Box className='travellers_rating'>
                                                        <Typography className='rating_txt'>Travvolt Rating </Typography>
                                                        <Typography className='rating_head'>4.6/5</Typography>
                                                        <Typography className='rating_txt'>543 Ratings</Typography>
                                                        <Typography className='rating_txt'>233 Reviews</Typography>
                                                    </Box>
                                                    <Link ml={1} sx={{ cursor: 'pointer' }} className='link_review'>View All 435 Reviews</Link>
                                                </Box>
                                            </Grid>
                                            <Grid item sm={12} lg={3}>

                                                <Box mt={3} display='flex' alignItems='center'>
                                                    <Box display='flex' alignItems='center' mr={2}>
                                                        <Typography>5</Typography>
                                                        <StarRateIcon />
                                                    </Box>
                                                    <Box sx={{ width: '100%', height: '20px', background: '#DCDCDC', borderRadius: '20px' }} >
                                                        <Box sx={{ width: '90%', height: '20px', background: '#1EBC12', borderRadius: '20px' }}></Box>
                                                    </Box>
                                                    <Box display='flex' alignItems='center' ml={1}>
                                                        <Typography>234</Typography>
                                                    </Box>
                                                </Box>

                                                <Box display='flex' alignItems='center'>
                                                    <Box display='flex' alignItems='center' mr={2}>
                                                        <Typography>4</Typography>
                                                        <StarRateIcon />
                                                    </Box>
                                                    <Box sx={{ width: '100%', height: '20px', background: '#DCDCDC', borderRadius: '20px' }} >
                                                        <Box sx={{ width: '70%', height: '20px', background: '#12BC6D', borderRadius: '20px' }}></Box>
                                                    </Box>
                                                    <Box display='flex' alignItems='center' ml={1}>
                                                        <Typography>129</Typography>
                                                    </Box>
                                                </Box>

                                                <Box display='flex' alignItems='center'>
                                                    <Box display='flex' alignItems='center' mr={2}>
                                                        <Typography>3</Typography>
                                                        <StarRateIcon />
                                                    </Box>
                                                    <Box sx={{ width: '100%', height: '20px', background: '#DCDCDC', borderRadius: '20px' }} >
                                                        <Box sx={{ width: '60%', height: '20px', background: '#B1BC12', borderRadius: '20px' }}></Box>
                                                    </Box>
                                                    <Box display='flex' alignItems='center' ml={2}>
                                                        <Typography>85</Typography>
                                                    </Box>
                                                </Box>

                                                <Box display='flex' alignItems='center'>
                                                    <Box display='flex' alignItems='center' mr={2}>
                                                        <Typography>2</Typography>
                                                        <StarRateIcon />
                                                    </Box>
                                                    <Box sx={{ width: '100%', height: '20px', background: '#DCDCDC', borderRadius: '20px' }} >
                                                        <Box sx={{ width: '50%', height: '20px', background: '#FFA200', borderRadius: '20px' }}></Box>
                                                    </Box>
                                                    <Box display='flex' alignItems='center' ml={2}>
                                                        <Typography>56</Typography>
                                                    </Box>
                                                </Box>

                                                <Box display='flex' alignItems='center'>
                                                    <Box display='flex' alignItems='center' mr={2}>
                                                        <Typography>1</Typography>
                                                        <StarRateIcon />
                                                    </Box>
                                                    <Box sx={{ width: '100%', height: '20px', background: '#DCDCDC', borderRadius: '20px' }} >
                                                        <Box sx={{ width: '30%', height: '20px', background: '#FF0000', borderRadius: '20px' }}></Box>
                                                    </Box>
                                                    <Box display='flex' alignItems='center' ml={2}>
                                                        <Typography>10</Typography>
                                                    </Box>
                                                </Box>

                                            </Grid>
                                            <Grid item sm={12} lg={7}>
                                                <Box>
                                                    <TestimonialSlider />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value={value} index={5} dir={theme.direction}>
                                    <Box>
                                        <Typography className='location_heading'>Property Rules</Typography>
                                        {/* <Typography className='location_para'>The Location of Al Ain Palace Hotel has been rated 4.4 by 210 guests</Typography> */}
                                    </Box>
                                    <Box my={2}>
                                        <Grid container spacing={3}>
                                            <Grid item sm={12} lg={6}>
                                                <Box>
                                                    <ul>
                                                        <li>Guests with fever are not allowed</li>
                                                        <li>Guests from containment zones are not allowed</li>
                                                        <li>Guests below 18 years of age are not allowed at the property.</li>
                                                        <li>PAN Card, Non-Govt IDs and Office ID are not accepted as ID proof(s)</li>
                                                        <li>Govt. ID and Passport are accepted as ID proof(s)</li>
                                                        <li>Property staff is trained on hygiene guidelines</li>
                                                        <li>Pets are not allowed.</li>
                                                        <li>Outside food is not allowed</li>
                                                        <li>Smoking within the premises is not allowed</li>
                                                        <li>Allows private parties or events</li>
                                                        <li>Quarantine protocols are being followed as per local government authorities</li>
                                                    </ul>
                                                </Box>
                                                <Box mt={9}>
                                                    <Typography className='safety_hygiene'>Safety And Hygiene (8)</Typography>
                                                    <ul>
                                                        <li>Quarantine protocols are being followed as per local government authorities</li>
                                                        <li>Guests from containment zones are not allowed</li>
                                                        <li>Shared resources in common areas are properly sanitized</li>
                                                        <li>Property staff is trained on hygiene guidelines</li>
                                                    </ul>
                                                </Box>
                                                <Box my={2}>
                                                    <Typography className='safety_hygiene'>Bachelors allowed</Typography>
                                                    <ul>
                                                        <li>Unmarried couples allowed</li>
                                                        <li>Bachelors allowed</li>
                                                    </ul>
                                                </Box>
                                            </Grid>
                                            <Grid item sm={12} lg={6}>
                                                <Box>
                                                    <ul>
                                                        <li>Cash deposit: AED 500.00 per stay | A tax is imposed by the city: AED 15.00 per accommodation, per night</li>
                                                        <li>Fee for buffet breakfast: AED 49 per person (approximately) Airport shuttle fee: AED 180 per vehicle (one-way, maximum occupancy 2)|Self
                                                            parking fee: AED 15.00 per day
                                                        </li>
                                                        <li>Extra-person charges may apply and vary depending on property policy Government-issued photo identification and a credit
                                                            card, debit card, or cash deposit may be required at check-in for incidental charges | Special requests are subject to
                                                            availability upon check-in and may incur additional charges; special requests cannot be guaranteed | Safety features at
                                                            this property include a carbon monoxide detector, a fire extinguisher, a smoke detector, a security system, a first aid
                                                            kit, and window guards | Be prepared: check the latest COVID-19 travel requirements and measures in place for this destination before you travel.
                                                        </li>
                                                    </ul>
                                                </Box>
                                                <Box my={4}>
                                                    <ul>
                                                        <li>Guests with fever are not allowed</li>
                                                        <li>Guests without Aarogya Set app are allowed</li>
                                                        <li>Hand sanitizer is provided in guest accommodation and common areas</li>
                                                        <li>Thermal screening is done at entry and exit points</li>
                                                    </ul>
                                                </Box>
                                                <Box mt={8}>
                                                    <ul>
                                                        <li>Guests below 18 years of age are not allowed at the property.</li>
                                                        <li>Suitable for children</li>
                                                    </ul>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value={value} index={6} dir={theme.direction}>
                                    <Offerscard />
                                </TabPanel>
                            </SwipeableViews>
                        </Box>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default HotelResultInfo
