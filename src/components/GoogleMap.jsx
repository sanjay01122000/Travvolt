import React from 'react';
import "./googlemap.css";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Box } from '@mui/material';

const GoogleMap = () => {
    // map

    const mapStyles = {
        width: "100%",
        height: "100%",
    };

    // end
    return (
        <Box className='map_head_style'>
            <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{ lat: 9.761927, lng: 79.95244 }}
            />
        </Box>
    )
}

export default GoogleMap
