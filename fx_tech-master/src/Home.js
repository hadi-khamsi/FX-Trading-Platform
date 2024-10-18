import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import backgroundImage from "./background.jpg";

function Home() {
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
        style={{
          paddingTop: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "8px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "600",
            color: "#e0e0e0",
          }}
        >
          Empower Your Forex Trading Journey
        </Typography>
        <Typography
          variant="body1"
          align="center"
          paragraph
          style={{
            fontFamily: "'Open Sans', sans-serif",
            marginBottom: "40px",
            color: "#bdbdbd",
          }}
        >
          Access real-time forex rates, utilize our powerful currency conversion
          tools, and analyze comprehensive historical data to make informed
          trading decisions.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {[
            {
              icon: <AccessTimeIcon fontSize="large" color="primary" />,
              title: "Real-Time FX Rates",
              description:
                "Stay ahead with up-to-the-minute exchange rates. Monitor your favorite currency pairs and receive instant updates on market shifts.",
              link: "/historical",
              buttonText: "View Rates",
              marginBottom: 15,
            },
            {
              icon: <MonetizationOnIcon fontSize="large" color="primary" />,
              title: "Currency Conversion Tool",
              description:
                "Convert currencies efficiently and accurately. Make the best conversion decisions using real-time rates.",
              link: "/converter",
              buttonText: "Try Converter",
              marginBottom: 35,
            },
            {
              icon: <HistoryEduIcon fontSize="large" color="primary" />,
              title: "Historical Data Modeling",
              description:
                "Utilize advanced AI-driven tools to analyze historical market trends and make strategic trading decisions based on data insights.",
              link: "/realtime",
              buttonText: "Explore Data",
              marginBottom: 15,
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  backdropFilter: "blur(10px)",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center">
                    {feature.icon}
                    <Typography
                      variant="h5"
                      component="div"
                      style={{
                        marginLeft: "10px",
                        fontFamily: "'Poppins', sans-serif",
                        color: "#ffffff",
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    style={{
                      color: "#bdbdbd",
                      marginBottom: feature.marginBottom,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box
                    display="flex"
                    justifyContent="center"
                    width="100%"
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      borderRadius: "8px",
                      padding: "8px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <Button
                      size="small"
                      color="primary"
                      component={Link}
                      to={feature.link}
                    >
                      {feature.buttonText}
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box mt={6}>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "600",
              color: "#e0e0e0",
            }}
          >
            Why Choose Our Platform?
          </Typography>
          <Typography
            variant="body1"
            align="center"
            paragraph
            style={{ fontFamily: "'Open Sans', sans-serif", color: "#bdbdbd" }}
          >
            Our platform is designed to provide every trader—whether new or
            experienced—with the tools and insights they need to thrive in the
            fast-paced world of forex trading.
          </Typography>
          <Typography
            variant="body1"
            align="center"
            paragraph
            style={{ fontFamily: "'Open Sans', sans-serif", color: "#bdbdbd" }}
          >
            From real-time data to cutting-edge analytics, we offer everything
            you need to make smarter, more strategic decisions in the forex
            market.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
