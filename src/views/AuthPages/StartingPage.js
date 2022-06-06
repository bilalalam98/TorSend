import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import LoginPageImage from "assets/img/LoginPage.jpg";
import CustomizedRadios from "components/Radio";
import torsend_logo from "assets/img/torsend_logo.svg";
import LaptopImage from "assets/img/LaptopImage.svg";
import SuperFast from "assets/img/SuperFast.png";
import Encryption from "assets/img/Encryption.png";
import DevOps from "assets/img/DevOps.png";
import Password from "assets/img/Password.png";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircle";
import { SpeakerNotes } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundImage: `url(${LoginPageImage})`,
    padding: "40px 20px 20px 20px",
    "@media (max-width: 600px)": {
      background: "#275D9C",
    },
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
  logo: {
    width: "30%",
  },
  input: {
    "& .MuiInputBase-input": {
      "@media (max-width: 600px)": {
        color: "white",
      },
    },
  },
  register: {
    fontWeight: "600",
    textDecoration: "none",
    textDecorationColor: "#011464",
    cursor: "pointer",
    "@media (max-width: 600px)": {
      color: "white",
    },
  },
  box: {
    width: "15%",
    height: "260px",
    flexDirection: "Column",
    border: "2px solid rgba(65, 209, 255, 0.2)",
    backgroundColor: "#1e4b98",
    display: "flex",
    justifyContent: "center",
    borderRadius: "5px",
    alignItems: "center",
  },
  boxAnchor: {
    color: "white",
    fontSize: "10px",
    fontWeight: "500",
    margin: "20px 0px 0px 0px",
  },
}));

const StartingPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const Singin = () => {
    localStorage.setItem("token", true);
    history.push("/admin/dashboard");
  };
  const Register = () => {
    history.push("/auth/signup");
  };
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={12} md={12}>
        <div
          style={{
            display: "flex",
          }}
        >
          <Grid item xs={12} sm={12} md={5}>
            <img src={torsend_logo} className={classes.logo} />
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <div
              style={{
                width: "87%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
              }}
            >
              <a
                style={{ fontSize: "20px", color: "white", fontWeight: "600" }}
              >
                Pricing
              </a>
              <a
                style={{ fontSize: "20px", color: "white", fontWeight: "600" }}
              >
                Company
              </a>
              <a
                style={{ fontSize: "20px", color: "white", fontWeight: "600" }}
              >
                Help
              </a>
              <a
                style={{ fontSize: "20px", color: "white", fontWeight: "600" }}
              >
                Signup
              </a>
              <a
                style={{ fontSize: "20px", color: "white", fontWeight: "600" }}
              >
                Signin
              </a>
            </div>
          </Grid>
        </div>
      </Grid>
      <Grid container style={{ paddingTop: "40px" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              marginTop: "90px",
            }}
          >
            <a
              style={{
                fontSize: "15px",
                color: "white",
                fontWeight: "500",
              }}
            >
              Transfer Files With Complete Privacy
            </a>
            <div
              style={{
                backgroundColor: "#1a689a",
                display: "flex",
                borderRadius: "5px",
                marginBottom: "20px",
                marginTop: "20px",
                padding: "12px",
              }}
            >
              <AddCircleOutlineIcon fontSize="large" color="#37E0C2" />
              <span
                style={{
                  marginLeft: "15px",
                  dispaly: "flex",
                  flexDirection: "row",
                }}
              >
                <a
                  style={{
                    color: "white",
                    fontSize: "15px",
                    fontWeight: "600",
                    display: "inline",
                  }}
                >
                  Upload files
                </a>
                <p
                  style={{
                    color: "white",
                    fontSize: "10px",
                    fontWeight: "400",
                    margin: "20px 0px 0px 0px",
                  }}
                >
                  or select a file
                </p>
              </span>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img src={LaptopImage} />
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          paddingTop: "40px",
          width: "80%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <span className={classes.box}>
          <img src={SuperFast} />
          <a className={classes.boxAnchor}>Super Fast Upload</a>
        </span>
        <span className={classes.box}>
          <img src={Encryption} />
          <a className={classes.boxAnchor}>End-End Encryption</a>
        </span>
        <span className={classes.box}>
          {" "}
          <img src={DevOps} />
          <a className={classes.boxAnchor}>Unlimited File Size</a>
        </span>
        <span className={classes.box}>
          {" "}
          <img src={Password} />
          <a className={classes.boxAnchor}>Protected File Sharing</a>
        </span>
      </Grid>
    </Grid>
  );
};
export default StartingPage;
