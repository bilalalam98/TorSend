import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { auth } from "utils/apiMethods.js";
import { useHistory } from "react-router-dom";
import LoginPageImage from "assets/img/LoginPage.jpg";
import CustomizedRadios from "components/Radio";
import { FormLabel, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { NotificationManager } from "components/ReactNotifiaction";
import { apiErrorHandler } from "helpers/apiErrorHandler";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    "@media (max-width: 600px)": {
      background: "#275D9C",
    },
  },
  image: {
    backgroundRepeat: "no-repeat",
    // backgroundColor:
    //   theme.palette.type === "light"
    //     ? theme.palette.grey[50]
    //     : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  maindiv: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  input: {
    "& .MuiInputBase-input": {
      "@media (max-width: 600px)": {
        color: "white",
      },
    },
  },
  inputError: {
    "& .MuiInputBase-input": {
      borderColor: "#fc8181",
      "@media (max-width: 600px)": {
        color: "white",
      },
    },
  },
  error: {
    color: "#fc8181",
    fontSize: "0.75rem",
    textAlign: "left",
    marginTop: "0.25rem",
  },
  paper: {
    width: "67%",
    margin: "0 auto",
    top: "70px",
    display: "flex",
    flexDirection: "column",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  heading: {
    fontWeight: 600,
    textAlign: "left",
    color: "#011464",
  },
  Button: {
    backgroundColor: "#011464",
    color: "white",
    fontSize: "18px",
    width: "100%",
    marginTop: "40px",
    marginBottom: "40px",
    padding: "13px",
  },
  logo: {
    width: "100%",
    height: "100%",
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
  selector: {
    width: "100%",
    height: "54px",
    color: "black",
    "@media (max-width: 600px)": {
      color: "white",
    },
  },
}));

