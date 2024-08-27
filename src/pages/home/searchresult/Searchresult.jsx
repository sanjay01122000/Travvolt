

import Footer from "../../../layouts/Footer";
import Searchsection from '../searchresult/Searchsection';
import Popularfilter from "./Popularfilter";
// import Demo from './Demo';
import Blackdiv from '../searchresult/Blankdiv';
import Download from "../../../components/Download";
import Searchnavbar from "./Searchnavbar";


const Searchresult = () => {
    return (
        <div className="Searchresult_panner">
            <Searchnavbar></Searchnavbar>
            <Blackdiv />
            <Searchsection className='main_box' />
            <Popularfilter />
            {/* <Demo></Demo> */}
            <Download />
            <Footer></Footer>

        </div>
    )
}
export default Searchresult;
