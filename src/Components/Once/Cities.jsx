import React from "react";
import Ccities from "./Ccities";
import { Typography, Box, Link } from "@mui/material";
const styles = {
  imgstyle: {
    height: "292px",
    borderRadius: "12px",
    objectFit: "cover",
    width: "100%",
    transition: "0.5s all",
    // backgrounSize: "cover",
  },
};

const Cities = () => {
  var i = 0;
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "auto",
          gap: "20px",
          margin: "0px 45px",
        }}
      >
        {Ccities.map((item) => (
          <>
            <Box
              sx={{
                borderRadius: "12px",
                ":hover": {
                  img: { transform: "scale(1.1)" },
                },
                overflow: "hidden",
                height: "292px",
              }}
            >
              <Link href={item.link} sx={{ textDecoration: "none" }}>
                <li key={i++} style={{ listStyle: "none" }}>
                  <img style={styles.imgstyle} src={item.city} alt="" />
                  <Typography
                    component="span"
                    sx={{
                      position: "relative",
                      top: -55,
                      left: 10,
                      backgroundColor: "white",
                      padding: "15px 10px",
                      textAlign: "center",
                      borderRadius: "10px",
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    {item.name}
                  </Typography>
                </li>
              </Link>
            </Box>
          </>
        ))}
      </Box>
    </>
  );
};

export default Cities;
