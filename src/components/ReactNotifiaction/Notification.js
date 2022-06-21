import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Snackbar from "components/Snackbar/Snackbar.js";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import ErrorOutlinedIcon from "@material-ui/icons/ErrorOutlined";
const Notification = (props) => {
  const {
    type,
    title,
    message,
    customClassName,
    timeOut,
    onClick,
    onRequestHide,
  } = props;
  const requestHide = () => {
    if (onRequestHide) {
      onRequestHide();
    }
  };

  const [notificationMsg, setNotificationMsg] = useState("");

  const [notificationIcon, setNotificationIcon] = useState(
    CheckCircleOutlineOutlinedIcon
  );

  const [isNotificationOpen, setNotificationOpen] = useState(true);

  const [notificationColor, setNotificationColor] = useState("");

  useEffect(() => {
    let timer = null;
    if (timeOut !== 0) {
      timer = setTimeout(requestHide, timeOut);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  // THIS USEEEFFECT IS CUSTOMIIZING THE NOTIFICATION BOX A/C TO TYPE
  useEffect(() => {
    if (type === "SUCCESS") {
      setNotificationColor("success");
      setNotificationMsg(`SUCCESS -- ${message}`);
      setNotificationIcon(CheckCircleOutlineOutlinedIcon);
    } else if (type === "ERROR") {
      setNotificationColor("danger");
      setNotificationMsg(`${title} -- ${message}`);
      setNotificationIcon(ErrorOutlinedIcon);
    }
  }, [type]);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    requestHide();
  };

  const className = classnames([
    "notification",
    `notification-${type}`,
    customClassName,
  ]);
  return (
    <div className={className} onClick={() => handleClick()}>
      <div className="notification-message" role="alert">
        <Snackbar
          place="tr"
          color={notificationColor}
          icon={notificationIcon}
          message={notificationMsg}
          open={isNotificationOpen}
          closeNotification={() => setNotificationOpen(!isNotificationOpen)}
          close
        />
      </div>
    </div>
  );
};

Notification.propTypes = {
  type: PropTypes.oneOf(["ERROR", "SUCCESS"]),
  message: PropTypes.node,
  title: PropTypes.node,
  timeOut: PropTypes.number,
  onClick: PropTypes.func,
  onRequestHide: PropTypes.func,
  customClassName: PropTypes.string,
};

Notification.defaultProps = {
  type: "SUCCESS",
  message: null,
  title: null,
  timeOut: 5000,
  onClick: () => {},
  onRequestHide: () => {},
  customClassName: "",
};

export default Notification;
