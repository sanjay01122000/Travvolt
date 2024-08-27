import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import upii from "../../../images/upii.png";
import paymentmethod from "../../../images/paymentmethod.png";
import lic from "../../../images/lic.png";
import creditcard from "../../../images/creditcard.png";
import wallet from "../../../images/wallet.png";
import provider from "../../../images/provider.png";
import wallete from "../../../images/wallete.png";
import phonepe from "../../../images/phonepe.png";
import gpay from "../../../images/gpay.png";
import googlep from "../../../images/googlep.png";
import paypall from "../../../images/paypall.png";
import paytm from "../../../images/paytm.png";



import "./payment.css";
import { Divider, Typography, Button } from '@mui/material';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import PersonIcon from '@mui/icons-material/Person';

// import Sonnet from '../../../../components/Sonnet';

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";


const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad"
];


const PaymentDetail = () => {

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };



    return (
        <div>
            <Box >
                <Grid container columns={16} display='flex' gap={2} justifyContent='space-around' alignContent='center'>
                    <Grid item xs={12} sm={1} md={12} p={2} className='payment_container'>
                        <Typography className='payment_topHeading'>Payment Options</Typography>
                        <Grid container display='flex' gap={2} justifyContent='space-around' alignContent='center' py={2} >
                            <Grid xs={12} sm={12} lg={5}>
                                <Box className='pament_method' my={1}>
                                    <img src={upii} />
                                    <Box ml={2}>
                                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#252525' }}>UPI</Typography>
                                        <Typography sx={{ fontSize: '10px', fontWeight: 'bold', color: '#252525' }}>Pay Direct From Your Bank Account</Typography>
                                    </Box>
                                </Box>
                                <Box className='pament_method' my={1}>
                                    <img src={creditcard} />
                                    <Box ml={2}>
                                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#252525' }}>Credit/Direct/ATM Card</Typography>
                                        <Typography sx={{ fontSize: '10px', fontWeight: 'bold', color: '#252525' }}>Visa, Master Card, Amex, Rupay and more</Typography>
                                    </Box>
                                </Box>
                                <Box className='pament_method' my={1}>
                                    <img src={wallet} />
                                    <Box ml={2}>
                                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#252525' }}>Net Banking</Typography>
                                        <Typography sx={{ fontSize: '10px', fontWeight: 'bold', color: '#252525' }}>All Major Banks Available</Typography>
                                    </Box>
                                </Box>
                                <Box className='pament_method' my={1}>
                                    <img src={provider} />
                                    <Box ml={2}>
                                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#252525' }}>Gift Card, Wallets & More</Typography>
                                        <Typography sx={{ fontSize: '10px', fontWeight: 'bold', color: '#252525' }}>Gift cards, Mobikwik, Amazon Pay</Typography>
                                    </Box>
                                </Box>
                                <Box className='pament_method' my={1}>
                                    <img src={wallete} />
                                    <Box ml={2}>
                                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#252525' }}>EMI</Typography>
                                        <Typography sx={{ fontSize: '10px', fontWeight: 'bold', color: '#252525' }}>Credit/Debit Card EMI Available</Typography>
                                    </Box>
                                </Box>
                                <Box className='pament_method' my={1}>
                                    <img src={phonepe} />
                                    <Box ml={2}>
                                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#252525' }}>Phone Pe</Typography>
                                        <Typography sx={{ fontSize: '10px', fontWeight: 'bold', color: '#252525' }}>Pay with PhonePe</Typography>
                                    </Box>
                                </Box>
                                <Box className='pament_method' my={1}>
                                    <img src={gpay} />
                                    <Box ml={2}>
                                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#252525' }}>Google Pay</Typography>
                                        <Typography sx={{ fontSize: '10px', fontWeight: 'bold', color: '#252525' }}>Pay with Google Pay</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={12} lg={6.7}>
                                <Box sx={{ borderRadius: '10px', boxShadow: '0px 3px 6px #00000029' }} p={2}>
                                    <Box display='flex' alignItems='center'>
                                        <img src={paymentmethod} />
                                        <Typography ml={2} className='Phone_h'>Keep Your Phone Handy!</Typography>
                                    </Box>

                                    <Box my={2}>
                                        <lable className='label_area'>Enter Your UPI ID</lable>
                                    </Box>
                                    <Box mb={2} sx={{ borderRadius: '10px', boxShadow: '0px 3px 6px #00000029' }} p={1}>
                                        <input type='text' name='upi_id' placeholder='UPI Id' style={{ width: '100%', height: '100%', border: 'none', borderRadius: '5px' }} />
                                    </Box>
                                    <Box display='flex' justifyContent='center' my={2}>
                                        <Button variant='contained' sx={{ background: '#4260D8', borderRadius: '20px' }}>Verify & Pay</Button>
                                    </Box>
                                    <Box display='flex' alignContent='center' justifyContent='center' py={1} my={2}>
                                        <Box px={1}> <img src={paytm} mx={3} /></Box>
                                        <Box px={1}><img src={paypall} mx={3} /></Box>
                                        <Box px={1}><img src={googlep} mx={3} /></Box>

                                    </Box>
                                    <Box className='lic_card' p={2} >
                                        <Typography className='lic_heading'>Travel Hassle Free Rs. 149</Typography>
                                        <Typography className='lic_para'>
                                            All inclusive cover with benefits including Rs.
                                            50,000 Medical Benefits incl. Covid, Rs. 1,000 for Loss/Damage/Delay of Baggage, Rs.
                                            1,000 for Trip Delay or Cancellation by operator. T&Cs Apply.
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Box sx={{ width: '80px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <img src={lic} style={{ width: '100%', height: '100%', }} />
                                            </Box>
                                            <Typography className='price'>Price $23</Typography>
                                        </Box>

                                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                                            <Box>
                                                <Typography className='payment_fare'>T&C</Typography>
                                            </Box>
                                            <Box>
                                                <Button><Typography className='payment_fare'>+Add</Typography></Button>
                                            </Box>
                                        </Box>

                                    </Box>
                                    <Box display='flex' alignItems='center' justifyContent='center' py={2}>
                                        <Typography className='payment_price'>$2343</Typography>
                                        <Typography className='due'>Due Now</Typography>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyContent='center' py={2}>
                                        <Typography className='due'>By counting to pay, I understand and agree with the privacy policy, the user agreement and terms of service of Travvolt.</Typography>
                                    </Box>
                                </Box>


                                {/* <Box sx={{ width: "100%" }}>
                                    {activeStep === steps.length ? (
                                        <React.Fragment>
                                            <Typography sx={{ mt: 2, mb: 1 }}>
                                                All steps completed - you&apos;re finished
                                            </Typography>
                                            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                                                <Box sx={{ flex: "1 1 auto" }} />
                                                <Button onClick={handleReset}>Reset</Button>
                                            </Box>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            <Box
                                                sx={{ borderRadius: "10px", boxShadow: "0px 3px 6px #00000029" }}
                                                p={2}
                                            >
                                                <Box display="flex" alignItems="center">
                                                    <Typography ml={2} className="Phone_h">
                                                        Keep Your Phone Handy!
                                                    </Typography>
                                                </Box>

                                                <Box my={2}>
                                                    <lable className="label_area">Enter Your UPI ID</lable>
                                                </Box>
                                                <Box
                                                    mb={2}
                                                    sx={{ borderRadius: "10px", boxShadow: "0px 3px 6px #00000029" }}
                                                    p={1}
                                                >
                                                    <input
                                                        type="text"
                                                        name="upi_id"
                                                        placeholder="UPI Id"
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            border: "none",
                                                            borderRadius: "5px"
                                                        }}
                                                    />
                                                </Box>
                                                <Box display="flex" justifyContent="center" my={2}>
                                                    <Button
                                                        variant="contained"
                                                        sx={{ background: "#4260D8", borderRadius: "20px" }}
                                                    >
                                                        Verify & Pay
                                                    </Button>
                                                </Box>
                                            </Box>
                                            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                                                <Button
                                                    color="inherit"
                                                    disabled={activeStep === 0}
                                                    onClick={handleBack}
                                                    sx={{ mr: 1 }}
                                                >
                                                    Back
                                                </Button>
                                                <Box sx={{ flex: "1 1 auto" }} />

                                                <Button onClick={handleNext}>
                                                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                                </Button>
                                            </Box>
                                        </React.Fragment>
                                    )}
                                    <Stepper activeStep={activeStep}>
                                        {steps.map((label, index) => {
                                            const stepProps = {};
                                            const labelProps = {};
                                            if (isStepOptional(index)) {
                                                labelProps.optional = (
                                                    <Typography variant="caption">Optional</Typography>
                                                );
                                            }
                                            if (isStepSkipped(index)) {
                                                stepProps.completed = false;
                                            }
                                            return (
                                                <Step key={label} {...stepProps}>
                                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                                </Step>
                                            );
                                        })}
                                    </Stepper>
                                </Box> */}

                                {/* <Box className="lic_card" p={2}>
                                    <Typography className="lic_heading">
                                        Travel Hassle Free Rs. 149
                                    </Typography>
                                    <Typography className="lic_para">
                                        All inclusive cover with benefits including Rs. 50,000 Medical
                                        Benefits incl. Covid, Rs. 1,000 for Loss/Damage/Delay of
                                        Baggage, Rs. 1,000 for Trip Delay or Cancellation by operator.
                                        T&Cs Apply.
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: "80px",
                                                height: "50px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                        >
                                        </Box>
                                        <Typography className="price">Price $23</Typography>
                                    </Box>

                                    <Box
                                        display="flex"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Box>
                                            <Typography className="payment_fare">T&C</Typography>
                                        </Box>
                                        <Box>
                                            <Button>
                                                <Typography className="payment_fare">+Add</Typography>
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box> */}
                            </Grid>
                        </Grid>




                    </Grid>
                    <Grid item xs={12} sm={1} md={3} p={2} className='payment_container'>
                        <Box sx={{ width: 1 }}>
                            <Typography className='payment_head'>Your Booking</Typography>
                            <Typography className='payment_slogan'>One Way Flight</Typography>
                            <Typography className='payment_detail' mt={1}>Tue, 21 Feb, 2023</Typography>
                            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} my={2}>
                                <Box gridColumn="span 4">
                                    <Typography className='payment_time'>10:00 AM</Typography>
                                    <Typography className='payment_time'>Delhi</Typography>
                                </Box>
                                <Box gridColumn="span 4">
                                    <Typography className='payment_duration'>1h 45m </Typography>
                                    <Typography textAlign='center' style={{ color: '#39BBCE' }}>...<ConnectingAirportsIcon />...</Typography>
                                    <Typography className='payment_duration'>Non Stop</Typography>
                                </Box>
                                <Box gridColumn="span 4">
                                    <Typography className='payment_time_end'>10:00 AM</Typography>
                                    <Typography className='payment_time_end'>Delhi</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <PersonIcon sx={{ color: '#4260D8' }} />
                                <Typography className='payment_tra'>Traveller (s)</Typography>
                            </Box>
                            <Box mx={3}>
                                <Box display='flex' alignContent='center'>
                                    <Typography sx={{ color: '#4260D8', fontSize: "12px", fontWeight: 'bold' }}>1. ChinnaSawami </Typography>
                                    <Typography className='payment_txt'>(M, Adult)</Typography>
                                </Box>
                                <Typography className='payment_txt'>chinnaswami@gmail.com </Typography>
                                <Typography className='payment_txt'> +91 9874563210</Typography>
                            </Box>
                        </Box>
                        <Box py={1}>
                            <Divider style={{ padding: '1px', backgroundColor: 'gray', borderRadius: '50px', }} />
                        </Box>
                        <Box>
                            <Typography className='fair_summary' my={1}>Fare Summary</Typography>
                        </Box>
                        <Box sx={{ width: 1 }}>
                            <Typography className='payment_head'>Your Booking</Typography>
                            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} my={2}>
                                <Box gridColumn="span 6">
                                    <Typography className='payment_fare'>Base Fare</Typography>
                                    <Typography className='p_travellers'>Adult (1)</Typography>
                                </Box>

                                <Box gridColumn="span 6">
                                    <Typography className='payment_time_end'>₹23443</Typography>
                                </Box>
                                <Box gridColumn="span 6">
                                    <Typography className='payment_fare'>Fee & Surcharges</Typography>
                                    <Typography className='p_travellers'>Total fee & surcharges:</Typography>
                                </Box>

                                <Box gridColumn="span 6">
                                    <Typography className='payment_time_end'>₹243</Typography>
                                </Box>
                                <Box gridColumn="span 6">
                                    <Typography className='payment_fare'>Other Services</Typography>
                                    <Typography className='p_travellers'>Charity</Typography>
                                </Box>

                                <Box gridColumn="span 6">
                                    <Typography className='payment_time_end'>₹10</Typography>
                                </Box>
                                <Box gridColumn="span 6" mt={2}>
                                    <Typography className='payment_fare'>Total Amount</Typography>
                                </Box>

                                <Box gridColumn="span 6" mt={2}>
                                    <Typography className='payment_time_end'>₹24510</Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default PaymentDetail
