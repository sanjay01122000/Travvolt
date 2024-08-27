import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
// hotel tabs

import Box from '@mui/material/Box';
// bootstrap
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"


const Homeform = (props) => {


    return (
        <section>
            <div className="container homeform_container">
                <p className="header_row">
                    <h5>Bus Ticket Booking. <Link style={{textDecoration:'none'}}>Travelling with a group? Hire a bus.</Link></h5>
                </p>
                <div className="row content_row" >
                    <div className="col-12" mx={5} my={5}>
                        <Box sx={{ width: '100%', typography: 'body1' ,marginTop:'40px'}} >
                            <Box py={2} sx={{ backgroundColor: "white", marginX: "80px", borderRadius: "20px", }} >
                                <form action="" >
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form_input" display="flex" justifyContent='center'>
                                                <input type='text' placeholder='Search Activities, Torus or Destination' className='something'></input>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                </form>
                            </Box>
                        </Box>
                    </div>
                    <div className="col-12">
                        <div className="row select_fare">
                            <form action='/Searchresult'>
                                <Box display='flex' justifyContent='center'>
                                    <div class="wrapper">
                                        <text className='col-auto fare_search '  >
                                            <button type='submit' path="" className='search' >  Search</button>
                                        </text>
                                    </div>
                                </Box>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Homeform;