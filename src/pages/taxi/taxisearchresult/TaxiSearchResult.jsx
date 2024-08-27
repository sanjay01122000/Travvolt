import React from 'react';
import Footer from '../../../layouts/Footer';
import Blankdiv from '../../home/searchresult/Blankdiv';
import Searchnavbar from '../../home/searchresult/Searchnavbar';
import TaxiInfo from './TaxiInfo';
import "./taxisearchresult.css";
import TaxiSearchTop from './TaxiSearchTop';

const TaxiSearchResult = () => {
    return (
        <div className='taxi_banner'>
            <Searchnavbar />
            <Blankdiv/>
            <TaxiSearchTop />
            <TaxiInfo/>
            <Footer />
        </div>
    )
}

export default TaxiSearchResult
