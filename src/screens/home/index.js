import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    fontSize: "3rem",
  },
  text: {
    flexGrow: 1,
    fontSize: "1.5rem",
    textIndent: "2rem",
  },
}));

const HomeScreen = () => {
  const classes = useStyles();

  return (
    <div>
      ASD
      <Typography variant="h1" className={classes.title}>
        Home
      </Typography>
      <hr />
      <Typography variant="h1" className={classes.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue
        ac felis viverra lacinia. Sed nibh massa, tristique ut fringilla in,
        molestie id leo. Suspendisse ac dolor non mauris sodales fermentum a ut
        nunc. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nunc consequat venenatis neque vitae consequat.
      </Typography>
    </div>
  );
};

HomeScreen.propTypes = {};

export default HomeScreen;
