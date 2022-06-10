import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    smallRadioButton: {
      "& svg": {
        width: "3em",
        height: "3em",
        border: "1px solif black ",
      },
    },
  })
);

function SelectPlanRadio(props) {
  const classes = useStyles();
  const [state, setState] = React.useState("correct");

  return (
    <RadioGroup value={state} onChange={(e) => setState(e.target.value)} row>
      <FormControlLabel
        value="yearly"
        control={<Radio color="primary" />}
        labelPlacement="right"
        className={classes.smallRadioButton}
      />
      <a
        style={{
          fontSize: "20px",
          color: "white",
          marginTop: "30px",
          marginRight: "20px",
          fontWeight: "500",
        }}
      >
        Yearly Billing
      </a>
      <FormControlLabel
        value="monthly"
        control={<Radio color="primary" />}
        labelPlacement="right"
        className={classes.smallRadioButton}
      />
      <a
        style={{
          fontSize: "20px",
          color: "white",
          marginTop: "30px",
          fontWeight: "500",
        }}
      >
        Monthly Billing
      </a>
    </RadioGroup>
  );
}

export default SelectPlanRadio;
