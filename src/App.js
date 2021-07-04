import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import ClockImage from "./images/jon-tyson-FlHdnPO6dlw-unsplash.jpg";
import Countdown from "./components/Countdown";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundImage: `url(${ClockImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: false,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container maxWidth="sm">
        <Countdown />
      </Container>
    </div>
  );
};

export default App;
