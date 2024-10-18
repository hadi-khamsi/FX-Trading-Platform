import React from "react";
import { AppBar, Toolbar, Button, Badge, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import logo from "./logo.png";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#1b0436",
  boxShadow: "none",
  backdropFilter: "blur(10px)",
  [theme.breakpoints.down("sm")]: {
    padding: "0 10px",
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Logo = styled("img")(({ theme }) => ({
  height: "60px",
  marginRight: "150px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#ffffff",
  transition: "background-color 0.3s, transform 0.3s",
  margin: "0 10px",
  "&:hover": {
    backgroundColor: "#1E88E5",
    transform: "scale(1.05)",
  },
}));

const HistoricalButton = styled(StyledButton)(({ theme }) => ({
  position: "relative",
}));

const AiMlText = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  marginLeft: "5px",
  color: "#ffffff",
}));

function Navbar() {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Logo src={logo} alt="World Link Bank Logo" />
        <StyledButton component={Link} to="/">
          Home
        </StyledButton>
        <StyledButton component={Link} to="/historical">
          Real-Time FX
        </StyledButton>
        <StyledButton component={Link} to="/converter">
          Currency Converter
        </StyledButton>
        <HistoricalButton component={Link} to="/realtime">
          Historical Data
          <Badge
            badgeContent="Beta"
            color="error"
            variant="dot"
            style={{ marginLeft: "10px" }}
          />
          <AiMlText>AI/ML Beta</AiMlText>
        </HistoricalButton>
        <StyledButton component={Link} to="/news">
          News & Research
        </StyledButton>
        <StyledButton component={Link} to="/about">
          About
        </StyledButton>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Navbar;
