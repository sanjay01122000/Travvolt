// slider importing 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {  Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Hotel from "./pages/Hotel/HotelHome";
import HomeStay from "./pages/homestays/HomeStay";
import Holidaypackages from "./pages/holidaypackages/Holidaypackages";
import Searchresult from "./pages/home/searchresult/Searchresult";
import Trains from "./pages/trains/Trains";
import Booknow from "./pages/home/searchresult/booknow/Booknow";
import Taxi from "./pages/taxi/Taxi";
import Bus from "./pages/bus/Bus";
import Forex from "./pages/forex/Forex";
import './App.css';
import PaymentOption from "./pages/home/payment/PaymentOption";
import HotelHomeResult from "./pages/Hotel/hotelsearchresult/HotelSearchResult";
import HotelDetails from "./pages/Hotel/hoteldetails/HotelDetails";
import HotelSearchResult from "./pages/Hotel/hotelsearchresult/HotelSearchResult";
import HotelReviewBooking from "./pages/Hotel/hotelreviewbooking/HotelReviewBooking";
import HolidayPackageSearchResult from "./pages/holidaypackages/holidaypackagesearchresult/HolidayPackageSearchResult";
import HolidaypackageInfo from "./pages/holidaypackages/holidaypackageInfo/HolidaypackageInfo";

import Charterflights from "./pages/charterflights/Charterflights";
import Activities from "./pages/activities/Activities"; 
import CharterFlightForm from "./pages/charterflights/charterflightForm/CharterFlightForm";
import HolidayPassengerDetail from "./pages/holidaypackages/holidaypassengerdetail/HolidayPassengerDetail";
import HolidayPassengerReviewBooking from "./pages/holidaypackages/holidayPassengerReview/HolidayPassengerReviewBooking";
// import BusSearchresult from "./pages/bus/bussearchresult/BusSearchresult";
// import BusReviewBooking from "./pages/bus/bussearchresult/BusReviewBooking";
// import BusBookingConfirmation from "./pages/bus/bussearchresult/BusBookingConfirmation";
import TaxiSearchResult from "./pages/taxi/taxisearchresult/TaxiSearchResult";
import BusSearchresult from "./pages/bus/bussearchresult/BusSearchresult";
import BusReviewBooking from './pages/bus/busreviewbooking/BusReviewBooking';
import BusBookingConfirmation from './pages/bus/busbookingconfirmation/BusBookingConfirmation';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="hotel" element={<Hotel/>}></Route>
        <Route path="homestays" element={<HomeStay />}></Route>
        <Route path="holidaypackages" element={<Holidaypackages />}></Route>
        <Route path="searchresult" element={<Searchresult />}></Route>
        <Route path="Trains" element={<Trains />}></Route>
        <Route path="booknow" element={<Booknow/>}> </Route>
        <Route path="taxi" element={<Taxi />}></Route>
        <Route path="bus" element={<Bus />}></Route>
        <Route path="/forex" element={<Forex/>}/>
        <Route path="/payment" element={<PaymentOption/>}/>
        <Route path="/Hotelsearch" element={<HotelHomeResult/>}/>
        <Route path="/HotelDetails" element={<HotelDetails/>}/>
        <Route path="/HotelSearchResult" element={<HotelSearchResult/>}/>
        <Route path="/HotelReviewBooking" element={<HotelReviewBooking/>}/>
        <Route path="/HolidayPackageSearchResult" element={<HolidayPackageSearchResult/>}/>
        <Route path="/HolidaypackageInfo" element={<HolidaypackageInfo/>}/> <Route path="charterflights" element={<Charterflights />}></Route>
        <Route path="activites" element={<Activities />}></Route>
        <Route path="charterflightForm" element={<CharterFlightForm />}></Route>
        <Route path="holidaypassengerdetail" element={<HolidayPassengerDetail />}></Route>
        <Route path="/HolidayPassengerReviewBooking" element={<HolidayPassengerReviewBooking />}></Route>
        {/* <Route path="/bussearchresult" element={<BusSearchresult />}></Route> */}
        {/* <Route path="/BusReviewBooking" element={<BusReviewBooking />}></Route> */}
        {/* <Route path="/BusBookingConfirmation" element={<BusBookingConfirmation />}></Route> */}
        <Route path="/TaxiSearchResult" element={<TaxiSearchResult />}></Route>
        <Route path="/bussearchresult" element={<BusSearchresult />}></Route>
        <Route path="/BusReviewBooking" element={<BusReviewBooking />}></Route>
        <Route path="/BusBookingConfirmation" element={<BusBookingConfirmation />}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
