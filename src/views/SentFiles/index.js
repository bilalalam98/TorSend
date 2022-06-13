import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import styles from "assets/jss/material-dashboard-react/views/SentFilesStyles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);
const SentFiles = () => {
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
            <a style={{ color: "#011464", fontWeight: 400 }}>Sent Files</a>
          </span>
        </Grid>
      </GridContainer>
    </div>
  );
};
export default SentFiles;
SentFiles.propTypes = {
  Content: PropTypes.func,
};
