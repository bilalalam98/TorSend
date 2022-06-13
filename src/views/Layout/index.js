import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Button, FormLabel, Select, TextField } from "@material-ui/core";
import SearchField from "components/SearchField";

const useStyles = makeStyles(styles);
const Layout = ({ Content, SendButton, SearchField }) => {
  const classes = useStyles();

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6} style={{ marginBottom: "30px" }}>
          {SendButton ? (
            <Button className={classes.SendButton}>
              <CloudUploadIcon
                style={{ marginRight: "12px", marginBottom: "4px" }}
              />
              Send Files
            </Button>
          ) : null}
        </GridItem>
        <GridItem
          xs={12}
          sm={12}
          md={6}
          style={{ display: "flex", justifyContent: "flex-end", zIndex: "10" }}
        >
          {SearchField ? (
            <div className={classes.seearchField}>
              <SearchField
                style={{
                  width: "100%",
                  height: "100%",
                  marginTop: "10px",
                }}
              />
            </div>
          ) : null}
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
        {Content}
      </div>
    </div>
  );
};
export default Layout;
Layout.propTypes = {
  Content: PropTypes.func,
  SendButton: PropTypes.bool,
  SearchField: PropTypes.bool,
};