const Signup = () => {
  const classes = useStyles();
  const history = useHistory();
  const SignupSchema = yup.object().shape({
    firstname: yup.string().required("Field is Required"),
    lastname: yup.string().required("Field is Required"),
    email: yup.string().required("Field is Required"),
    password: yup.string().required("Field is Required"),
    country: yup.string().required("Field is Required"),
    //username: yup.string().required("Field is Required"),
    phone_number: yup.number().required("Field is Required"),
    plan_id: yup.number().required("Field is Required"),
  });
  const [loading, setLoading] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      country: "",
      username: "",
      phone_number: "",
      plan_id: 1,
    },
    onSubmit: async (values, actions) => {
      console.log(values);
      setLoading(true);
      let body = {
        email: values.email,
        password: values.password,
        country: values.country,
        fullname: {
          first_name: values.firstname,
          last_name: values.lastname,
        },
        //username: values.firstname + Math.floor(Math.random() * 100),
        phone_number: "0" + values.phone_number,
        plan_id: values.plan_id,
      };
      try {
        console.log(body);
        let result = await auth.register(body);
        if (result.status === 201) {
          NotificationManager.success("User Registered successfully");
          history.push("/auth/signin");
        }
        console.log(result);
      } catch (err) {
        console.log(err);
        apiErrorHandler(err, history);
      }
    },
    validationSchema: SignupSchema,
  });
  // const [plan, setPlan] = React.useState("Plans");

  // const handleChange = (event) => {
  //   setPlan(event.target.value);
  //   console.log(event.target.value);
  //   setDefaultValues({
  //     ...defaultValues,
  //     username: event.target.value,
  //   });
  // };
  return (
    <Grid container className={classes.root}>
      <Grid item xs={0} sm={4} md={5}>
        <img src={LoginPageImage} className={classes.logo} />
      </Grid>
      <Grid item xs={12} sm={8} md={7}>
        <div className={classes.maindiv}>
          <div className={classes.paper}>
            <Typography className={classes.heading} variant="h5">
              Signup
            </Typography>
            <form className={classes.form} noValidate>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    id="firstname"
                    label="First Name"
                    name="firstname"
                    autoComplete="firstname"
                    autoFocus
                    className={
                      formik.touched.firstname && formik.errors.firstname
                        ? classes.inputError
                        : classes.input
                    }
                    value={formik.values.firstname}
                    error={
                      formik.touched.firstname && formik.errors.firstname
                        ? true
                        : false
                    }
                    onChange={formik.handleChange}
                    style={{ width: "100%" }}
                  />
                  {formik.touched.firstname && formik.errors.firstname && (
                    <p className={classes.error}>{formik.errors.firstname}</p>
                  )}
                </span>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    autoComplete="lastname"
                    className={
                      formik.touched.lastname && formik.errors.lastname
                        ? classes.inputError
                        : classes.input
                    }
                    value={formik.values.lastname}
                    error={
                      formik.touched.lastname && formik.errors.lastname
                        ? true
                        : false
                    }
                    onChange={formik.handleChange}
                    autoFocus
                    style={{ width: "100%" }}
                  />
                  {formik.touched.lastname && formik.errors.lastname && (
                    <p className={classes.error}>{formik.errors.lastname}</p>
                  )}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    id="country"
                    label="Country"
                    className={
                      formik.touched.country && formik.errors.country
                        ? classes.inputError
                        : classes.input
                    }
                    value={formik.values.country}
                    error={
                      formik.touched.country && formik.errors.country
                        ? true
                        : false
                    }
                    onChange={formik.handleChange}
                    name="country"
                    autoComplete="country"
                    autoFocus
                    style={{ width: "45%" }}
                  />
                  {formik.touched.country && formik.errors.country && (
                    <p className={classes.error}>{formik.errors.country}</p>
                  )}
                </span>
              </div>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                type="number"
                id="phone_number"
                label="PhoneNumber"
                className={
                  formik.touched.phone_number && formik.errors.phone_number
                    ? classes.inputError
                    : classes.input
                }
                value={formik.values.phone_number}
                error={
                  formik.touched.phone_number && formik.errors.phone_number
                    ? true
                    : false
                }
                onChange={formik.handleChange}
                name="phone_number"
                autoComplete="phone_number"
                autoFocus
              />
              {formik.touched.phone_number && formik.errors.phone_number && (
                <p className={classes.error}>{formik.errors.phone_number}</p>
              )}
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                className={
                  formik.touched.email && formik.errors.email
                    ? classes.inputError
                    : classes.input
                }
                value={formik.values.email}
                error={
                  formik.touched.email && formik.errors.email ? true : false
                }
                onChange={formik.handleChange}
                name="email"
                autoComplete="email"
                autoFocus
              />
              {formik.touched.email && formik.errors.email && (
                <p className={classes.error}>{formik.errors.email}</p>
              )}
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                className={
                  formik.touched.password && formik.errors.password
                    ? classes.inputError
                    : classes.input
                }
                value={formik.values.password}
                error={
                  formik.touched.password && formik.errors.password
                    ? true
                    : false
                }
                onChange={formik.handleChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {formik.touched.password && formik.errors.password && (
                <p className={classes.error}>{formik.errors.password}</p>
              )}
              <FormLabel style={{ marginTop: "16px " }} component="legend">
                Select Plan
              </FormLabel>
              <Select
                className={classes.selector}
                variant="outlined"
                name="plan_id"
                labelId="demo-simple-select-outlined-label"
                Id="demo-simple-select-outlined-label"
                // className={
                //   formik.touched.plan_id && formik.errors.plan_id
                //     ? classes.inputError
                //     : classes.input
                // }
                value={formik.values.plan_id}
                error={
                  formik.touched.plan_id && formik.errors.plan_id ? true : false
                }
                onChange={formik.handleChange}
              >
                <MenuItem value="0">Free</MenuItem>
                <MenuItem value="1">Pro</MenuItem>
                <MenuItem value="3">Premium</MenuItem>
              </Select>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                disabled={formik.isSubmitting}
                onClick={formik.handleSubmit}
                className={classes.Button}
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
export default Signup;
