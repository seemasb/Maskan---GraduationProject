import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//   },
//   button: {
//     marginTop: theme.spacing(1),
//     marginRight: theme.spacing(1),
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
// }));

const steps = ["Basic Information", "Location Details", "Price"];

const initialValues = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  price: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zip: Yup.string().required("Required"),
  price: Yup.string().required("Required"),
});

export default function Sell() {
  // const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setCompleted(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(false);
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {completed ? (
        <div>
          <Typography>
            Your home has been added successfully!
          </Typography>
          <Button onClick={handleReset}>Add another home</Button>
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              handleNext();
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              {activeStep === 0 && (
                <>
                  <Typography>
                    Please enter the basic information about your home.
                  </Typography>
                  <Field
                    component={TextField}
                    name="name"
                    label="Name"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="address"
                    label="Address"
                    fullWidth
                  />
                </>
              )}
              {activeStep === 1 && (
                <>
                  <Typography >
                    Please enter the location details about your home.
                  </Typography>
                  <Field
                    component={TextField}
                    name="city"
                    label="City"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="state"
                    label="State"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="zip"
                    label="Zip"
                    fullWidth
                  />
                </>
              )}
              {activeStep === 2 && (
                <>
                  <Typography >
                    Please enter the price of your home.
                  </Typography>
                  <Field
                    component={TextField}
                    name="price"
                    label="Price"
                    fullWidth
                  />
                </>
              )}
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}

                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"

                  disabled={isSubmitting}
                >
                  {activeStep === steps.length - 1 ? "Add" : "Next"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  )
}

