import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import backgroundImage from "./background.jpg";

const About = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        color: "#fff",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "8px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          padding: "20px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          style={{ color: "#e0e0e0" }}
        >
          About Us
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <Typography
                variant="h6"
                align="center"
                style={{ color: "#e0e0e0" }}
              >
                Our Mission
              </Typography>
              <Typography
                variant="body2"
                align="center"
                style={{ color: "#bdbdbd" }}
              >
                Our mission is to empower traders by providing advanced tools
                and insights, enabling them to make informed decisions in the
                forex market.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <Typography
                variant="h6"
                align="center"
                style={{ color: "#e0e0e0" }}
              >
                Our Values
              </Typography>
              <Typography
                variant="body2"
                align="center"
                style={{ color: "#bdbdbd" }}
              >
                We value transparency, innovation, and user-centric design,
                ensuring our platform is both powerful and accessible for all
                traders.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <Typography
                variant="h6"
                align="center"
                style={{ color: "#e0e0e0" }}
              >
                Our Team
              </Typography>
              <Typography
                variant="body2"
                align="center"
                style={{ color: "#bdbdbd" }}
              >
                Our team consists of financial experts and technology
                enthusiasts dedicated to providing a superior trading
                experience.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <Typography
                variant="h6"
                align="center"
                style={{ color: "#e0e0e0" }}
              >
                Join Us
              </Typography>
              <Typography
                variant="body2"
                align="center"
                style={{ color: "#bdbdbd" }}
              >
                Be part of a growing community of traders and take advantage of
                our innovative platform to elevate your trading journey.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
