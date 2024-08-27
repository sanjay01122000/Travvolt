import { Typography } from '@mui/material'
import React from 'react'
import Footer from '../../../layouts/Footer';
import Blankdiv from '../searchresult/Blankdiv';
import Searchnavbar from '../searchresult/Searchnavbar';
import SeatSection from './SeatSection';

const SelectSeat = () => {
    return (
        <div className='home_banner'>
            <Searchnavbar/>
            <Blankdiv />
            <SeatSection/>
            <Footer/>
        </div>
    )
}

export default SelectSeat
