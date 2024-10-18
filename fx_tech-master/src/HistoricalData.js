import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Box, Typography, Container } from '@mui/material';
import backgroundImage from './background.jpg';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function HistoricalData() {
  const [dataEUR, setDataEUR] = useState(null);
  const [dataJPY, setDataJPY] = useState(null);
  const [dataGBP, setDataGBP] = useState(null);
  const [liveData, setLiveData] = useState(null);
  const [startDate, setStartDate] = useState('2024-07-18');
  const [endDate, setEndDate] = useState('2024-10-17');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLiveData = async () => {
      try {
        const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=68e3e2fd85f3485683d92fcaa93ef7e6`);
        if (!response.ok) {
          throw new Error('Failed to fetch live data');
        }
        const liveJsonData = await response.json();
        setLiveData(liveJsonData);
      } catch (error) {
        setError(error);
      }
    };

    fetchLiveData();
    const intervalId = setInterval(fetchLiveData, 50000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseEUR = await fetch('/data/USDtoEUR.json');
        const responseJPY = await fetch('/data/USDtoJPY.json');
        const responseGBP = await fetch('/data/USDtoGBP.json');
        
        const jsonEUR = await responseEUR.json();
        const jsonJPY = await responseJPY.json();
        const jsonGBP = await responseGBP.json();

        setDataEUR(jsonEUR);
        setDataJPY(jsonJPY);
        setDataGBP(jsonGBP);
      } catch (error) {
        console.error('Error fetching JSON files:', error);
      }
    };

    fetchData();
  }, []);

  if (!dataEUR || !dataJPY || !dataGBP || !liveData) {
    return <div>Loading...</div>;
  }

  const liveRateEUR = liveData.rates.EUR;
  const liveRateJPY = liveData.rates.JPY;
  const liveRateGBP = liveData.rates.GBP;

  const filterDataByDate = (dates, timeSeries) => {
    return dates.filter(date => date >= startDate && date <= endDate)
      .map(date => ({
        date,
        close: timeSeries[date]['4. close']
      }));
  };

  const timeSeriesEUR = dataEUR['Time Series FX (Weekly)'];
  const datesEUR = Object.keys(timeSeriesEUR).reverse();
  const filteredEUR = filterDataByDate(datesEUR, timeSeriesEUR);

  const timeSeriesJPY = dataJPY['Time Series FX (Weekly)'];
  const datesJPY = Object.keys(timeSeriesJPY).reverse();
  const filteredJPY = filterDataByDate(datesJPY, timeSeriesJPY);

  const timeSeriesGBP = dataGBP['Time Series FX (Weekly)'];
  const datesGBP = Object.keys(timeSeriesGBP).reverse();
  const filteredGBP = filterDataByDate(datesGBP, timeSeriesGBP);

  const chartDataEUR = {
    labels: filteredEUR.map(data => data.date),
    datasets: [
      {
        label: 'Close Price (USD to EUR)',
        data: filteredEUR.map(data => data.close),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const chartDataJPY = {
    labels: filteredJPY.map(data => data.date),
    datasets: [
      {
        label: 'Close Price (USD to JPY)',
        data: filteredJPY.map(data => data.close),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const chartDataGBP = {
    labels: filteredGBP.map(data => data.date),
    datasets: [
      {
        label: 'Close Price (USD to GBP)',
        data: filteredGBP.map(data => data.close),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Close Price',
        },
      },
    },
  };

  return (
    <Box 
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg" style={{ paddingTop: "20px", backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.4)', padding: '20px' }}>
        <Typography variant="h3" gutterBottom align="center" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: '600', color: '#e0e0e0' }}>
          Historical Forex Data
        </Typography>
        
        <Typography variant="h6" align="center" style={{ marginBottom: '20px' }}>Live Exchange Rates</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: '20px' }}>
          <Box sx={{ padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '5px' }}>
            <Typography variant="body1">USD/EUR: {liveRateEUR}</Typography>
          </Box>
          <Box sx={{ padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '5px' }}>
            <Typography variant="body1">USD/JPY: {liveRateJPY}</Typography>
          </Box>
          <Box sx={{ padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '5px' }}>
            <Typography variant="body1">USD/GBP: {liveRateGBP}</Typography>
          </Box>
        </Box>

        <Typography variant="h4" gutterBottom align="center" style={{ fontFamily: "'Poppins', sans-serif", color: '#e0e0e0' }}>
          Previous Exchange Rates (Weekly)
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <Box sx={{ marginRight: '20px' }}>
            <label style={{ color: '#e0e0e0' }}>Start Date: </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </Box>

          <Box>
            <label style={{ color: '#e0e0e0' }}>End Date: </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Box sx={{ width: { xs: '100%', sm: '30%' }, margin: '10px' }}>
            <Typography variant="h5" align="center" style={{ color: '#e0e0e0' }}>USD to EUR</Typography>
            <Line data={chartDataEUR} options={options} />
          </Box>

          <Box sx={{ width: { xs: '100%', sm: '30%' }, margin: '10px' }}>
            <Typography variant="h5" align="center" style={{ color: '#e0e0e0' }}>USD to JPY</Typography>
            <Line data={chartDataJPY} options={options} />
          </Box>

          <Box sx={{ width: { xs: '100%', sm: '30%' }, margin: '10px' }}>
            <Typography variant="h5" align="center" style={{ color: '#e0e0e0' }}>USD to GBP</Typography>
            <Line data={chartDataGBP} options={options} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HistoricalData;
