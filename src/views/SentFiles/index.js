import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import styles from "assets/jss/material-dashboard-react/views/SentFilesStyles";
import { Button, Grid } from "@material-ui/core";
import SearchField from "components/SearchField";
import CustomDataTable from "components/CustomTable/CustomDataTable";

const useStyles = makeStyles(styles);
const SentFiles = () => {
  const classes = useStyles();
  return (
    <>
      <GridContainer>
        {" "}
        <GridItem xs={12} sm={12} md={6} style={{ marginBottom: "30px" }}>
          <Button className={classes.SendButton}>
            <CloudUploadIcon
              style={{ marginRight: "12px", marginBottom: "4px" }}
            />
            Upload Files
          </Button>
        </GridItem>{" "}
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
              <a
                style={{ color: "#011464", fontWeight: 400, fontSize: "20px" }}
              >
                Sent Files
              </a>
            </span>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={12}
            style={{ marginBottom: "30px", padding: "5px", width: "100%" }}
          >
            <CustomDataTable />
          </Grid>
        </GridContainer>
      </div>
    </>
  );
};
export default SentFiles;
SentFiles.propTypes = {
  Content: PropTypes.func,
};
