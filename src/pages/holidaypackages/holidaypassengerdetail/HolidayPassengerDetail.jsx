import React from 'react';
import Footer from '../../../layouts/Footer';
import './passengerdetails.css';
import Navbar from '../../../layouts/Navbar';
import Searchnavbar from '../../home/searchresult/Searchnavbar';
import Blackdiv from '../../home/searchresult/Blankdiv';
import HolidayPackageForm from '../HolidayComponents/HolidayPackageForm';
import PassengerDetailForm from './PassengerDetailForm';

const HolidayPassengerDetail = () => {
  return (
    <div className='passenger_detail_banner'>
      <Navbar/>
      <Searchnavbar/>
      <Blackdiv />
      <HolidayPackageForm />
      <PassengerDetailForm/>
      <Footer/>
    </div>
  )
}

export default HolidayPassengerDetail
