import React, { useEffect } from "react";
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
import { dashboard } from "utils/apiMethods";
import { apiErrorHandler } from "helpers/apiErrorHandler";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(styles);
const SentFiles = () => {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const classes = useStyles();
  const getFiles = async () => {
    try {
      setLoading(true);
      let result = await dashboard.getAllFiles();
      if (result?.status === 200 || result?.status === 201) {
        console.log(Object.entries(result?.data?.data));
        let data = Object.entries(result?.data?.data);
        setData(data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      apiErrorHandler(err, history);
    }
  };
  useEffect(() => {
    //getallfiles
    getFiles();
  }, []);
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
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <CircularProgress width={100} color="rgb(65, 209, 255)" />
              </div>
            ) : (
              <CustomDataTable data={data && data} />
            )}
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
