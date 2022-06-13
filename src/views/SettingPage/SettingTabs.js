import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import GridContainer from "components/Grid/GridContainer";
import { Button, Grid, TextField } from "@material-ui/core";
import ImageUploading from "react-images-uploading";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import CustomizedSwitch from "components/CustomizedSwitch";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  function getImageFileObject(imageFile) {
    console.log({ imageFile });
  }
  function runAfterImageDelete(file) {
    console.log({ file });
  }
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background,
  },
  header: {
    backgroundColor: "white !important",
    boxShadow: "none !important ",
    borderBottom: "1px solid black",
    "& .MuiAppBar-colorDefault": {
      backgroundColor: "white",
    },
  },
  selected: {
    "& .MuiTab-textColorPrimary .Mui-selected": {
      color: "black",
    },
  },
  avatar: {
    width: "120px",
    height: "120px",
    color: "white",
    background: "#238ca5",
    "&:hover": {
      opacity: "0.2",
    },
  },
  input: {
    // border: "1px solid rgba(1, 20, 100, 0.2)",
    // borderRadius: "10px",#238ca5
    "& .MuiInputBase-input": {
      //   "&:focus": {
      //     border: "2px solid #238ca5",
      //   },
      //   "@media (max-width: 600px)": {
      //     color: "white",
      //   },
    },
  },
}));

export default function SettingTabs() {
  const classes = useStyles();
  const [images, setImages] = React.useState(null);
  const maxNumber = 1;
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    if (addUpdateIndex === undefined) {
      setImages(null);
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.header}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="General Setting" {...a11yProps(0)} />
          <Tab label="Notification Setting" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <GridContainer
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              padding: "15px",
            }}
          >
            <Grid xs={12} sm={12} md={12}>
              <span style={{ padding: "10px" }}>
                <a
                  style={{
                    color: "#404040",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Profile Setting
                </a>
              </span>
              <div style={{ marginTop: "30px", marginLeft: "8px" }}>
                <ImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                      {images == null ? (
                        <button
                          style={{
                            borderRadius: "100%",
                            width: "120px",
                            height: "120px",
                            border: "none",
                            backgroundColor: "transparent",
                            cursor: "pointer",
                          }}
                          onClick={onImageUpload}
                          {...dragProps}
                        >
                          <Tooltip title="Upload Picture">
                            <Avatar className={classes.avatar} />
                          </Tooltip>
                        </button>
                      ) : null}
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          {/* <img src={image["data_url"]} alt="" width="100" /> */}
                          <Avatar
                            src={image["data_url"]}
                            style={{
                              width: "120px",
                              height: "120px",
                            }}
                          />
                          <div className="image-item__btn-wrapper">
                            <button
                              style={{
                                background: "#41D1FF",
                                color: "white",
                                borderRadius: "5px",
                                padding: "4px 10px",
                                border: "none",
                                cursor: "pointer",
                              }}
                              onClick={() => onImageUpdate(index)}
                            >
                              Update
                            </button>
                            <button
                              style={{
                                background: "#FFB4B4",
                                color: "white",
                                borderRadius: "5px",
                                padding: "5px 7px",
                                marginLeft: "5px",
                                cursor: "pointer",
                                border: "none",
                              }}
                              onClick={onImageRemoveAll}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ImageUploading>
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={5}>
              <TextField
                variant="outlined"
                margin="normal"
                className={classes.input}
                required
                fullWidth
                id="email"
                label="First Name"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                className={classes.input}
                fullWidth
                name="password"
                label="Email"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                className={classes.input}
                fullWidth
                name="password"
                label="New Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid xs={12} sm={12} md={1}></Grid>
            <Grid xs={12} sm={12} md={5}>
              <TextField
                variant="outlined"
                margin="normal"
                className={classes.input}
                required
                fullWidth
                id="email"
                label="Last Name"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                className={classes.input}
                fullWidth
                name="password"
                label="Old Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </GridContainer>
          <br />
          <GridContainer
            style={{
              borderRadius: "2px",
              padding: "15px",
            }}
          >
            <Grid xs={12} sm={12} md={6}>
              <span>
                <Button
                  style={{
                    background: "#011464",
                    borderRadius: "10px",
                    color: "white",
                    width: "40%",
                    height: "65px",
                  }}
                >
                  Save Information
                </Button>
              </span>
            </Grid>
            <Grid xs={12} sm={12} md={6}>
              {" "}
              <span style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  style={{
                    background: "#FFB4B4",
                    color: "white",
                    borderRadius: "5px",
                    padding: "5px 7px",
                    marginLeft: "5px",
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  close account
                </button>
              </span>
            </Grid>
          </GridContainer>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <GridContainer
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              padding: "15px",
            }}
          >
            <Grid xs={12} sm={12} md={12}>
              <span style={{ padding: "10px" }}>
                <a
                  style={{
                    color: "#404040",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Notification Settings
                </a>
              </span>
              <span
                style={{
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <a
                  style={{
                    color: "#404040",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  Notify every update through email
                </a>
                <span>
                  <CustomizedSwitch />
                </span>
              </span>
              <span
                style={{
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <a
                  style={{
                    color: "#404040",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  Send me newsletter
                </a>
                <span>
                  <CustomizedSwitch />
                </span>
              </span>
              <span
                style={{
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <a
                  style={{
                    color: "#404040",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  Send me offers and discounts
                </a>
                <span>
                  <CustomizedSwitch />
                </span>
              </span>
            </Grid>
          </GridContainer>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
