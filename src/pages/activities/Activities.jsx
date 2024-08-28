
import Navbar from "../../layouts/Navbar";
import Mainheader from "../../UI/Mainheader";
// import Homeform from "../../components/Homeform";
import OfferSwipeToSlide from "../../components/Offerscard";
import Toursection from "../../components/Toursection";
import SwipeToSlide from "../../components/Card";
import Download from "../../components/Download";
import Footer from "../../layouts/Footer";
import Activitiessearchform from './Activitiessearchform';

// home css 
import "./activities.css";

const Home = () => {
    return (
        <div className="home_panner">
            
            <Mainheader ></Mainheader>
            {/* <Homeform header="Book International and Domestic Flights"></Homeform> */}
            <Activitiessearchform header="Book any kind of activity, tour or daytrip" />
            <OfferSwipeToSlide></OfferSwipeToSlide>
            <Toursection></Toursection>
            <SwipeToSlide></SwipeToSlide>
            <Download></Download>
            <Footer></Footer>

        </div>
    )
}
export default Home;
