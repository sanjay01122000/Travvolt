import React from "react";
import "./hoteldetail.css";
import Footer from "../../../layouts/Footer";
import HotelResult from "./HotelResult";
import Blankdiv from "../../home/searchresult/Blankdiv";
import Searchnavbar from "../../home/searchresult/Searchnavbar";
import HotelDetailsInfo from "./HotelDetailsInfo"

const HotelDetails = () => {
  return (
    <div className="hotel_banner">
      <Searchnavbar />
      <Blankdiv />
      <HotelDetailsInfo />
      <HotelResult />
      <Footer />
    </div>
  );
};

export default HotelDetails;
