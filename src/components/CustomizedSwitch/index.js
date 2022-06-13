import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 14,
    padding: 0,
    overflow: "inherit !important",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: "#41D1FF !important",
        borderColor: "#41D1FF !important",
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
    // "&:focus": {
    //   backgroundColor: "#41D1FF",
    // },
  },
  checked: {
    "& track": {
      backgroundColor: "#41D1FF !important",
    },
  },
}))(Switch);

export default function CustomizedSwitch() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <AntSwitch
              checked={state.checkedC}
              onChange={handleChange}
              name="checkedC"
            />
          </Grid>
        </Grid>
      </Typography>
      {/* <FormControlLabel
        control={
          <PurpleSwitch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
          />
        }
        label="Custom color"
      />
      <FormControlLabel
        control={
          <IOSSwitch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
          />
        }
        label="iOS style"
      /> */}
    </FormGroup>
  );
}
