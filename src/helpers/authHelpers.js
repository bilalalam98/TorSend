//import jwtDecode from "jwt-decode";

export const isInFullScreenFn = () => {
  return (
    (document.fullscreenElement && document.fullscreenElement !== null) ||
    (document.webkitFullscreenElement &&
      document.webkitFullscreenElement !== null) ||
    (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
    (document.msFullscreenElement && document.msFullscreenElement !== null)
  );
};

export const toggleFullScreen = (setIsInFullScreen) => {
  const isFS = isInFullScreenFn();

  const docElm = document.documentElement;
  if (!isFS) {
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen();
    } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
    }
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  setIsInFullScreen(!isFS);
};

export const handleClickProfile = (event, openProfile, setOpenProfile) => {
  if (openProfile && openProfile.contains(event.target)) {
    setOpenProfile(null);
  } else {
    setOpenProfile(event.currentTarget);
  }
};
export const handleCloseProfile = (history, setOpenProfile) => {
  localStorage.clear();
  history.push("/auth/signin");
  setOpenProfile(null);
};

export const handleClickAway = (setOpenProfile) => {
  setOpenProfile(null);
};

export const handleClickNotifications = (
  event,
  openNotifications,
  setOpenNotifications
) => {
  if (openNotifications && openNotifications.contains(event.target)) {
    setOpenNotifications(null);
  } else {
    setOpenNotifications(event.currentTarget);
  }
};
export const handleCloseNotifications = (setOpenNotifications) => {
  setOpenNotifications(null);
};

export const getLoggedInName = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    //  const decodedToken = jwtDecode(token);
    const firstName = "Bilal";
    const lastName = "Alam";

    return firstName + " " + lastName;
  }

  // IF NO TOKEN IS NULL, RETURN FALSE
  return false;
};

export const getRole = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    const decodedToken = {
      email: "abdul.ahad@intelligenes.net",
      given_name: "9cf27979-40b4-464c-9ceb-3f043bb48060",
      userid: "9cf27979-40b4-464c-9ceb-3f043bb48060",
      customerid: "221",
      role: "admin",
      firstname: "Bilal",
      lastname: "Alam",
      exp: 1637589389,
      iss: "http://localhost:44363",
      aud: "http://localhost:44363",
    };
    const role = decodedToken.role;
    return role;
  }
  return false;
};

export const filterInquiryTypeName = (data, inquiryParamId) => {
  let index = data.InquiryTypeIds.findIndex(
    (item) => item === Number(inquiryParamId)
  );
  return data.InquiryTypeNames[index];
};
