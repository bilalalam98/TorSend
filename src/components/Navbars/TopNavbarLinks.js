/* eslint-disable react/prop-types */
import React from "react";
import classNames from "classnames";
import pic from "assets/img/faces/Profilepic.PNG";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

// @material-ui/icons
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
// core components

import styles from "assets/jss/material-dashboard-react/components/topNavbarlinksStyle";
import ProfileMenu from "components/DropdownMenu/ProfileMenu";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { getLoggedInName, handleClickProfile } from "helpers/authHelpers";

// import SVG
// import { ReactComponent as Logo } from "assets/img/activateImages/full-screen-exit.svg";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const loggedInName = "Bilal Alam";
  const [isInFullScreen, setIsInFullScreen] = React.useState(false);

  const [openProfile, setOpenProfile] = React.useState(null);

  const [openNotifications, setOpenNotifications] = React.useState(null);

  const classes = useStyles();

  const wrapper = classNames({});
  const managerClasses = classNames({
    [classes.managerClasses]: true,
  });

  const logoMini = classes.logoMini;
  const logoClasses = classes.logo;
  return (
    <div className={wrapper}>
      <div
        className={managerClasses}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div className={classes.managerClasses}>
          <div className={classes.loggedInUser}>
            <NotificationsNoneIcon
              fontSize="large"
              style={{
                marginRight: "10px",
                width: "25px",
                height: "22px",
                cursor: "pointer",
              }}
              color="white"
            />
            <span className={classes.boldText}>{loggedInName}</span>
          </div>
          <Hidden mdUp implementation="css">
            <span className={classes.linkText}>{"FullScreen"}</span>
          </Hidden>
        </div>
        <a
          color="primary"
          aria-label="Person"
          aria-owns={openProfile ? "profile-menu-list" : null}
          aria-haspopup="true"
          style={{
            cursor: "pointer",
          }}
          onClick={(event) =>
            handleClickProfile(event, openProfile, setOpenProfile)
          }
          muiClasses={{
            label: "",
          }}
        >
          <Avatar
            alt="logo"
            src={pic}
            size="md"
            style={{
              cursor: "pointer",
            }}
            className={classes.CustomerSettingIcon}
          />
          {/* <img
            src={pic}
            alt="logo"
            size="md"
            
            className={classes.CustomerSettingIcon}
          /> */}
          <Hidden mdUp implementation="css">
            <span
              onClick={() =>
                handleClickProfile(event, openProfile, setOpenProfile)
              }
              className={classes.linkText}
            >
              {"Profile"}
            </span>
          </Hidden>
        </a>

        <ProfileMenu
          openProfile={openProfile}
          setOpenProfile={setOpenProfile}
        />
      </div>
    </div>
  );
}
