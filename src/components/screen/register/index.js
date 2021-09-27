import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style";
import Container from "@material-ui/core/Container";

const Register = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [middelName, setMiddelName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [code, setCode] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [guardianFullname, setGuardianFullname] = useState("");
  const [guardianPhoneNumber, setGuardianPhoneNumber] = useState("");

  const handleClickEvent = (event) => {
    event.preventDefault();

    const data = {
      firstName: firstName,
      middelName: middelName,
      lastName: lastName,
      dob: dob,
      age: age,
      address: address,
      city: city,
      state: state,
      code: code,
      contactNumber: contactNumber,
      guardianFullname: guardianFullname,
      guardianPhoneNumber: guardianPhoneNumber,
    };
    window.localStorage.setItem("NewUser", JSON.stringify(data));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Patient’s Info
        </Typography>
        <form className={classes.form} onSubmit={handleClickEvent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label>First Name</label>
              <input
                className={classes.field}
                variant="outlined"
                fullWidth
                id="firstName"
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                name="firstName"
                value={firstName}
              />
            </Grid>

            <Grid item xs={12}>
              <label>Last Name</label>
              <input
                className={classes.field}
                variant="outlined"
                fullWidth
                onChange={(e) => setLastName(e.target.value)}
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Middel Name</label>
              <input
                className={classes.field}
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                onChange={(e) => setMiddelName(e.target.value)}
                name="email"
                value={middelName}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Date Of Birth</label>

              <input
                className={classes.field}
                variant="outlined"
                fullWidth
                onChange={(e) => setDob(e.target.value)}
                name="dob"
                label="dob"
                type="date"
                id="dob"
                value={dob}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Age</label>
              <input
                className={classes.field}
                variant="outlined"
                fullWidth
                id="age"
                label="age"
                onChange={(e) => setAge(e.target.value)}
                name="age"
                value={age}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Address</label>
              <input
                className={classes.field}
                variant="outlined"
                fullWidth
                id="address"
                label="address"
                onChange={(e) => setAddress(e.target.value)}
                name="address"
                value={address}
              />
            </Grid>
            <Grid item xs={12}>
              <label>City</label>
              <input
                className={classes.field}
                variant="outlined"
                fullWidth
                id="city"
                label="city"
                onChange={(e) => setCity(e.target.value)}
                name="city"
                value={city}
              />
            </Grid>
            <Grid item xs={12}>
              <label>State</label>
              <input
                className={classes.field}
                variant="outlined"
                fullWidth
                id="state"
                label="state"
                onChange={(e) => setState(e.target.value)}
                name="state"
                value={state}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Code</label>
              <input
                className={classes.field}
                variant="outlined"
                fullWidth
                id="code"
                label="code"
                onChange={(e) => setCode(e.target.value)}
                name="code"
                value={code}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Contact Number</label>
              <input
                className={classes.field}
                variant="outlined"
                fullWidth
                id="contactNumber"
                label="contactNumber"
                onChange={(e) => setContactNumber(e.target.value)}
                name="contactNumber"
                value={contactNumber}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Contact Number</label>
              <input
                className={classes.field}
                variant="outlined"
                fullWidth
                id="guardianFullname"
                label="guardianFullname"
                onChange={(e) => setGuardianFullname(e.target.value)}
                name="guardianFullname"
                value={guardianFullname}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Guardian PhoneNumber</label>
              <input
                className={classes.field}
                variant="outlined"
                fullWidth
                id="guardianPhoneNumber"
                label="guardianPhoneNumber"
                onChange={(e) => setGuardianPhoneNumber(e.target.value)}
                name="guardianPhoneNumber"
                value={guardianPhoneNumber}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // disabled={!userEmail || !userPassword}
          >
            Submit
          </Button>
        </form>
        <Route path="/" exact />
      </div>
      <Box mt={5} className={classes.center}>
        <Typography> Thank You</Typography>
      </Box>
    </Container>
  );
};

export default Register;
