import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import PropTypes from "prop-types";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { Button, TextField } from "@material-ui/core";
import ModalTabs from "./ModalTabs";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    //boxShadow: theme.shadows[5],
  },
}));

export default function DashboardModal({ openModal, setOpenModal }) {
  const classes = useStyles();

  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div
            className={classes.paper}
            // style={{ backgroundColor: "transparent" }}
          >
            <GridContainer style={{ display: "flex" }}>
              <GridItem xs={3} md={3} />
              <GridItem
                xs={4}
                sm={6}
                md={4}
                // style={{ border: "2px solid black" }}
              >
                <div
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "5px",
                    // border: "2px solid black",
                    marginBottom: "10px",
                  }}
                >
                  <ModalTabs />
                  <form
                    className={classes.form}
                    noValidate
                    style={{ padding: "14px" }}
                  >
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Email"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      style={{ marginBottom: "6px" }}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Sender Name"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      style={{ marginBottom: "6px" }}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Recipient Email"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      style={{ marginBottom: "6px" }}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Subject"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      style={{ marginBottom: "6px" }}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Message"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      style={{ marginBottom: "6px" }}
                    />
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      // onClick={SingupComplete}
                      className={classes.Button}
                    >
                      Transfer
                    </Button>
                  </form>
                </div>
              </GridItem>
              <GridItem
                xs={3}
                sm={6}
                md={3}
                //style={{ border: "2px solid black" }}
              >
                <div
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "5px",
                    // border: "2px solid black",
                    padding: "12px",
                  }}
                >
                  <div
                    style={{
                      background:
                        "linear-gradient(92.86deg, #37E0C2 2.43%, #41D1FF 108.47%)",
                      display: "flex",
                      borderRadius: "5px",
                      justifyContent: "center",
                      padding: "12px",
                    }}
                  >
                    <AddCircleOutlineIcon fontSize="large" color="white" />
                    <span
                      style={{
                        marginLeft: "15px",
                        dispaly: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <a
                        style={{
                          color: "white",
                          fontSize: "15px",
                          fontWeight: "600",
                          display: "inline",
                        }}
                      >
                        Upload files
                      </a>
                      <p
                        style={{
                          color: "white",
                          fontSize: "10px",
                          fontWeight: "400",
                          margin: "0px",
                        }}
                      >
                        or select a file
                      </p>
                    </span>
                  </div>
                  <div
                    style={{
                      margin: "0px",
                      display: "flex",
                      justifyContent: "space-around",
                      marginTop: "15px",
                      marginBottom: "15px",
                    }}
                  >
                    <a
                      style={{
                        color: "black",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      3 Files
                      <a
                        style={{
                          color: "black",
                          fontSize: "17px",
                          fontWeight: "400",
                        }}
                      >
                        {`(365Kb)`}
                      </a>
                    </a>
                    <DeleteForeverIcon fontSize="medium" color="red" />
                  </div>
                  <hr
                    style={{
                      color: "grey",
                      backgroundColor: "grey",
                      opacity: 0.3,
                      height: 1,
                    }}
                  />
                  <div
                    style={{
                      margin: "0px",
                      marginLeft: "15px",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "400",
                        fontsize: "11px",
                        color: "#404040",
                      }}
                    >
                      Lorem ipsum file.png
                    </p>
                    <p
                      style={{
                        fontWeight: "400",
                        fontsize: "11px",
                        color: "#404040",
                      }}
                    >
                      Lorem ipsum file.png
                    </p>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
DashboardModal.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
};
