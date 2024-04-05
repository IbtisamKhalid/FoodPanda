import { useState } from "react";
import Navbar from "./Components/MTO/Navbar";
import Mainpage from "./Components/Once/Mainpage";
import Cities from "./Components/Once/Cities";
import partner from "./assets/partner-bg.png";
import office from "./assets/office-bg.png";

import BoxStyle from "./Components/Once/BoxStyle";
import {
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@mui/material";

function App() {
  const AddYourRestaurant = {
    boxStyle: {
        height: "360px",
        border: "1px solid transparent",
        borderRadius: "15px",
        width: "600px",
        position: "relative",
        top: "-170px",
        bottom: "20px",
        left: "50px",
        padding: "20px",
        backgroundColor: "white",
        boxShadow: "1px 1px 15px black",
    },
    boxContent: <>Would you like millions of new customers to enjoy your amazing food and groceries? So would we! <br /><br /> It's simple: we list yourmenu andproduct lists online, help you process orders, pick them up,anddeliver them to hungry pandas – in a heartbeat! <br /><br /> Interested? Let's start our partnership today!"</>,
    mainHeading: <>You prepare the food, we handle the rest.</>,
    boxHeading: <>List your restaurant or shop on foodpanda</>,
    img : partner,
  }
  const PartnerWIthUs = {
    boxStyle: {
        height: "220px",
        border: "1px solid transparent",
        borderRadius: "15px",
        width: "600px",
        position: "relative",
        top: "-170px",
        bottom: "20px",
        left: "50px",
        padding: "20px",
        backgroundColor: "white",
        boxShadow: "1px 1px 15px black",
    },
    boxContent: <>Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.</>,
    mainHeading: "",
    boxHeading: <>foodpanda for business</>,
    img : office,
  }
  return (
    <>
      <Navbar />
      <Mainpage />
      <BoxStyle 
      mainHeading ={AddYourRestaurant.mainHeading}
      img = {AddYourRestaurant.img}
      boxStyle= {AddYourRestaurant.boxStyle}
      boxHeading= {AddYourRestaurant.boxHeading}
      boxContent= {AddYourRestaurant.boxContent}  />
      <Cities />
      <BoxStyle 
      mainHeading ={PartnerWIthUs.mainHeading}
      img = {PartnerWIthUs.img}
      boxStyle= {PartnerWIthUs.boxStyle}
      boxHeading= {PartnerWIthUs.boxHeading}
      boxContent= {PartnerWIthUs.boxContent}  />
    </>
  );
}

export default App;
