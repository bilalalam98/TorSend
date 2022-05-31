/* eslint-disable react/prop-types */
import React from "react";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

// @material-ui/icons
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MenuIcon from "@material-ui/icons/Menu";
// core components

import styles from "assets/jss/material-dashboard-react/components/topNavbarlinksStyle";
import ProfileMenu from "components/DropdownMenu/ProfileMenu";
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
      <div className={classes.managerClasses}>
        <div className={classes.loggedInUser}>
          <h5 className={classes.boldText}>{loggedInName}</h5>
        </div>
        <Hidden mdUp implementation="css">
          <span className={classes.linkText}>{"FullScreen"}</span>
        </Hidden>
      </div>

      <div className={managerClasses}>
        <a
          color="primary"
          aria-label="Person"
          aria-owns={openProfile ? "profile-menu-list" : null}
          aria-haspopup="true"
          onClick={(event) =>
            handleClickProfile(event, openProfile, setOpenProfile)
          }
          muiClasses={{
            label: "",
          }}
        >
          <MenuIcon
            alt="logo"
            size="md"
            className={classes.CustomerSettingIcon}
          />
          {/* <img
            src={PersonOutlineOutlinedIcon}
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
