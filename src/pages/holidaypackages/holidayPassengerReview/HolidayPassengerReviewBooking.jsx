import React from 'react';
import Footer from '../../../layouts/Footer';
import Searchnavbar from '../../home/searchresult/Searchnavbar';

import "./holidaypassengerReviewbooking.css";
import Blankdiv from '../../home/searchresult/Blankdiv';
import HolidayPassengerBookingReview from './HolidayPassengerBookingReview';

const HolidayPassengerReviewBooking = () => {
  return (
    <div className='holiday_review_banner'>
    <Searchnavbar/>
    <Blankdiv/>
    <HolidayPassengerBookingReview/>
      <Footer/>
    </div>
  )
}

export default HolidayPassengerReviewBooking;
