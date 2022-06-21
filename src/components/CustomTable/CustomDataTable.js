import React, { useState, useEffect } from "react";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

//import styles from "assets/jss/material-dashboard-react/views/DataTableStyle";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import photo from "assets/img/photo.svg";
import video from "assets/img/video.svg";
import DataTableActionMenu from "./DataTableActionMenu";
const useStyles = makeStyles(styles);
const CustomDataTable = ({ data }) => {
  const classes = useStyles();
  const [customers1, setCustomers1] = useState([]);
  const [first1, setFirst1] = useState(0);
  const [rows1, setRows1] = useState(10);
  const [first2, setFirst2] = useState(0);
  const [rows2, setRows2] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInputTooltip, setPageInputTooltip] = useState(
    "Press 'Enter' key to go to this page."
  );
  console.log(data);
  // const customerService = new CustomerService();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        {data &&
          data.map((item, id) => {
            return (
              <div
                key={item[0]}
                style={{
                  border: "2px solid rgb(229, 229, 229)",
                  padding: "2px",
                  borderRadius: "5px",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    width: "95px",
                    height: "23px",
                    marginLeft: "26px",
                    marginTop: "12px",
                    marginBottom: "13px",
                    textAlign: "center",
                    background: "#EBEBEB",
                    borderRadius: "15px",
                  }}
                >
                  <a
                    style={{
                      color: "#011464",
                      fontWeight: "400",
                      display: "inline",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    {item[0]}
                  </a>
                </div>
                {item[1].map((row, id) => {
                  console.log(row);
                  let expiryArray = row.metadata.Expiration.split(" ");
                  console.log(expiryArray);
                  let expiryDate =
                    expiryArray[1] +
                    "/" +
                    expiryArray[2] +
                    "/" +
                    expiryArray[3];
                  let fileNameArray = row.metadata.key.split("/");
                  let fileName = fileNameArray[1];
                  console.log(fileNameArray);
                  return (
                    <span key={id}>
                      <div
                        className={classes.SendFiles}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <img src={photo} alt="logo" style={{ width: "25px" }} />
                        <a
                          style={{
                            color: "rgb(1, 20, 100)",
                            fontSize: "15px",
                            fontWeight: "500",
                            display: "inline",
                          }}
                        >
                          {`File name ${fileName}`}
                        </a>
                        <a
                          style={{
                            color: "gray",
                            fontSize: "12px",
                            fontWeight: "500",
                            display: "inline",
                          }}
                        >
                          {row.added_in_db}
                        </a>
                        <a
                          style={{
                            color: "gray",
                            fontSize: "12px",
                            fontWeight: "500",
                            display: "inline",
                          }}
                        >
                          {row.size}
                        </a>
                        <a
                          style={{
                            color: "rgb(1, 20, 100)",
                            fontSize: "13px",
                            fontWeight: "500",
                            display: "inline",
                          }}
                        >
                          {row.metadata.to_email}
                        </a>
                        <a
                          style={{
                            color: "rgb(1, 20, 100)",
                            fontSize: "13px",
                            fontWeight: "500",
                            display: "inline",
                          }}
                        >
                          {`Expires in ${expiryDate}`}
                        </a>
                        <DataTableActionMenu />
                      </div>
                    </span>
                  );
                })}
              </div>
            );
          })}
      </GridItem>
    </GridContainer>
  );
};
export default CustomDataTable;

CustomDataTable.propTypes = {
  data: PropTypes.Array,
};
