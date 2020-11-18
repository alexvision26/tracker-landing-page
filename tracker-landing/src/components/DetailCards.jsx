import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FolderOpenTwoToneIcon from "@material-ui/icons/FolderOpenTwoTone";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";

function DetailCards(props) {
  const classes = props.classes();
  return (
    <>
      <div className="learn-more">
        <div className="card-item i1">
          <Card className={classes.root}>
            <CardContent>
              <FolderOpenTwoToneIcon className={classes.icons} />
              <Typography variant="h5" component="h2" className={classes.title}>
                Stay organized
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.copy}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                ipsum velit. Nam a leo lacinia quam porta varius.
                <br />
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="card-item i2">
          <Card className={classes.root}>
            <CardContent>
              <TrendingUpIcon className={classes.icons} />

              <Typography variant="h5" component="h2" className={classes.title}>
                Track your progress
              </Typography>

              <Typography
                variant="body2"
                component="p"
                className={classes.copy}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                ipsum velit. Nam a leo lacinia quam porta varius.
                <br />
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="card-item i3">
          <Card className={classes.root}>
            <CardContent>
              <TrackChangesIcon className={classes.icons} />
              <Typography variant="h5" component="h2" className={classes.title}>
                Set better goals
              </Typography>

              <Typography
                variant="body2"
                component="p"
                className={classes.copy}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                ipsum velit. Nam a leo lacinia quam porta varius.
                <br />
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="card-item i4">
          <Card className={classes.root}>
            <CardContent>
              <TrackChangesIcon className={classes.icons} />
              <Typography variant="h5" component="h2" className={classes.title}>
                Set better goals
              </Typography>

              <Typography
                variant="body2"
                component="p"
                className={classes.copy}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                ipsum velit. Nam a leo lacinia quam porta varius.
                <br />
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="card-item i5">
          <Card className={classes.root}>
            <CardContent>
              <TrackChangesIcon className={classes.icons} />
              <Typography variant="h5" component="h2" className={classes.title}>
                Set better goals
              </Typography>

              <Typography
                variant="body2"
                component="p"
                className={classes.copy}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                ipsum velit. Nam a leo lacinia quam porta varius.
                <br />
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="card-item i6">
          <Card className={classes.root}>
            <CardContent>
              <TrackChangesIcon className={classes.icons} />
              <Typography variant="h5" component="h2" className={classes.title}>
                Set better goals
              </Typography>

              <Typography
                variant="body2"
                component="p"
                className={classes.copy}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                ipsum velit. Nam a leo lacinia quam porta varius.
                <br />
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default DetailCards;
