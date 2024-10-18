import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import backgroundImage from "./background.jpg";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const data = {
  labels: ["USD", "EUR", "JPY", "GBP", "AUD"],
  datasets: [
    {
      label: "Forex Rates",
      data: [1.2, 0.9, 110, 0.75, 1.35],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
    },
  ],
};

function RealTimeFX() {
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
        maxWidth="md"
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
          Historical Data: AI/ML Beta (Under Development)
        </Typography>
        <Line data={data} options={{ responsive: true }} />
      </Container>
    </Box>
  );
}

export default RealTimeFX;
