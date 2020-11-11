import "./App.scss";
import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import FolderOpenTwoToneIcon from "@material-ui/icons/FolderOpenTwoTone";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import Button from "@material-ui/core/Button";
import { theme } from "./styles/theme";

const useStyles = makeStyles((theme) => ({
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
    fontSize: "8.2rem",
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
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <CssBaseline>
          <header className="nav-container">
            <div className="nav-content">
              <h1>Tracker.io</h1>
              <nav className="links">
                <a href="#" className="left">
                  Login
                </a>
                {/* <a href="#">About Us</a>
                <a href="#">Contact</a> */}
                <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  color="primary"
                  style={{
                    fontWeight: "500",
                    fontSize: "1.1rem",
                    textTransform: "capitalize",
                  }}
                  className={buttonClassname}
                  disable={loading}
                >
                  Sign up for free
                </Button>
              </nav>
            </div>
          </header>
        </CssBaseline>

        <div className="welcome-banner">
          <div className="b-title">
            <h1 className="intro-info">Control center for your job hunt</h1>
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              style={{
                fontWeight: "500",
                fontSize: "1.45rem",
                textTransform: "capitalize",
                // width: "25%",

                marginTop: "25px",
              }}
              className={buttonClassname}
              disable={loading}
            >
              Sign up for free
            </Button>
          </div>
          <div className="b-img-container">
            {/* <img src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80" /> */}
            <div className="b-img"></div>
          </div>
        </div>

        <div className="learn-more">
          <div className="item-1">
            <FolderOpenTwoToneIcon className={classes.icons} />
            <h2>Stay organized.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              ipsum velit. Nam a leo lacinia quam porta varius.
            </p>
          </div>
          <div className="item-2">
            <TrendingUpIcon className={classes.icons} />
            <h2>Track your progress.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              ipsum velit. Nam a leo lacinia quam porta varius.
            </p>
          </div>
          <div className="item-3">
            <TrackChangesIcon className={classes.icons} />
            <h2>Set better goals.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              ipsum velit. Nam a leo lacinia quam porta varius.
            </p>
          </div>
        </div>

        <div className="app-preview">
          <div className="prev-img">
            <img src="https://i.imgur.com/07UgTPa.png" />
          </div>
          <div className="prev-info">
            <h2>No more messy spread sheets</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              ipsum velit. Nam a leo lacinia quam porta varius.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Duis ac ipsum velit. Nam a
              leo lacinia quam porta varius.
            </p>
          </div>
        </div>
      </div>

      <footer>
        {/* <div className="footer-title">
          <h1>Tracker.io</h1>
        </div> */}

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
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Register</a>
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
      {/*container div */}
    </ThemeProvider>
  );
}

export default App;
