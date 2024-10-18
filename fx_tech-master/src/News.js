import React from 'react';
import { Container, Typography, Box, Card, CardContent, Button } from '@mui/material';
import backgroundImage from './background.jpg';

const newsItems = [
  { title: 'Forex Market Updates: October 2024', content: 'As we enter October, the forex market experiences volatility due to global economic factors. Analysts predict significant shifts in currency valuations driven by geopolitical tensions and economic data releases.' },
  { title: 'Economic Impact Analysis of Recent Fed Decisions', content: 'Recent decisions by the Federal Reserve regarding interest rates have a profound impact on the forex market. This analysis delves into how these changes influence currency trading strategies.' },
  { title: 'Top 5 Trading Strategies for Q4 2024', content: 'As traders prepare for the final quarter of the year, we highlight five effective trading strategies that can enhance your forex trading outcomes amid fluctuating market conditions.' },
];

const News = () => {
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
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          borderRadius: '8px', 
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)', 
          padding: '20px',
        }}
      >
        <Typography variant="h4" gutterBottom align="center" style={{ color: '#e0e0e0' }}>
          News & Research
        </Typography>
        
        {newsItems.map((news, index) => (
          <Card key={index} sx={{ marginBottom: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
            <CardContent>
              <Typography variant="h6" component="div" style={{ color: '#ffffff' }}>
                {news.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ color: '#bdbdbd', marginBottom: '10px' }}>
                {news.content}
              </Typography>
              <Button variant="contained" color="primary" size="small" style={{ marginTop: '10px' }}>
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
  );
};

export default News;
