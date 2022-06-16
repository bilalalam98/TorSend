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
import { useHistory } from "react-router-dom";
import LoginPageImage from "assets/img/LoginPage.jpg";
import CustomizedRadios from "components/Radio";
import { auth } from "utils/apiMethods.js";
import { useFormik } from "formik";
import * as yup from "yup";

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
  register: {
    fontWeight: "600",
    textDecoration: "none",
    textDecorationColor: "#011464",
    cursor: "pointer",
    "@media (max-width: 600px)": {
      color: "white",
    },
  },
}));
const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const loginSchema = yup.object().shape({
    username: yup.string().required("Field is Required"),
    password: yup.string().required("Field is Required"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values, actions) => {
      setLoading(true);
      let body = {
        username: values.username,
        password: values.password,
      };
      try {
        let result = await auth.login(body);
        // localStorage.setItem("token", true);
        history.push("/admin/dashboard");
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    },
    validationSchema: loginSchema,
  });
  const [loading, setLoading] = React.useState(false);
  // const [defaultValues, setDefaultValues] = React.useState({
  //   username: "",
  //   password: "",
  // });

  const Register = () => {
    history.push("/auth/signup");
  };
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={8} md={7}>
        <div className={classes.maindiv}>
          <div className={classes.paper}>
            <Typography className={classes.heading} variant="h5">
              Sign in your account
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                className={
                  formik.touched.username && formik.errors.username
                    ? classes.inputError
                    : classes.input
                }
                onChange={formik.handleChange}
                value={formik.values.username}
                fullWidth
                id="username"
                label="Username"
                name="username"
                error={
                  formik.touched.username && formik.errors.username
                    ? true
                    : false
                }
                autoComplete="username"
                autoFocus
              />
              {formik.touched.username && formik.errors.username && (
                <p className={classes.error}>{formik.errors.username}</p>
              )}
              <TextField
                variant="outlined"
                margin="normal"
                error={
                  formik.touched.password && formik.errors.password
                    ? true
                    : false
                }
                className={
                  formik.touched.password && formik.errors.password
                    ? classes.inputError
                    : classes.input
                }
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {formik.touched.password && formik.errors.password && (
                <p className={classes.error}>{formik.errors.password}</p>
              )}
              <Grid container>
                <Grid item xs>
                  <CustomizedRadios label="Remember me" value="remember" />
                </Grid>
                <Grid item>
                  <Link variant="body2" className={classes.register}>
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                disabled={formik.isSubmitting}
                onClick={formik.handleSubmit}
                className={classes.Button}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <h7 style={{ color: "#aaaaaa" }}>
                    Don&apos;t have an account?{"   "}
                    <Link
                      onClick={Register}
                      variant="body2"
                      className={classes.register}
                    >
                      {"Register"}
                    </Link>
                  </h7>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={5}>
        <img src={LoginPageImage} className={classes.logo} />
      </Grid>
    </Grid>
  );
};
export default Login;
