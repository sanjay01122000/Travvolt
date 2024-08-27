import { Grid, Typography, Box, Divider, Button } from '@mui/material';
import React, { useState } from "react";
import PriceSlider from '../../Hotel/hoteldetails/PriceSlider';
import StarIcon from '@mui/icons-material/Star';
import './holidaypackagesdetail.css';
import building from '../../../images/icons/building.png';
import night from '../../../images/icons/night.png';
import beds from '../../../images/icons/beds.png';
import unitednations from '../../../images/icons/unitednations.png';
import addgroup from '../../../images/icons/addgroup.png';
import review from '../../../images/icons/review.png';
import PackageSlider from './PackageSlider';

const HolidayPackagesDetail = () => {
    const [selectedOption, setSelectedOption] = useState("");
    console.log(selectedOption);
    const [ratingOption, setRatingOption] = useState("");
    console.log(ratingOption);
    const [bookingOption, setBookingOption] = useState("");
    console.log(bookingOption);


    return (
        <div className='container'>
            <Grid container spacing={3}>
                <Grid item sm={12} xs={12} lg={3}>
                    <Box className="leftshadow" py={3}>
                        <Typography className="selectfilter">Your Holiday Package</Typography>
                        <Divider sx={{ backgroundColor: 'gray', marginY: '8px' }} />
                        <Box>
                            <Box sx={{ display: 'flex', marginY: '15px', marginX: '20px' }}>
                                <img src={building} />
                                <Typography className='holiday_text' ml={1}>New Delhi To Dubai</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', marginY: '15px', marginX: '20px' }}>
                                <img src={night} style={{ width: '8%', height: '20%' }} />
                                <Typography className='holiday_text' ml={1}>3 Night(s)(05 Feb-08 Feb, 2023)</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', marginY: '15px', marginX: '20px' }}>
                                <img src={beds} />
                                <Typography className='holiday_text' ml={1}>1 Room(s)</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', marginY: '15px', marginX: '20px' }}>
                                <img src={unitednations} />
                                <Typography className='holiday_text' ml={1}>Indian</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', marginY: '15px', marginX: '20px' }}>
                                <img src={addgroup} />
                                <Typography className='holiday_text' ml={1}>2 Adult(s)</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', marginY: '15px', marginX: '20px' }}>
                                <img src={review} />
                                <Typography className='holiday_text' ml={1}>5 Star or more</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginY: '15px', marginX: '20px' }}>
                                <Button variant='contained' className='btn_mod'>Modify Search</Button>
                            </Box>
                        </Box>
                        <Divider sx={{ backgroundColor: 'gray', marginY: '8px' }} />
                        <Box>
                            <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <Typography className="starrating">Flights</Typography>
                                <Box>
                                    <Typography className="clearfilter">Clear Filter</Typography>
                                </Box>
                            </Box>
                            <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }} my={1}>
                                <Button className='button_package' variant='contained'><Typography className='btn_package'>With Flight</Typography></Button>
                                <Button className='button_package' variant='contained'><Typography className='btn_package'>Without Flight</Typography></Button>
                            </Box>
                        </Box>

                        <Divider sx={{ backgroundColor: 'gray', marginY: '8px' }} />
                        <Typography className="suggested">Hot Deals</Typography>
                        <Box>
                            <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                <Typography className="content">
                                    <input className="radio" type="radio" value="option1"
                                        checked={selectedOption === "option1"}
                                        onClick={(e) => setSelectedOption("option1")} />
                                </Typography>
                                <Typography className="value"> Hot Deals</Typography>
                                <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                            </Box>

                        </Box>
                        <Divider sx={{ backgroundColor: 'gray', marginY: '8px' }} />
                        <Box>
                            <Box>
                                <Typography className="price">Price (Per Night)</Typography>

                                <PriceSlider />
                            </Box>
                        </Box>
                        <Divider sx={{ backgroundColor: 'gray', marginY: '8px' }} />
                        {/* -------------------------------------------------------------------- */}
                        <Box>
                            <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <Typography className="starrating"> Star Rating</Typography>
                                <Box>
                                    <Typography className="clearfilter">Clear Filter</Typography>
                                </Box>
                            </Box>
                            <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                <Typography className="content">
                                    <input className="radio" type="radio" value="rating1"
                                        checked={ratingOption === "rating1"}
                                        onClick={(e) => setRatingOption("rating1")} />
                                </Typography>
                                <StarIcon style={{ color: "yellow" }} />
                                <StarIcon style={{ color: "yellow" }} />
                                <StarIcon style={{ color: "yellow" }} />
                                <StarIcon style={{ color: "yellow" }} />
                                <StarIcon style={{ color: "yellow" }} />
                                <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                            </Box>
                            <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                <Typography className="content">
                                    <input className="radio" type="radio" value="rating2"
                                        checked={ratingOption === "rating2"}
                                        onClick={(e) => setRatingOption("rating2")} />
                                </Typography>
                                <StarIcon style={{ color: "yellow" }} />
                                <StarIcon style={{ color: "yellow" }} />
                                <StarIcon style={{ color: "yellow" }} />
                                <StarIcon style={{ color: "yellow" }} />
                                <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                            </Box>
                            <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                <Typography className="content">
                                    <input className="radio" type="radio" value="rating3"
                                        checked={ratingOption === "rating3"}
                                        onClick={(e) => setRatingOption("rating3")} />
                                </Typography>
                                <StarIcon style={{ color: "yellow" }} />
                                <StarIcon style={{ color: "yellow" }} />
                                <StarIcon style={{ color: "yellow" }} />
                                <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                            </Box>
                            <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                <Typography className="content">
                                    <input className="radio" type="radio" value="rating4"
                                        checked={ratingOption === "rating4"}
                                        onClick={(e) => setRatingOption("rating4")} />
                                </Typography>
                                <StarIcon style={{ color: "yellow" }} />
                                <StarIcon style={{ color: "yellow" }} />
                                <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                            </Box>
                            <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                <Typography className="content">
                                    <input className="radio" type="radio" value="rating5"
                                        checked={ratingOption === "rating5"}
                                        onClick={(e) => setRatingOption("rating5")} />
                                </Typography>
                                <StarIcon style={{ color: "yellow" }} />
                                <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                            </Box>
                            <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                <Typography className="content">
                                    <input className="radio" type="radio" value="rating6"
                                        checked={ratingOption === "rating6"}
                                        onClick={(e) => setRatingOption("rating6")} />
                                </Typography>
                                <Typography className="value">Unrated Hotel</Typography>
                                <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                            </Box>
                        </Box>
                        <Divider sx={{ backgroundColor: 'gray', marginY: '8px' }} />
                        <Box>
                            <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <Typography className="starrating"> Theme</Typography>
                                <Box>
                                    <Typography className="clearfilter">Clear Filter</Typography>
                                </Box>
                            </Box>
                            <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                <Typography className="content">
                                    <input className="radio" type="radio" value="booking1"
                                        checked={bookingOption === "booking1"}
                                        onClick={(e) => setBookingOption("booking1")} />
                                </Typography>
                                <Typography className="value">Bus Packages</Typography>
                                <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                            </Box>
                            <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                <Typography className="content">
                                    <input className="radio" type="radio" value="booking2"
                                        checked={bookingOption === "booking2"}
                                        onClick={(e) => setBookingOption("booking2")} />
                                </Typography>
                                <Typography className="value">Honeymoon</Typography>
                                <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                            </Box>
                            <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                <Typography className="content">
                                    <input className="radio" type="radio" value="booking3"
                                        checked={bookingOption === "booking3"}
                                        onClick={(e) => setBookingOption("booking3")} />
                                </Typography>
                                <Typography className="value">Luxury</Typography>
                                <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                            </Box>
                            <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                <Typography className="content">
                                    <input className="radio" type="radio" value="booking4"
                                        checked={bookingOption === "booking4"}
                                        onClick={(e) => setBookingOption("booking4")} />
                                </Typography>
                                <Typography className="value">Adventures</Typography>
                                <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                            </Box>
                            <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                <Typography className="content">
                                    <input className="radio" type="radio" value="booking4"
                                        checked={bookingOption === "booking4"}
                                        onClick={(e) => setBookingOption("booking4")} />
                                </Typography>
                                <Typography className="value">Beach</Typography>
                                <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                            </Box>
                            <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                <Typography className="content">
                                    <input className="radio" type="radio" value="booking4"
                                        checked={bookingOption === "booking4"}
                                        onClick={(e) => setBookingOption("booking4")} />
                                </Typography>
                                <Typography className="value">Mountain</Typography>
                                <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                            </Box>


                        </Box>
                        <Divider sx={{ backgroundColor: 'gray', marginY: '8px' }} />
                        <Box>
                            <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <Typography className="starrating"> Holiday Type</Typography>
                                <Box>
                                    <Typography className="clearfilter">Clear Filter</Typography>
                                </Box>
                            </Box>
                            <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                <Typography className="content">
                                    <input className="radio" type="radio" value="booking1"
                                        checked={bookingOption === "booking1"}
                                        onClick={(e) => setBookingOption("booking1")} />
                                </Typography>
                                <Typography className="value">Short Break</Typography>
                                <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                            </Box>
                            <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                <Typography className="content">
                                    <input className="radio" type="radio" value="booking2"
                                        checked={bookingOption === "booking2"}
                                        onClick={(e) => setBookingOption("booking2")} />
                                </Typography>
                                <Typography className="value">Most Popular</Typography>
                                <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                            </Box>
                            <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                <Typography className="content">
                                    <input className="radio" type="radio" value="booking3"
                                        checked={bookingOption === "booking3"}
                                        onClick={(e) => setBookingOption("booking3")} />
                                </Typography>
                                <Typography className="value">Experiential Stays</Typography>
                                <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                            </Box>
                            <Box style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                                <Typography className="content">
                                    <input className="radio" type="radio" value="booking4"
                                        checked={bookingOption === "booking4"}
                                        onClick={(e) => setBookingOption("booking4")} />
                                </Typography>
                                <Typography className="value">Offbeat</Typography>
                                <Typography style={{ flexGrow: 1 }} className="value">(12)</Typography>
                            </Box>


                        </Box>
                    </Box>
                </Grid>
                <Grid item sm={12} xs={12} lg={9}>
                    <Box className='best_seller_container'>
                        <Box marginLeft={2} marginTop={2}>
                            <Typography className='best_seller'>Our Bestseller Lineup for Goa! </Typography>
                            <Typography className='best_seller_para'>Enjoy on the fantastic beaches of Goa with our handpicked bestsellers.</Typography>
                        </Box>
                        <PackageSlider />
                        <Box marginLeft={2} marginTop={6}>
                            <Typography className='best_seller'>For the Lovebirds!</Typography>
                            <Typography className='best_seller_para'>Let love bloom on these romantic getaways specially curated for you and your partner!</Typography>
                        </Box>
                        <PackageSlider />
                        <Box marginLeft={2} marginTop={6}>
                            <Typography className='best_seller'>All-Inclusive Goa Packages</Typography>
                            <Typography className='best_seller_para'>Choose from our hassle-free holiday packages inclusive of flights, hotels and transfers.</Typography>
                        </Box>
                        <PackageSlider />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default HolidayPackagesDetail
