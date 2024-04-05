import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import partner from "../../assets/partner-bg.png";
import { WidthWideTwoTone } from "@mui/icons-material";

const AddYourRestaurant = (props) => {
  return (
    <>
      <Box sx={{ paddingTop: "100px" }}>
        <Typography variant="h4" sx={{ padding: "0px 0px 20px 50px" }}>
          {props.mainHeading}
        </Typography>
        <Box>
          <img
            src={props.img}
            alt=""
            style={{ height: "410px", objectFit: "cover", width: "100%" }}
          />
        </Box>
        <Box sx={props.boxStyle}>
          <Typography variant="h5">{props.boxHeading}</Typography>
          <Typography
            variant="subtitle1"
            sx={{ border: "1px solid transparent", padding: "10px 0px" }}
          >
            {props.boxContent}
          </Typography>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#d70f64",
              color: "white",
              border: "none",
              padding: "10px 20px",
              marginTop: "15px",
              ":hover": { 
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "10px 20px",
              marginTop: "15px", },
            }}
            href="www.youtube.com"
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AddYourRestaurant;
