import React from "react";
import panda from "../../assets/panda.png";
import { Box, Typography, TextField, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./MP.css";

const mainpage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          backgroundColor: "rgba(128, 128, 128, 0.208)",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            m: "0 0 0 60px",
            width: "85%",
          }}
        >
          <Typography
            variant="h3"
            sx={{ paddingTop: "190px", textAlign: "left", fontSize: "2.5rem" }}
          >
            It's the food and groceries you love, delivered
          </Typography>
          <Box
            sx={{
              padding: "10px 15px ",
              border: "1px solid black",
              borderRadius: "18px",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              marginTop:"30px",
              backgroundColor:"white"
            }}
          >
            <Box
              sx={{
                border: "0.5px solid black",
                padding: "3px 3px 3px 3px",
                marginRight: "5px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <TextField
                id=""
                label="Enter your full address"
                variant="outlined"
                sx={{ width: "460px", paddingBottom: "0px", paddingTop: "0px" }}
              />

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <LocationOnIcon sx={{ color: "#d70f64" }} />
                <Typography sx={{ paddingTop: "2px" }} color={"#d70f64"}>
                  Locate Me
                </Typography>
              </Box>
            </Box>
            <Button
              variant="standard"
              sx={{ backgroundColor: "#d70f64", color: "white" }}
            >
              Find Food
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            overflowX: "hidden",
          }}
        >
          <img src={panda} alt="" height={""} style={{ height: "600px" }} />
        </Box>
      </Box>
    </>
  );
};

export default mainpage;
