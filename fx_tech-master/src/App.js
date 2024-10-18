import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import RealTimeFX from './RealTimeFX';
import CurrencyConverter from './CurrencyConverter';
import HistoricalData from './HistoricalData';
import News from './News';
import About from './About';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/realtime" element={<RealTimeFX />} />
            <Route path="/converter" element={<CurrencyConverter />} />
            <Route path="/historical" element={<HistoricalData />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
