import React from 'react';
import "./payment.css";
import Navbar from "../../../layouts/Navbar";
import Footer from '../../../layouts/Footer';
import Blankdiv from '../searchresult/Blankdiv';
import PaymentDetail from './PaymentDetail';
const PaymentOption = () => {
  return (
    <div className='home_payment_banner' >
     <Navbar/>
     <Blankdiv />
      <div className='container'>
      <PaymentDetail/>
      </div>
      <Footer/>
    </div>
  )
}

export default PaymentOption
