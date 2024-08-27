import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import travellers3 from '../../../images/img/travellers3.jpg';
import HolidayPackageTab from './HolidayPackageTab';

import "./holidaypackageInfofield.css";

const HolidayPackageInfofield = () => {
    return (
        <div className='container' >
            <Box className='package_info_container'>
                <Box>
                    <Typography className='vacation_heading'>Mystical Kerala Vacation - With Houseboat Stay</Typography>
                </Box>
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
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={6}>
                            <Box>
                                <img src={travellers3} style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} lg={5}>
                                        <Box>
                                            <img src={travellers3} style={{ width: '100%', height: '230px', borderRadius: '10px' }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} lg={7}>
                                        <Box>
                                            <img src={travellers3} style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} lg={8}>
                                        <Box>
                                            <img src={travellers3} style={{ width: '100%', height: '155px', borderRadius: '10px' }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} lg={4}>
                                        {/* <Box className='view_more'>
                                            <Box className="bg_image"></Box>
                                            <Box className="bg_text">
                                                <Typography>Blurred Background</Typography>
                                                <Typography>I am John Doe</Typography>
                                                <Typography>And I'm a Photographer</Typography>
                                            </Box>
                                        </Box> */}
                                        <Box>
                                            <img src={travellers3} style={{ width: '100%', height: '155px', borderRadius: '10px' }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <HolidayPackageTab/>
            </Box>
        </div>
    )
}

export default HolidayPackageInfofield
