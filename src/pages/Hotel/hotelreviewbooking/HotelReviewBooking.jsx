import React from 'react';
import Footer from "../../../layouts/Footer";

import HotelReviewLeft from './HotelReviewLeft';
import HotelReviewRight from './HotelReviewRight';
import { Grid } from '@mui/material';
import Blankdiv from '../../home/searchresult/Blankdiv';
import Searchnavbar from '../../home/searchresult/Searchnavbar';

const HotelReviewBooking = () => {
  return (
        <div className="hotel_banner">
      <Searchnavbar />
      <Blankdiv />
      <div className="container ">
        <div className="row">
          
      <Grid container spacing={3} >
         <Grid item xs={12} md={9}>
      <HotelReviewLeft />
      </Grid>
      <Grid item xs={12} md={3} >
      <HotelReviewRight />
      </Grid>
      </Grid>

</div>
</div>

      <Footer />
    </div>
  )
}

export default HotelReviewBooking

