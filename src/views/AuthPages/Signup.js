import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import LoginPageImage from "assets/img/LoginPage.jpg";
import CustomizedRadios from "components/Radio";
import { FormLabel, InputLabel, MenuItem, Select } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  image: {
    backgroundRepeat: "no-repeat",
    // backgroundColor:
    //   theme.palette.type === "light"
    //     ? theme.palette.grey[50]
    //     : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  maindiv: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  paper: {
    width: "67%",
    margin: "0 auto",
    top: "70px",
    display: "flex",
    flexDirection: "column",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  heading: {
    fontWeight: 600,
    textAlign: "left",
    color: "#011464",
  },
  Button: {
    backgroundColor: "#011464",
    color: "white",
    fontSize: "18px",
    width: "100%",
    marginTop: "40px",
    marginBottom: "40px",
    padding: "13px",
  },
}));

const Signup = () => {
  const classes = useStyles();
  const history = useHistory();
  const SingupComplete = () => {
    history.push("/auth/signin");
  };

  const [plan, setPlan] = React.useState("Plans");

  const handleChange = (event) => {
    setPlan(event.target.value);
  };
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={6} sm={4} md={5}>
        <img src={LoginPageImage} style={{ width: "100%", height: "100vh" }} />
      </Grid>
      <Grid item xs={6} sm={8} md={7}>
        <div className={classes.maindiv}>
          <div className={classes.paper}>
            <Typography className={classes.heading} variant="h5">
              Signup
            </Typography>
            <form className={classes.form} noValidate>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  id="email"
                  label="First Name"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  style={{ width: "45%" }}
                />{" "}
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  id="email"
                  label="Last Name"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  style={{ width: "45%" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  id="email"
                  label="Country"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  style={{ width: "45%" }}
                />{" "}
              </div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormLabel style={{ marginTop: "16px " }} component="legend">
                Select Plan
              </FormLabel>
              <Select
                style={{ width: "100%", height: "54px" }}
                variant="outlined"
                labelId="demo-simple-select-outlined-label"
                Id="demo-simple-select-outlined-label"
                value={plan}
                onChange={handleChange}
              >
                <MenuItem value="Free">Free</MenuItem>
                <MenuItem value="Pro">Pro</MenuItem>
                <MenuItem value="Premium">Premium</MenuItem>
              </Select>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={SingupComplete}
                className={classes.Button}
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
export default Signup;
