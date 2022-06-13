import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import styles from "assets/jss/material-dashboard-react/views/SettingPageStyle";
import { Button, FormLabel, Grid, Select, TextField } from "@material-ui/core";
import SearchField from "components/SearchField";
import Layout from "views/Layout";
import SettingTabs from "./SettingTabs";

const useStyles = makeStyles(styles);
const SettingPage = () => {
  const classes = useStyles();

  return (
    <div
      style={{
        top: "40px",
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        borderRadius: "2px",
        padding: "10px",
        zIndex: 9,
        position: "relative",
      }}
    >
      <GridContainer>
        <Grid
          xs={12}
          sm={12}
          md={12}
          style={{ marginBottom: "30px", padding: "5px" }}
        >
          <span style={{ paddingLeft: "8px" }}>
            <a style={{ color: "#011464", fontWeight: 400 }}>SETTINGS</a>
          </span>
          <SettingTabs style={{ width: "100%", height: "100%" }} />
        </Grid>
      </GridContainer>
    </div>
  );
};
export default SettingPage;
SettingPage.propTypes = {
  Content: PropTypes.func,
};
