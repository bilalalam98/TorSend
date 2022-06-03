import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import ShareIcon from "@material-ui/icons/Share";
// @material-ui/icons
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import LinearProgress from "@material-ui/core/LinearProgress";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import photos from "assets/img/photos.png";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import videos from "assets/img/Videos.svg";
import music from "assets/img/Music.svg";
import pics from "assets/img/Pics.svg";
import download from "assets/img/Downloads.svg";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Button, FormLabel, Select, TextField } from "@material-ui/core";
import SearchField from "components/SearchField";
import LineChart from "components/chart/LineChart";
import DashboardModal from "./DashboardModal";
import ModalTabs from "./ModalTabs";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const value = 3.52;
  const progress = 60;
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <GridContainer>
        <DashboardModal openModal={openModal} setOpenModal={setOpenModal} />
        <GridItem xs={12} sm={12} md={6} style={{ marginBottom: "30px" }}>
          <Button onClick={handleOpen} className={classes.SendButton}>
            <CloudUploadIcon
              style={{ marginRight: "12px", marginBottom: "4px" }}
            />
            Send Files
          </Button>
        </GridItem>
        <GridItem
          xs={12}
          sm={12}
          md={6}
          style={{ display: "flex", justifyContent: "flex-end", zIndex: "10" }}
        >
          <div className={classes.seearchField}>
            <SearchField
              style={{
                width: "100%",
                height: "100%",
                marginTop: "10px",
              }}
            />
          </div>
        </GridItem>
      </GridContainer>
      <div
        style={{
          backgroundColor: "white",
          width: "98%",
          height: "100%",
          borderRadius: "5px",
          padding: "10px",
          zIndex: 9,
          position: "relative",
        }}
      >
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <div
              style={{
                border: "2px solid #E5E5E5",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              <h5
                style={{
                  marginTop: "10px",
                  marginLeft: "13px",
                  color: "#011464",
                  fontWeight: "500",
                }}
              >
                File Analytics
              </h5>
              <GridContainer style={{ marginLeft: "7px" }}>
                <GridItem xs={6} md={2} sm={6}>
                  <img src={pics} alt="logo" className={classes.img} />
                </GridItem>
                <GridItem xs={6} md={4} sm={6}>
                  <a
                    style={{
                      color: "#41D1FF",
                      fontsize: "13px",
                      fontWeight: "700",
                    }}
                  >
                    1.226 Images
                  </a>
                  <a
                    style={{
                      color: "grey",
                      fontSize: "13px",
                      display: "block",
                    }}
                  >
                    2.36 Gb
                  </a>
                </GridItem>
                <GridItem xs={6} md={2} sm={6}>
                  <img src={music} alt="logo" className={classes.img} />
                </GridItem>
                <GridItem xs={6} md={4} sm={6}>
                  <a
                    style={{
                      color: "#41D1FF",
                      fontsize: "13px",
                      fontWeight: "700",
                    }}
                  >
                    1.226 Images
                  </a>
                  <a
                    style={{
                      color: "grey",
                      fontSize: "13px",
                      display: "block",
                    }}
                  >
                    2.36 Gb
                  </a>
                </GridItem>
                <GridItem style={{ margintop: "5px" }} xs={6} md={2} sm={6}>
                  <img src={download} alt="logo" className={classes.img} />
                </GridItem>
                <GridItem style={{ margintop: "5px" }} xs={6} md={4} sm={6}>
                  <a
                    style={{
                      color: "#41D1FF",
                      fontsize: "13px",
                      fontWeight: "700",
                    }}
                  >
                    1.226 Images
                  </a>
                  <a
                    style={{
                      color: "grey",
                      fontSize: "13px",
                      display: "block",
                    }}
                  >
                    2.36 Gb
                  </a>
                </GridItem>
                <GridItem style={{ margintop: "5px" }} xs={6} md={2} sm={6}>
                  <img src={videos} alt="logo" className={classes.img} />
                </GridItem>
                <GridItem style={{ margintop: "5px" }} xs={6} md={4} sm={6}>
                  <a
                    style={{
                      color: "#41D1FF",
                      fontsize: "13px",
                      fontWeight: "700",
                    }}
                  >
                    1.226 Images
                  </a>
                  <a
                    style={{
                      color: "grey",
                      fontSize: "13px",
                      display: "block",
                    }}
                  >
                    2.36 Gb
                  </a>
                </GridItem>
              </GridContainer>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <div
              style={{
                border: "2px solid #E5E5E5",
                padding: "5px",
                borderRadius: "5px",
                background:
                  "linear-gradient(92.86deg, #37E0C2 2.43%, #41D1FF 108.47%)",
              }}
            >
              <a
                style={{
                  marginTop: "10px",
                  marginLeft: "10px",
                  color: "white",
                  fontWeight: "400",
                }}
              >
                Subscription Details
              </a>
              <GridContainer style={{ marginLeft: "7px" }}>
                <GridItem xs={12} md={6} sm={12} style={{ marginLeft: "6px" }}>
                  <h3
                    style={{
                      marginTop: "10px",
                      marginLeft: "15px",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Free Plan
                  </h3>
                  <a
                    style={{
                      marginTop: "10px",
                      marginLeft: "10px",
                      color: "#011464",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    Allowed:
                    <a
                      style={{
                        color: "#011464",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >
                      4Gb
                    </a>
                  </a>
                  <a
                    style={{
                      marginTop: "10px",
                      marginLeft: "10px",
                      color: "#011464",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    Next Billing :
                    <a
                      style={{
                        color: "#011464",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >
                      0$
                    </a>
                  </a>
                  <Button
                    style={{
                      color: "#37E0C2",
                      backgroundColor: "white",
                      marginTop: "15px",
                      marginBottom: "15px",
                      padding: "2px 29px",
                      shadowColor: "#000",
                    }}
                  >
                    Upgrade
                  </Button>
                </GridItem>
                <GridItem xs={12} md={5} sm={12} style={{ marginLeft: "6px" }}>
                  <div style={{ width: "55%", marginBottom: "10px" }}>
                    <CircularProgressbar
                      styles={buildStyles({
                        // Colors
                        pathColor: `#FFDC75`,
                        textColor: "white",
                        trailColor: "#d6d6d6",
                      })}
                      value={value}
                      maxValue={5}
                      text={`${value} Gb`}
                    />
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <div
              style={{
                border: "2px solid rgb(229, 229, 229)",
                padding: "5px",
                borderRadius: "5px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <h5
                  style={{
                    marginTop: "10px",
                    marginLeft: "13px",
                    color: "rgb(1, 20, 100)",
                    fontWeight: "500",
                  }}
                >
                  Last Added Files
                </h5>
                <span style={{ paddingTop: "10px" }}>
                  <a
                    style={{
                      color: "rgb(1, 20, 100)",
                      fontSize: "20px",
                      fontWeight: "500",
                      display: "inline",
                    }}
                  >
                    Files
                  </a>
                  <KeyboardArrowRightIcon
                    style={{ width: "53px", height: "15px" }}
                  />
                </span>
              </div>
              <div className={classes.SendFiles}>
                <img src={photos} alt="logo" style={{ width: "25px" }} />
                <a
                  style={{
                    color: "rgb(1, 20, 100)",
                    fontSize: "15px",
                    fontWeight: "500",
                    display: "inline",
                  }}
                >
                  File name anything_kkmhn2253.jpeg
                </a>
                <a
                  style={{
                    color: "gray",
                    fontSize: "12px",
                    fontWeight: "500",
                    display: "inline",
                  }}
                >
                  12/04/22
                </a>
                <a
                  style={{
                    color: "gray",
                    fontSize: "12px",
                    fontWeight: "500",
                    display: "inline",
                  }}
                >
                  485kb
                </a>
              </div>
              <div className={classes.SendFiles}>
                <img src={photos} alt="logo" style={{ width: "25px" }} />
                <a
                  style={{
                    color: "rgb(1, 20, 100)",
                    fontSize: "15px",
                    fontWeight: "500",
                    display: "inline",
                  }}
                >
                  File name anything_kkmhn2253.jpeg
                </a>
                <a
                  style={{
                    color: "gray",
                    fontSize: "12px",
                    fontWeight: "500",
                    display: "inline",
                  }}
                >
                  12/04/22
                </a>
                <a
                  style={{
                    color: "gray",
                    fontSize: "12px",
                    fontWeight: "500",
                    display: "inline",
                  }}
                >
                  485kb
                </a>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <FolderOpenIcon />
                </CardIcon>
                <p className={classes.cardCategory}>Uploaded</p>
                <h5 className={classes.cardTitle}>13.55Gb</h5>
              </CardHeader>
              <CardFooter stats>
                <div style={{ width: "100%" }}>
                  <LinearProgress variant="determinate" value={50} />
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <ShareIcon />
                </CardIcon>
                <p className={classes.cardCategory}>Shared</p>
                <h5 className={classes.cardTitle}>7.00Gb</h5>
              </CardHeader>
              <CardFooter stats>
                <div style={{ width: "100%" }}>
                  <LinearProgress variant="determinate" value={50} />
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}></GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <div className={classes.chart}>
              <LineChart />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
