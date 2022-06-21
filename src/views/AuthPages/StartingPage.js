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
import ComputerImage from "assets/img/ComputerImage.svg";
import { SpeakerNotes } from "@material-ui/icons";
import GridContainer from "components/Grid/GridContainer";
import ComputerImageTwo from "assets/img/ComputerImageTwo.svg";
import ContainerImage from "assets/img/Container.svg";
import SelectPlanRadio from "components/SelectPlanRadio";
import { whiteColor } from "assets/jss/material-dashboard-react";
import ThirdNetroLogo from "assets/img/ThirdNetroLogo.png";
import SecondNetroLogo from "assets/img/SecondNetroLogo.png";
import FirstNetroLogo from "assets/img/FirstNetroLogo.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Discover, freePackage, Services, Support } from "./fixedConstant";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import FacebookIcon from "@material-ui/icons/Facebook";
import youtube from "assets/img/youtube.png";
import twitter from "assets/img/twitter.png";

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
    width: "100%",
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
    width: "100%",
    "& .MuiInputBase-input": {
      backgroundColor: "white",
      borderRadius: "5px",
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
    width: "23%",
    height: "270px",
    flexDirection: "Column",
    border: "2px solid rgba(65, 209, 255, 0.2)",
    backgroundColor: "#1e4b98",
    display: "flex",
    justifyContent: "center",
    borderRadius: "10px",
    alignItems: "center",
  },
  boxAnchor: {
    color: "white",
    fontSize: "10px",
    fontWeight: "500",
    margin: "20px 0px 0px 0px",
  },
  priceBox: {
    width: "300px",
    height: "420px",
    flexDirection: "Column",
    border: "2px solid rgba(65, 209, 255, 0.2)",
    display: "flex",
    justifyContent: "center",
    borderRadius: "10px",
    alignItems: "center",
    marginBottom: "90px",
  },
  priceTopLogo: {
    width: "120px",
    height: "120px",
    border: "1px solid rgba(65, 209, 255, 0.2)",
    borderRadius: "50%",
    marginBlockStart: "-283px",
  },
}));

const StartingPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [show, setShow] = React.useState(false);
  const Singin = () => {
    history.push("/auth/admin");
  };
  const Register = () => {
    history.push("/auth/signup");
  };
  return (
    <div>
      <Grid container component="main" className={classes.root}>
        <Grid item xs={12} sm={12} md={12}>
          <div
            style={{
              display: "flex",
            }}
          >
            <Grid item xs={12} sm={12} md={5}>
              <img src={torsend_logo} width="100%" className={classes.logo} />
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
                  style={{
                    fontSize: "20px",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Pricing
                </a>
                <a
                  style={{
                    fontSize: "20px",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Company
                </a>
                <a
                  style={{
                    fontSize: "20px",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Help
                </a>
                <a
                  style={{
                    fontSize: "20px",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onClick={() => history.push("/auth/signup")}
                >
                  Signup
                </a>
                <a
                  style={{
                    fontSize: "20px",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onClick={() => history.push("/auth/signin")}
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
                  width: "100%",
                  height: "100px",
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
                      fontSize: "20px",
                      fontWeight: "600",
                      display: "inline",
                    }}
                  >
                    Upload files
                  </a>
                  <p
                    style={{
                      color: "white",
                      fontSize: "15px",
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
          <Grid container item xs={12} sm={12} md={6}>
            <img src={LaptopImage} width="90%" />
          </Grid>
        </Grid>
        <Grid
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
            <img src={SuperFast} width="50%" />
            <a className={classes.boxAnchor}>Super Fast Upload</a>
          </span>
          <span className={classes.box}>
            <img src={Encryption} width="50%" />
            <a className={classes.boxAnchor}>End-End Encryption</a>
          </span>
          <span className={classes.box}>
            {" "}
            <img src={DevOps} width="60%" />
            <a className={classes.boxAnchor}>Unlimited File Size</a>
          </span>
          <span className={classes.box}>
            {" "}
            <img src={Password} width="60%" />
            <a className={classes.boxAnchor}>Protected File Sharing</a>
          </span>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          backgroundColor: "rgba(52,60,160,255)",
          padding: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={12} md={6}>
          <p
            style={{
              fontSize: "40px",
              display: "inline",
              color: "white",
              fontWeight: "700",
            }}
          >
            Reliable Storage and Fast Transfer
          </p>
          <p
            style={{
              fontSize: "20px",
              color: "white",
              fontWeight: "500",
            }}
          >
            We make secure cloud storage simple and convenient. Create a free
            TorSend account today.
          </p>
          <p
            style={{
              fontSize: "30px",
              fontWeight: "500",
            }}
          >
            <a style={{ color: "#3dc2f3", fontWeight: "400" }}>Get Started</a>
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img src={ComputerImage} width="100%" height="550px" />
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          backgroundColor: "#182987",
          padding: "80px 40px 80px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {" "}
        <Grid item xs={12} sm={12} md={6}>
          <img src={ComputerImageTwo} width="100%" height="550px" />
        </Grid>
        <Grid item xs={false} sm={false} md={1}></Grid>
        <Grid item xs={12} sm={12} md={5}>
          <p
            style={{
              fontSize: "40px",
              display: "inline",
              color: "white",
              fontWeight: "700",
            }}
          >
            End-to-end encryption{" "}
          </p>
          <p
            style={{
              fontSize: "20px",
              color: "white",
              fontWeight: "500",
            }}
          >
            Your TorSend files and chats are encrypted with keys controlled by
            you.
          </p>
          <p
            style={{
              fontSize: "30px",
              fontWeight: "500",
            }}
          >
            <a style={{ color: "#3dc2f3", fontWeight: "400" }}>Get Started</a>
          </p>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          backgroundColor: "#095998",
          padding: "80px 40px 80px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {" "}
        <Grid item xs={12} sm={12} md={6}>
          <img src={ContainerImage} width="100%" height="550px" />
        </Grid>
        <Grid item xs={false} sm={false} md={1}></Grid>
        <Grid item xs={12} sm={12} md={5}>
          <p
            style={{
              fontSize: "40px",
              display: "inline",
              color: "white",
              fontWeight: "700",
            }}
          >
            The secure solution for your business
          </p>
          <p
            style={{
              fontSize: "20px",
              color: "white",
              fontWeight: "500",
            }}
          >
            Take the security of your company’s data and communication to the
            next level with TorSend’s end-to-end encrypted business solution.
          </p>
          <p
            style={{
              fontSize: "30px",
              fontWeight: "500",
            }}
          >
            <a style={{ color: "#3dc2f3", fontWeight: "400" }}>Get Started</a>
          </p>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          backgroundColor: "#182987",
          padding: "80px 40px 80px 40px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "55px",
              margin: "31px auto",
              color: "white",
              fontWeight: "400",
            }}
          >
            Choose Your Plan
          </p>
          <SelectPlanRadio />
        </div>

        <Grid
          container
          style={{
            marginTop: "90px",
            width: "95%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <span
            className={classes.priceBox}
            style={{ backgroundColor: "#ffffff" }}
          >
            <img src={FirstNetroLogo} className={classes.priceTopLogo} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <span>
                <a
                  style={{
                    color: "#404040",
                    fontSize: "20px",
                    fontWeight: "600",
                    display: "block",
                  }}
                >
                  Free
                </a>
                <a
                  style={{
                    color: "#404040",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  no money/no Problem
                </a>
              </span>
              <span>
                <a
                  style={{
                    color: "#404040",
                    fontSize: "20px",
                    fontWeight: "600",
                    display: "block",
                  }}
                >
                  $0
                </a>
                <a
                  style={{
                    color: "#404040",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  /month
                </a>
              </span>
            </div>
            <hr
              style={{
                width: "80%",
                height: "0px",
                opacity: 0.3,
                color: "#011464",
              }}
            />
            {/* {freePackage.map((item, key) => { 
                return { */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "70%",
              }}
            >
              <span>
                <a
                  style={{
                    color: "#404040",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  &#10003;
                </a>
              </span>
              <span>
                <a
                  style={{
                    color: "#404040",
                    fontSize: "15px",
                    fontWeight: "400",
                  }}
                >
                  {/* {item.title} */}
                  Send upto 20Gb
                </a>
              </span>
            </div>
            {/* }})} */}
            <button
              style={{
                width: "90%",
                height: "60px",
                color: "white",
                position: "relative",
                top: "47%",
                fontWeight: "600",
                background: "#404040",
                borderRadius: "10px",
                border: "none",
              }}
            >
              Create Account
            </button>
          </span>
          <span
            className={classes.priceBox}
            style={{ backgroundColor: "#ebedff" }}
          >
            <img src={SecondNetroLogo} className={classes.priceTopLogo} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <span>
                <a
                  style={{
                    color: "#5268FF",
                    fontSize: "20px",
                    fontWeight: "600",
                    display: "block",
                  }}
                >
                  Pro
                </a>
                <a
                  style={{
                    color: "#5268FF",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  per person, billed yearly
                </a>
              </span>
              <span>
                <a
                  style={{
                    color: "#5268FF",
                    fontSize: "20px",
                    fontWeight: "600",
                    display: "block",
                  }}
                >
                  $7.99
                </a>
                <a
                  style={{
                    color: "#5268FF",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  /month
                </a>
              </span>
            </div>
            <hr
              style={{
                width: "80%",
                height: "0px",
                opacity: 0.3,
                color: "#5268FF",
              }}
            />
            {/* {freePackage.map((item, key) => { 
                return { */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "70%",
              }}
            >
              <span>
                <a
                  style={{
                    color: "#5268FF",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  &#10003;
                </a>
              </span>
              <span>
                <a
                  style={{
                    color: "#5268FF",
                    fontSize: "15px",
                    fontWeight: "400",
                  }}
                >
                  {/* {item.title} */}
                  Send upto 20Gb
                </a>
              </span>
            </div>
            <button
              style={{
                width: "90%",
                height: "60px",
                color: "white",
                fontWeight: "600",
                position: "relative",
                top: "47%",
                background: "#5268FF",
                borderRadius: "10px",
                border: "none",
              }}
            >
              Create Account
            </button>
          </span>
          <span
            className={classes.priceBox}
            style={{ backgroundColor: "#7183ff" }}
          >
            <img src={ThirdNetroLogo} className={classes.priceTopLogo} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <span>
                <a
                  style={{
                    color: "#FFFFFF",
                    fontSize: "20px",
                    fontWeight: "600",
                    display: "block",
                  }}
                >
                  PREMIUM
                </a>
                <a
                  style={{
                    color: "#FFFFFF",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  per person, billed yearly
                </a>
              </span>
              <span>
                <a
                  style={{
                    color: "#FFFFFF",
                    fontSize: "20px",
                    fontWeight: "600",
                    display: "block",
                  }}
                >
                  $14.99
                </a>
                <a
                  style={{
                    color: "#FFFFFF",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  /month
                </a>
              </span>
            </div>
            <hr
              style={{
                width: "80%",
                height: "0px",
                opacity: 0.3,
                color: "#FFFFFF",
              }}
            />
            {/* {freePackage.map((item, key) => { 
                return { */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "70%",
              }}
            >
              <span>
                <a
                  style={{
                    color: "#FFFFFF",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  &#10003;
                </a>
              </span>
              <span>
                <a
                  style={{
                    color: "#FFFFFF",
                    fontSize: "15px",
                    fontWeight: "400",
                  }}
                >
                  {/* {item.title} */}
                  Unlimited File Send/Store
                </a>
              </span>
            </div>
            <button
              style={{
                width: "90%",
                position: "relative",
                top: "47%",
                height: "60px",
                color: "#5268FF",
                fontWeight: "600",
                background: "white",
                borderRadius: "10px",
                border: "none",
              }}
            >
              Create Account
            </button>
          </span>
        </Grid>
      </Grid>
      <Grid
        style={{
          backgroundColor: "#1f1d7f",
          padding: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <p
            style={{
              fontSize: "20px",
              color: "white",
              fontWeight: "500",
            }}
          >
            A Secure solution
          </p>
          <p
            style={{
              fontSize: "40px",
              display: "inline",
              color: "white",
              fontWeight: "600",
            }}
          >
            The safety of your data is our priority
          </p>
          <div
            style={{
              marginTop: "30px",
              width: "100%",
              paddingBottom: "15px",
              background: "rgba(65, 209, 255, 0.2)",
              border: "1px solid #EBEBEB",
              borderRadius: "10px",
              paddingTop: "15px",
              paddingLeft: "10px",
            }}
          >
            <span
              style={{
                marginTop: "10px",
                marginRight: "10px",
                marginBottom: "10px",
              }}
            >
              {!show ? (
                <>
                  <ExpandMoreIcon
                    onClick={() => setShow(true)}
                    style={{
                      color: "#FFFFFF",
                      cursor: "pointer",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  />
                </>
              ) : (
                <ExpandLessIcon
                  onClick={() => setShow(false)}
                  style={{
                    color: "#FFFFFF",
                    fontSize: "20px",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                />
              )}
            </span>
            <span>
              <a
                style={{
                  color: "#FFFFFF",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
              >
                {/* {item.title} */}
                Whare are TorSend files hosted?
              </a>
            </span>

            <span style={{ marginLeft: "30px" }}>
              {show ? (
                <>
                  <hr
                    style={{
                      width: "95%",
                      height: "0px",
                      opacity: 0.3,
                      color: "#011464",
                    }}
                  />
                  <a
                    style={{
                      color: "#FFFFFF",
                      fontSize: "15px",
                      fontWeight: "400",
                    }}
                  >
                    By using our service to send or receive your files you have
                    a dedicated and secure global cloud infrastructure where
                    files are stored and encrypted on disk (AES-XTS 256 bits) in
                    datacenters (AICPA SOC 2 Type II) on the European, American
                    and Asian continents.
                  </a>
                </>
              ) : null}
            </span>
          </div>
          <div
            style={{
              marginTop: "30px",
              width: "100%",
              paddingBottom: "15px",
              background: "rgba(65, 209, 255, 0.2)",
              border: "1px solid #EBEBEB",
              borderRadius: "10px",
              paddingTop: "15px",
              paddingLeft: "10px",
            }}
          >
            <span
              style={{
                marginTop: "10px",
                marginRight: "10px",
                marginBottom: "10px",
              }}
            >
              <ExpandMoreIcon
                style={{
                  color: "#FFFFFF",
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              />
            </span>
            <span>
              <a
                style={{
                  color: "#FFFFFF",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
              >
                {/* {item.title} */}
                Is my personal data safe?
              </a>
            </span>
          </div>
          <div
            style={{
              marginTop: "30px",
              width: "100%",
              paddingBottom: "15px",
              background: "rgba(65, 209, 255, 0.2)",
              border: "1px solid #EBEBEB",
              borderRadius: "10px",
              paddingTop: "15px",
              paddingLeft: "10px",
            }}
          >
            <span
              style={{
                marginTop: "10px",
                marginRight: "10px",
                marginBottom: "10px",
              }}
            >
              <ExpandMoreIcon
                style={{
                  color: "#FFFFFF",
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              />
            </span>
            <span>
              <a
                style={{
                  color: "#FFFFFF",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
              >
                {/* {item.title} */}
                Do you open and/or use my files?
              </a>
            </span>
          </div>
          <div
            style={{
              marginTop: "30px",
              width: "100%",
              paddingBottom: "15px",
              background: "rgba(65, 209, 255, 0.2)",
              border: "1px solid #EBEBEB",
              borderRadius: "10px",
              paddingTop: "15px",
              paddingLeft: "10px",
            }}
          >
            <span
              style={{
                marginTop: "10px",
                marginRight: "10px",
                marginBottom: "10px",
              }}
            >
              <ExpandMoreIcon
                style={{
                  color: "#FFFFFF",
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              />
            </span>
            <span>
              <a
                style={{
                  color: "#FFFFFF",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
              >
                {/* {item.title} */}
                Are my files safe?
              </a>
            </span>
          </div>
        </Grid>
      </Grid>
      <div
        style={{
          backgroundColor: "#1f1d7f",
          padding: "20px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <span style={{ display: "flex", alignItems: "center" }}>
          <a
            style={{
              color: "#FFFFFF",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            {/* {item.title} */}
            Find out more answers on our FAQ
          </a>
          <ArrowRightAltIcon style={{ color: "white" }} />
        </span>
      </div>
      <Grid
        style={{
          backgroundColor: "#1f1d7f",
          padding: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "95%",
            padding: "60px 10px",
            background: "rgba(65, 209, 255, 0.2)",
            borderRadius: "3px",
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItem: "center",
            }}
          >
            <p
              style={{
                color: "#FFFFFF",
                fontFamily: "Helvetica",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "44px",
              }}
            >
              {/* {item.title} */}
              Get The Latest TorSend Updates
            </p>
            <a
              style={{
                color: "#FFFFFF",
                fontFamily: "Helvetica",
                fontStyle: "normal",
                fontWeight: 500,
                textAlign: "center",
                fontSize: "18px",
              }}
            >
              {/* {item.title} */}
              And be the first to know when our crowdssale launches!
            </a>
            <span>
              <TextField
                variant="outlined"
                margin="normal"
                className={classes.input}
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Enter Your Email Here"
                style={{ width: "65%" }}
              />
              <Button
                style={{
                  color: "white",
                  marginLeft: "20px",
                  marginTop: "15px",
                  padding: "16px 10px",
                  background:
                    "linear-gradient(92.86deg, #37E0C2 2.43%, #41D1FF 108.47%)",
                  width: "30%",
                }}
              >
                Subscribe
              </Button>
            </span>
            <a
              style={{
                fontFamily: "Helvetica",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "14px",
                /* identical to box height */
                textAlign: "right",
                color: "#9E9EB3",
              }}
            >
              {/* {item.title} */}
              Become part of our ever growing community{" "}
              <a
                style={{
                  color: "#238ca5",
                  cursor: "pointer",
                }}
              >
                Join us on Telegram
              </a>
            </a>
          </span>
        </div>
      </Grid>
      <Grid
        container
        style={{
          backgroundColor: "#011464",
        }}
      >
        <Grid item md={7} sm={12} xs={12}>
          <Grid
            container
            style={{
              width: "100%",
              padding: "30px",
            }}
          >
            <Grid item md={4} sm={4} xs={12}>
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {/* {item.title} */}
                Services
              </p>
              {Services.map((item, id) => {
                return (
                  <a
                    key={id}
                    style={{
                      color: "#FFFFFF",
                      fontSize: "10px",
                      display: "block",
                      cursor: "pointer",
                    }}
                  >
                    {/* {item.title} */}
                    {item.title}
                  </a>
                );
              })}
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                {/* {item.title} */}
                Discover
              </p>
              {Discover.map((item, id) => {
                return (
                  <a
                    key={id}
                    style={{
                      color: "#FFFFFF",
                      fontSize: "10px",
                      display: "block",
                      cursor: "pointer",
                    }}
                  >
                    {item.title}
                  </a>
                );
              })}
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                {/* {item.title} */}
                Support
              </p>
              {Support.map((item, id) => {
                return (
                  <a
                    key={id}
                    style={{
                      display: "block",
                      color: "#FFFFFF",
                      fontSize: "10px",
                      cursor: "pointer",
                    }}
                  >
                    {item.title}
                  </a>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={5} sm={12} xs={12} style={{ padding: "30px" }}>
          <div
            style={{
              marginTop: "30px",
              width: "100%",
              paddingBottom: "15px",
              background: "rgba(65, 209, 255, 0.2)",
              borderRadius: "10px",
              paddingTop: "15px",
              paddingLeft: "10px",
            }}
          >
            <span
              style={{
                marginTop: "10px",
                marginRight: "10px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItem: "center",
              }}
            >
              <a
                style={{
                  display: "block",
                  color: "#FFFFFF",
                  fontSize: "33px",
                  fontWeight: 400,
                }}
              >
                TorSend
              </a>
              <span
                style={{
                  display: "flex",
                  alignItem: "center",
                  color: "#41D1FF",
                }}
              >
                <FacebookIcon
                  style={{ marginRight: "7px", color: "#41D1FF" }}
                />
                <img
                  src={twitter}
                  width="18px"
                  height="18px"
                  style={{ marginRight: "7px", marginTop: "3px" }}
                />
                <img
                  src={youtube}
                  width="20px"
                  height="20px"
                  style={{ marginTop: "3px" }}
                />
              </span>
            </span>
            <span style={{ padding: "5px" }}>
              <a
                style={{
                  color: "#FFFFFF",
                  fontSize: "18px",
                  fontWeight: 300,
                }}
              >
                Take the security of your company’s data and communication to
                the next level with TorSend’s end-to-end encrypted business
                solution.
              </a>
            </span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default StartingPage;
