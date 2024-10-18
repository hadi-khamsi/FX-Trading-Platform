import React, { useState } from 'react';
import { Container, Typography, TextField, Button, MenuItem, Box, FormControlLabel, Switch } from '@mui/material';
import { Line, Pie } from 'react-chartjs-2';
import LiveRates from './LiveRates';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, LineElement, LinearScale, PointElement } from 'chart.js';
import backgroundImage from './background.jpg';

ChartJS.register(ArcElement, Tooltip, Legend, Title, LineElement, LinearScale, PointElement);

const sampleHistoricalData = {
  USD: [1, 1.1, 1.05, 1.15, 1.2],
  EUR: [1, 0.9, 0.95, 0.85, 0.8],
};

function CurrencyConverter() {
  const { rates } = LiveRates();
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [showCharts, setShowCharts] = useState(false);

  const handleConvert = () => {
    if (rates && fromCurrency && toCurrency && amount) {
      const rate = rates[toCurrency] / rates[fromCurrency];
      const result = (amount * rate).toFixed(2);
      setConvertedAmount(result);
    }
  };

  const lineChartData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: `${fromCurrency} Historical Rates`,
        data: sampleHistoricalData[fromCurrency],
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: `${toCurrency} Historical Rates`,
        data: sampleHistoricalData[toCurrency],
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const pieChartData = {
    labels: [fromCurrency, toCurrency],
    datasets: [
      {
        label: 'Converted Amount Comparison',
        data: [amount, convertedAmount || 0],
        backgroundColor: ['rgba(75,192,192,0.2)', 'rgba(255,99,132,0.2)'],
        borderColor: ['rgba(75,192,192,1)', 'rgba(255,99,132,1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box 
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Container 
        maxWidth="sm" 
        sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '10px', 
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)', 
          padding: '40px',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Currency Conversion Tool
        </Typography>

        <TextField
          label="Amount"
          fullWidth
          margin="normal"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <TextField
          label="From Currency"
          select
          fullWidth
          margin="normal"
          variant="outlined"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {rates && Object.entries(rates).map(([currency]) => (
            <MenuItem key={currency} value={currency}>
              {currency} - {getCurrencyName(currency)}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="To Currency"
          select
          fullWidth
          margin="normal"
          variant="outlined"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {rates && Object.entries(rates).map(([currency]) => (
            <MenuItem key={currency} value={currency}>
              {currency} - {getCurrencyName(currency)}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            marginTop: '20px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          }}
          onClick={handleConvert}
        >
          Convert
        </Button>

        {convertedAmount && (
          <Typography variant="h6" sx={{ marginTop: '20px' }}>
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </Typography>
        )}

        <FormControlLabel
          control={
            <Switch
              checked={showCharts}
              onChange={() => setShowCharts(!showCharts)}
              color="primary"
            />
          }
          label="Visualization Tools"
        />

        {showCharts && (
          <Box sx={{ marginTop: '40px', width: '100%' }}>
            <Typography variant="h5" sx={{ marginBottom: '20px' }}>
              Exchange Rate Chart
            </Typography>
            <Box sx={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px' }}>
              <Line data={lineChartData} options={{ responsive: true, plugins: { tooltip: { enabled: true } } }} />
            </Box>
            <Box sx={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
              <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                Converted Amount Comparison
              </Typography>
              <Pie data={pieChartData} options={{ responsive: true, plugins: { tooltip: { enabled: true } } }} />
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}

const currencyNames = {
  USD: "United States Dollar",
  EUR: "Euro",
};

const getCurrencyName = (currency) => {
  return currencyNames[currency] || currency;
};

export default CurrencyConverter;
