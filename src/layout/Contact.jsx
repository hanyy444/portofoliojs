import { useRef, useState } from "react";
import {
  Stack,
  Typography,
  Button,
  TextField,
  Box,
  TextareaAutosize,
  Alert,
  AlertTitle,
  Snackbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CONTACT } from "../constants";
import SendIcon from "@mui/icons-material/Send";
import emailJs from "@emailjs/browser";
import { Formik } from "formik";
import * as yup from "yup";

const CustomTextField = ({ style, ...props }) => {
  const theme = useTheme();
  return (
    <TextField
      fullWidth
      variant="outlined"
      sx={{
        "& .MuiOutlinedInput-notchedOutline": {
          border: `1px solid ${theme.palette.primary.main}`,
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
          {
            borderColor: theme.palette.primary.main,
          },
        "& .MuiInputLabel-root": {
          color: theme.palette.primary.main,
          fontSize: "2rem",
          opacity: 0.8,
          fontWeight: 500,
        },
        "& .MuiInputLabel-shrink": {
          transform: "translate(25px, -9px) scale(0.75)",
          color: theme.palette.primary.main,
          opacity: 1,
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: theme.palette.primary.main,
          },
        ...style,
      }}
      inputProps={{
        sx: {
          color: theme.palette.primary.main,
          fontSize: "2rem",
          background: theme.palette.background.default,
          "&:-webkit-autofill": {
            WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.default} inset`,
            WebkitTextFillColor: theme.palette.primary.main,
          },
        },
      }}
      {...props}
    />
  );
};

const contactSchema = yup.object().shape({
  name: yup.string().required("required"),
  subject: yup.string().required("required"),
  email: yup
    .string()
    .email("Invalid Email")
    .required("required"),
  message: yup.string(),
});

const initialValues = {
  name: "",
  subject: "",
  email: "",
  message: "",
};

export default function Contact() {
  const theme = useTheme();
  const isPhone = useMediaQuery("(max-width: 50em)");
  const [showAlert, setShowAlert] = useState({
    open: false,
    severity: undefined,
    message: undefined,
  });

  const formRef = useRef("");
  const sendEmail = async (values, onSubmitProps) => {
    const { name, email, message } = values;

    if (!name || !email) {
      setShowAlert({
        open: true,
        severity: "error",
        message:
          "Please fill out these fields: name, email",
      });
      return;
    }

    if (!message) {
      setShowAlert({
        open: true,
        severity: "error",
        message: "Please tell me your message.",
      });
      return;
    }

    try {
      await emailJs.sendForm(
        "service_g2y52k5",
        "template_msrb5he",
        formRef.current,
        "A5N8AGONY3R9DWvjJ"
      );
      setShowAlert({
        open: true,
        severity: "success",
        message: CONTACT.successfulEmailMessage,
      });
      onSubmitProps.resetForm();
    } catch (error) {
      setShowAlert({
        open: true,
        severity: "error",
        message: CONTACT.failedEmailMessage,
      });
    }
  };

  return (
    <Stack
      id="contact"
      component="section"
      alignItems="center"
      width="100%"
      marginY={5}
      sx={{
        scrollMarginTop: "9rem",
      }}
    >
      {showAlert.open && (
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={showAlert.open}
          autoHideDuration={4000}
          onClose={() => setShowAlert({ open: false })}
        >
          <Alert
            variant="filled"
            onClose={() => setShowAlert({ open: false })}
            severity={showAlert.severity}
            sx={{
              width: "100%",
              background: theme.palette.secondary.main,
            }}
          >
            {showAlert.message}
          </Alert>
        </Snackbar>
      )}
      <Typography variant="h4" textAlign="center">
        Contact
      </Typography>
      <Formik
        onSubmit={sendEmail}
        initialValues={initialValues}
        // validationSchema={contactSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Stack
            ref={formRef}
            component="form"
            onSubmit={handleSubmit}
            borderRadius=".5rem"
            alignItems="center"
            padding="5rem"
            width={isPhone ? "100%" : "75rem"}
            gap="2rem"
            sx={{
              "& textarea::placeholder": {
                color: `${theme.palette.primary.main} !important`,
                fontWeight: "bold",
                opacity: 0.8,
              },
            }}
          >
            <CustomTextField
              label="Name"
              name="name"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
              error={
                Boolean(touched.name) &&
                Boolean(errors.name)
              }
              helperText={touched.name && errors.name}
            />
            <CustomTextField
              label="Email"
              name="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              error={
                Boolean(touched.email) &&
                Boolean(errors.email)
              }
              helperText={touched.email && errors.email}
            />
            <CustomTextField
              label="Subject"
              name="subject"
              value={values.subject}
              onBlur={handleBlur}
              onChange={handleChange}
              error={
                Boolean(touched.subject) &&
                Boolean(errors.subject)
              }
              helperText={touched.subject && errors.subject}
            />
            <TextareaAutosize
              name="message"
              value={values.message}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Message"
              minRows={5}
              style={{
                width: "100%",
                fontSize: "2rem",
                padding: "1rem",
                backgroundColor:
                  theme.palette.background.default,
                color: theme.palette.primary.main,
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: ".5rem",
                resize: "none",
                "&:focus, &:hover": {
                  borderColor: theme.palette.secondary.main,
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{
                width: "min(25rem, 100%)",
                height: "8rem",
                alignSelf: "center",
              }}
              startIcon={<SendIcon />}
            >
              Send Email
            </Button>
          </Stack>
        )}
      </Formik>
    </Stack>
  );
}
