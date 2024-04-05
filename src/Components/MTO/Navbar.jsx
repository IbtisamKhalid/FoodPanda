import React from "react";
import favicon from "../../assets/favicon.png";
import {
  Typography,
  Button,
  Box,
  Icon,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
const Navbar = (props) => {
  return (
    <>
      <nav>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: "15px 60px",
            boxShadow:"1px 1px 15px Black"
            // bgcolor:"green"
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={favicon}
              alt=""
              style={{
                height: "35px",
                marginRight: "5px",
                // border: " solid #c60d5c",
                borderRadius: "8px",
              }}
            />
            <Typography variant="h5" color={"#c60d5c"}>
              foodpanda
            </Typography>
          </Box>
          <Box>
            {props.icon}
            <Typography>{props.city}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              variant="outlined"
              href="#"
              sx={{
                  marginRight: "20px",
                  backgroundColor: "white",
                  color: "#c21760",
                  border: "1px solid #c60d5c",
                  borderRadius: "8px",
                  height: "30px",
                  width:"90px",
                  '& hover': {color:"red"}
                }}
                >
              Log in
            </Button>
            <Button
              variant="contained"
              href="#"
              sx={{
                  marginRight: "10px",
                  backgroundColor: "#e21b70",
                  border: "1px solid #c60d5c",
                  borderRadius: "8px",
                  height: "30px",
                  width:"95px",
                  '& hover': {color:"red"}
              }}
            >
              Sign up
            </Button>
            <Box sx={{ display: "flex", margin: "0 20px" }}>
              <LanguageIcon />
              <Typography>EN</Typography>
              <ExpandMoreIcon />
            </Box>
            <ShoppingBagIcon sx={{ color: "#c60d5c" }} />
          </Box>
        </Box>
      </nav>
    </>
  );
};

export default Navbar;
