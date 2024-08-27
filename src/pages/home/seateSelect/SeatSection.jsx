import { Typography,Box } from '@mui/material';
import React from 'react';
import './seatsection.css';

const SeatSection = () => {
  return (
    <div className='container seat_section'>
    <Typography className='seat_Top_heading'>Complete Your Booking</Typography>
      <Box className='Inner_seat_section'>
        <Typography className='seat_heading'>Ticket Details</Typography>
      </Box>
    </div>
  )
}

export default SeatSection
