import React, { useState, useEffect } from "react";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { makeStyles } from "@material-ui/core";

//import styles from "assets/jss/material-dashboard-react/views/DataTableStyle";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import photo from "assets/img/photo.svg";
import video from "assets/img/video.svg";
import DataTableActionMenu from "./DataTableActionMenu";
const useStyles = makeStyles(styles);
const CustomDataTable = () => {
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

  // const customerService = new CustomerService();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <div
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
              17 Apr 2022
            </a>
          </div>
          <div
            className={classes.SendFiles}
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src={video} alt="logo" style={{ width: "25px" }} />
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
            <a
              style={{
                color: "rgb(1, 20, 100)",
                fontSize: "13px",
                fontWeight: "500",
                display: "inline",
              }}
            >
              recepient’smail@gmail.com
            </a>
            <a
              style={{
                color: "rgb(1, 20, 100)",
                fontSize: "13px",
                fontWeight: "500",
                display: "inline",
              }}
            >
              Expires in 2 days
            </a>
            <DataTableActionMenu />
          </div>
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
            <a
              style={{
                color: "rgb(1, 20, 100)",
                fontSize: "13px",
                fontWeight: "500",
                display: "inline",
              }}
            >
              recepient’smail@gmail.com
            </a>
            <a
              style={{
                color: "rgb(1, 20, 100)",
                fontSize: "13px",
                fontWeight: "500",
                display: "inline",
              }}
            >
              Expires in 2 days
            </a>
            <DataTableActionMenu />
          </div>
        </div>
      </GridItem>
    </GridContainer>
  );
};
export default CustomDataTable;
