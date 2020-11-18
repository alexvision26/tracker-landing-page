import "./App.scss";
import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import { theme } from "./styles/theme";

import BannerImage from "./components/BannerImage";
import Hero from "./components/Hero";
import HeroBanner from "./components/HeroBanner";
import DetailCards from "./components/DetailCards";

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 275,
    a: {
      color: "white",
    },
  },
  copy: {
    fontSize: 16,
    padding: "7%",
    // width: "85%",
  },
  title: {
    fontSize: 30,
    height: "35px",
    lineHeight: 1.1,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    // marginTop: theme.spacing(8),
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    margin: "auto",
    alignItems: "center",
  },
  icons: {
    fontSize: "8rem",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    backgroundColor: "#7000ff",
    "&:hover": {
      backgroundColor: "#5d00d6",
    },
    "&:active": {
      backgroundColor: "#7000ff",
    },
  },
  buttonSuccess: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    backgroundColor: "#7000ff",
    "&:hover": {
      backgroundColor: "#5d00d6",
    },
    "&:active": {
      backgroundColor: "#7000ff",
    },
  },
  buttonProgress: {
    color: "gray",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="container-overlay">
        <div className="container">
          <CssBaseline>
            <header className="nav-container">
              <div className="nav-content">
                <h1>Tracker.io</h1>
                <nav className="links">
                  <a href="#home" className="left">
                    Home
                  </a>
                  <a href="#" className="left">
                    About
                  </a>
                  <a href="#" className="left">
                    How It Works
                  </a>
                  <a
                    href="https://career-tracker.vercel.app/login"
                    className="left"
                  >
                    Login
                  </a>
                  {/* <a href="#">About Us</a>
                <a href="#">Contact</a> */}
                  <Button
                    type="text"
                    size="large"
                    variant="outlined"
                    color="primary"
                    style={{
                      fontWeight: "500",
                      color: "white",
                      borderColor: "white",
                      fontSize: "1rem",
                      textTransform: "capitalize",
                    }}
                    href="https://career-tracker.vercel.app/register"
                  >
                    Sign up for free
                  </Button>
                </nav>
              </div>
            </header>
          </CssBaseline>

          <Hero />
          {/* <HeroBanner /> */}
          {/* <BannerImage /> */}
          <div className="detail-container">
            <DetailCards classes={useStyles} />
          </div>

          <div className="app-preview">
            <div className="prev-img">
              <img src="https://i.imgur.com/07UgTPa.png" />
            </div>
            <div className="prev-info">
              <h2>No more messy spread sheets</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                ipsum velit. Nam a leo lacinia quam porta varius.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Duis ac ipsum
                velit. Nam a leo lacinia quam porta varius.
              </p>
            </div>
          </div>
        </div>

        <a
          href="https://career-tracker.vercel.app/register"
          className="cta-link"
        >
          <div className="cta">
            <h1>Take control of your career today!</h1>
          </div>
        </a>

        <footer>
          <div className="f-columns">
            <div className="col-1">
              <ul>
                <h3>Tracker.io</h3>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <h3>Links</h3>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="https://career-tracker.vercel.app/login">Login</a>
                </li>
                <li>
                  <a href="https://career-tracker.vercel.app/register">
                    Register
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                <h3>Get in touch</h3>
                <li>
                  <a href="#">Email us</a>
                </li>
                <li>
                  <a href="#">Report a bug</a>
                </li>
              </ul>
            </div>
          </div>
          <h5 className="copyright">
            Tracker.io | info@tracker.io | Copyright 2020
          </h5>
        </footer>
      </div>
      {/*container div */}
    </ThemeProvider>
  );
}

export default App;
