import React, { Component } from "react";
import Slider from "react-slick";
import inter from "../../../images/img/inter.jpg";
import { Paper, Box, Typography } from "@mui/material";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./internationalpackage.css";

export default class SwipeToSlide extends Component {
    render() {
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
        return (
            <section>

                <div className="container homeform_container">
                    <Box mt={3}>
                        <Paper elevation={3} py={10} sx={{ borderRadius: '15px', }}>
                            <Box pt={2}>
                                <Typography className="Inter_national">International Destinations</Typography>
                                <Typography className="international_para">Now travel the world without any hassle!</Typography>
                            </Box>
                            <Slider {...settings} style={{ margin: '20px' }}>
                                <Box pb={2}>
                                    <div className="card_wrapper" >
                                        <div className="international_image">
                                            <img src={inter} alt="cardimage" style={{ width: "100%", height: '100%', margin: "auto", borderRadius: '15px', padding: '10px', }} />
                                        </div>
                                        <Box my={1}>
                                            <Typography className="destination_name">Bali</Typography>
                                            <Typography className="destination_info">Starting at $243 Per Person</Typography>
                                        </Box>
                                    </div>
                                </Box>
                                
                                <Box pb={2}>
                                    <div className="card_wrapper" >
                                        <div className="international_image">
                                            <img src={inter} alt="cardimage" style={{ width: "100%", height: '100%', margin: "auto", borderRadius: '15px', padding: '10px', }} />
                                        </div>
                                        <Box my={1}>
                                            <Typography className="destination_name">Bali</Typography>
                                            <Typography className="destination_info">Starting at $243 Per Person</Typography>
                                        </Box>
                                    </div>
                                </Box>
                                
                                <Box pb={2}>
                                    <div className="card_wrapper" >
                                        <div className="international_image">
                                            <img src={inter} alt="cardimage" style={{ width: "100%", height: '100%', margin: "auto", borderRadius: '15px', padding: '10px', }} />
                                        </div>
                                        <Box my={1}>
                                            <Typography className="destination_name">Bali</Typography>
                                            <Typography className="destination_info">Starting at $243 Per Person</Typography>
                                        </Box>
                                    </div>
                                </Box>
                                
                                <Box pb={2}>
                                    <div className="card_wrapper" >
                                        <div className="international_image">
                                            <img src={inter} alt="cardimage" style={{ width: "100%", height: '100%', margin: "auto", borderRadius: '15px', padding: '10px', }} />
                                        </div>
                                        <Box my={1}>
                                            <Typography className="destination_name">Bali</Typography>
                                            <Typography className="destination_info">Starting at $243 Per Person</Typography>
                                        </Box>
                                    </div>
                                </Box>
                                
                                <Box pb={2}>
                                    <div className="card_wrapper" >
                                        <div className="international_image">
                                            <img src={inter} alt="cardimage" style={{ width: "100%", height: '100%', margin: "auto", borderRadius: '15px', padding: '10px', }} />
                                        </div>
                                        <Box my={1}>
                                            <Typography className="destination_name">Bali</Typography>
                                            <Typography className="destination_info">Starting at $243 Per Person</Typography>
                                        </Box>
                                    </div>
                                </Box>
                                
                                <Box pb={2}>
                                    <div className="card_wrapper" >
                                        <div className="international_image">
                                            <img src={inter} alt="cardimage" style={{ width: "100%", height: '100%', margin: "auto", borderRadius: '15px', padding: '10px', }} />
                                        </div>
                                        <Box my={1}>
                                            <Typography className="destination_name">Bali</Typography>
                                            <Typography className="destination_info">Starting at $243 Per Person</Typography>
                                        </Box>
                                    </div>
                                </Box>
                                
                                <Box pb={2}>
                                    <div className="card_wrapper" >
                                        <div className="international_image">
                                            <img src={inter} alt="cardimage" style={{ width: "100%", height: '100%', margin: "auto", borderRadius: '15px', padding: '10px', }} />
                                        </div>
                                        <Box my={1}>
                                            <Typography className="destination_name">Bali</Typography>
                                            <Typography className="destination_info">Starting at $243 Per Person</Typography>
                                        </Box>
                                    </div>
                                </Box>
                                
                                <Box pb={2}>
                                    <div className="card_wrapper" >
                                        <div className="international_image">
                                            <img src={inter} alt="cardimage" style={{ width: "100%", height: '100%', margin: "auto", borderRadius: '15px', padding: '10px', }} />
                                        </div>
                                        <Box my={1}>
                                            <Typography className="destination_name">Bali</Typography>
                                            <Typography className="destination_info">Starting at $243 Per Person</Typography>
                                        </Box>
                                    </div>
                                </Box>
                                
                                <Box pb={2}>
                                    <div className="card_wrapper" >
                                        <div className="international_image">
                                            <img src={inter} alt="cardimage" style={{ width: "100%", height: '100%', margin: "auto", borderRadius: '15px', padding: '10px', }} />
                                        </div>
                                        <Box my={1}>
                                            <Typography className="destination_name">Bali</Typography>
                                            <Typography className="destination_info">Starting at $243 Per Person</Typography>
                                        </Box>
                                    </div>
                                </Box>
                                
                                <Box pb={2}>
                                    <div className="card_wrapper" >
                                        <div className="international_image">
                                            <img src={inter} alt="cardimage" style={{ width: "100%", height: '100%', margin: "auto", borderRadius: '15px', padding: '10px', }} />
                                        </div>
                                        <Box my={1}>
                                            <Typography className="destination_name">Bali</Typography>
                                            <Typography className="destination_info">Starting at $243 Per Person</Typography>
                                        </Box>
                                    </div>
                                </Box>
                                
                                <Box pb={2}>
                                    <div className="card_wrapper" >
                                        <div className="international_image">
                                            <img src={inter} alt="cardimage" style={{ width: "100%", height: '100%', margin: "auto", borderRadius: '15px', padding: '10px', }} />
                                        </div>
                                        <Box my={1}>
                                            <Typography className="destination_name">Bali</Typography>
                                            <Typography className="destination_info">Starting at $243 Per Person</Typography>
                                        </Box>
                                    </div>
                                </Box>
                                
                                <Box pb={2}>
                                    <div className="card_wrapper" >
                                        <div className="international_image">
                                            <img src={inter} alt="cardimage" style={{ width: "100%", height: '100%', margin: "auto", borderRadius: '15px', padding: '10px', }} />
                                        </div>
                                        <Box my={1}>
                                            <Typography className="destination_name">Bali</Typography>
                                            <Typography className="destination_info">Starting at $243 Per Person</Typography>
                                        </Box>
                                    </div>
                                </Box>
                                
                                <Box pb={2}>
                                    <div className="card_wrapper" >
                                        <div className="international_image">
                                            <img src={inter} alt="cardimage" style={{ width: "100%", height: '100%', margin: "auto", borderRadius: '15px', padding: '10px', }} />
                                        </div>
                                        <Box my={1}>
                                            <Typography className="destination_name">Bali</Typography>
                                            <Typography className="destination_info">Starting at $243 Per Person</Typography>
                                        </Box>
                                    </div>
                                </Box>
                                
                                <Box pb={2}>
                                    <div className="card_wrapper" >
                                        <div className="international_image">
                                            <img src={inter} alt="cardimage" style={{ width: "100%", height: '100%', margin: "auto", borderRadius: '15px', padding: '10px', }} />
                                        </div>
                                        <Box my={1}>
                                            <Typography className="destination_name">Bali</Typography>
                                            <Typography className="destination_info">Starting at $243 Per Person</Typography>
                                        </Box>
                                    </div>
                                </Box>
                                
                            </Slider>
                        </Paper>
                    </Box>
                </div>

            </section>
        );
    }
}