/* eslint-disable react/prop-types */
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// importing core modules
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core";
// importing useHistory from react-router-dom
import { useHistory } from "react-router";

// importing styles from jss file
import styles from "assets/jss/material-dashboard-react/components/topNavbarlinksStyle";
import { handleClickAway, handleCloseProfile } from "helpers/authHelpers";
import { getRole } from "helpers/authHelpers";

// logoutRound

const useStyles = makeStyles(styles);

const ProfileMenu = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const role = getRole();

  const { openProfile, setOpenProfile } = props;
  const dropdownItem = classNames(
    classes.dropdownItem,
    classes.primaryHover,
    {}
  );

  const setAuthenticated = true;

  return (
    <Popper
      open={Boolean(openProfile)}
      anchorEl={openProfile}
      transition
      disableSuperAdmin
      placement="bottom"
      className={classNames({
        [classes.popperClose]: !openProfile,
        [classes.popperResponsive]: true,
        [classes.popperNav]: true,
      })}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          id="profile-menu-list"
          style={{ transformOrigin: "0 0 0", padding: "0px" }}
        >
          <Paper className={classes.dropdown}>
            <ClickAwayListener
              onClickAway={() => handleClickAway(setOpenProfile)}
            >
              <MenuList role="menu">
                <MenuItem
                  style={{ fontSize: "16px", fontWeight: "600" }}
                  onClick={() =>
                    handleCloseProfile(
                      history,
                      setOpenProfile,
                      setAuthenticated
                    )
                  }
                  className={dropdownItem}
                >
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      padding: "5px",
                    }}
                  >
                    {/* <img src={MenuIcon} alt="Box Logo" height="25" /> */}
                    <MenuIcon
                      alt="logo"
                      fontSize="small"
                      className={classes.CustomerSettingIcon2}
                    />
                    <a
                      style={{
                        fontSize: "17px",
                        fontWeight: "600",
                        color: "inherit",
                      }}
                    >
                      Logout
                    </a>
                  </span>
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default ProfileMenu;

ProfileMenu.propTypes = {
  openProfle: PropTypes.bool,
  setOpenProfile: PropTypes.bool,
};
