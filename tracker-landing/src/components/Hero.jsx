import React from "react";
import Button from "@material-ui/core/Button";

import BannerImage from "./BannerImage";

function Hero() {
  return (
    <>
      <div className="welcome-banner">
        <div className="b-title">
          <h1 className="intro-info">Control center for your job hunt</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button
            type="text"
            size="large"
            variant="outlined"
            color="primary"
            style={{
              fontWeight: "500",
              fontSize: "1.1rem",
              textTransform: "capitalize",
              borderColor: "white",
              color: "white",
              marginTop: "25px",
            }}
            //   className={buttonClassname}
            href="https://career-tracker.vercel.app/register"
            //   disable={loading}
          >
            Sign up for free
          </Button>
        </div>
        <div className="b-img-container">
          <div className="b-img">
            <BannerImage />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
