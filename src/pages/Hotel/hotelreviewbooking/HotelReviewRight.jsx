import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const HotelReviewRight = () => {
  return (
    <div>
      <Box
        my={2}
        sx={{
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "10px 30px",
        }}
      >
        <Box display="flex" justifyContent="center">
          <Typography
            style={{ color: "#252525", fontSize: "16px", fontWeight: "bold" }}
          >
            Price Breakup
          </Typography>
        </Box>
        <Box   display="flex" justifyContent="space-between" alignItems="baseline">
          <Typography
            style={{ color: "#252525", fontSize: "12px", fontWeight: "bold",padding:"5px" }}
          >
           1 Room x 5 Nights 
           <Typography
            style={{ color: "#252525", fontSize: "10px", fontWeight: "bold" }}
          >
           Base Price
          </Typography>
          </Typography>
          <Box ml={1}>
            <Typography   style={{ color: "#FF8900", fontSize: "12px", fontWeight: "bold" }}>₹ 1,19,946</Typography>
          </Box>
        </Box>
                <Divider style={{border:"1px solid #666666"}}></Divider>
        <Box   display="flex" justifyContent="space-between" alignItems="baseline">
          <Typography
            style={{ color: "#252525", fontSize: "12px", fontWeight: "bold" ,padding:"5px"}}
          >
            Hotel Tax 
          </Typography>
          <Box ml={1}>
            <Typography   style={{ color: "#FF8900", fontSize: "12px", fontWeight: "bold" }}>₹ 32,260</Typography>
          </Box>
        </Box>
        <Divider style={{border:"1px solid #666666"}}></Divider>
        <Box   display="flex" justifyContent="space-between" alignItems="baseline">
          <Typography
            style={{ color: "#252525", fontSize: "12px", fontWeight: "bold",padding:"5px" }}
          >
            Fee & Surcharges
          </Typography>
          <Box ml={1}  >
            <Typography   style={{ color: "#FF8900", fontSize: "12px", fontWeight: "bold" }}>₹ 452</Typography>
          </Box>
        </Box>
        <Divider style={{border:"1px solid #666666"}}></Divider>
        <Box display="flex" justifyContent="space-between" alignItems="baseline">
          <Typography
            style={{ color: "#252525", fontSize: "14px", fontWeight: "bold",padding:"5px" }}
          >
         Total Amount
          </Typography>
          <Box ml={1}>
            <Typography   style={{ color: "#FF8900", fontSize: "12px", fontWeight: "bold" }}>₹ 32,260</Typography>
          </Box>
        </Box>
        <Divider style={{border:"1px solid #666666"}}></Divider>
      </Box>
    </div>
  );
};

export default HotelReviewRight;
