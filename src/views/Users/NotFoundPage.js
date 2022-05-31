import React from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { makeStyles } from "@material-ui/core";
import Button from "components/CustomButtons/Button";
import { useHistory } from "react-router-dom";

const NotFoundPage = () => {
  const history = useHistory();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <GridItem xs={12} sm={12} md={12}>
          <h1>Page 404 not found</h1>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <h1>The page you requested is not found.</h1>
        </GridItem>
        <GridItem xs={12} md={12} sm={12}>
          <Button
            color="primary"
            round
            size="lg"
            muiClasses={{
              label: "",
            }}
            onClick={() => history.goBack()}
          >
            Go Back
          </Button>
          <Button
            color="primary"
            round
            size="lg"
            muiClasses={{
              label: "",
            }}
            onClick={() => history.push("/auth/signin")}
          >
            Go to Login
          </Button>
        </GridItem>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <h1>Welcome to App</h1>
      </GridItem>
    </GridContainer>
  );
};

export default NotFoundPage;
