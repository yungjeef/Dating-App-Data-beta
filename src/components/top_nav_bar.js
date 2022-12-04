import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    marginLeft: theme.spacing(7),
    "&:hover": {
      color: "#00CC00",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{background: "#FF8000"}}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Dating App Data
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;