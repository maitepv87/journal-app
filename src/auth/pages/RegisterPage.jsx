import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Alert, Box, TextField, Button, Typography, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth";
import { useMemo } from "react";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe de tener una @"],
  password: [
    (value) => value.length >= 6,
    "El password debe de tener más de 6 letras.",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio."],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Create account">
      <form onSubmit={onSubmit}>
        <TextField
          label="Full name"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          name="displayName"
          value={displayName}
          onChange={onInputChange}
          error={!!displayNameValid && formSubmitted}
          helperText={displayNameValid}
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          name="email"
          value={email}
          onChange={onInputChange}
          error={!!emailValid && formSubmitted}
          helperText={emailValid}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          name="password"
          value={password}
          onChange={onInputChange}
          error={!!passwordValid && formSubmitted}
          helperText={passwordValid}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            marginTop: 1,
          }}
        >
          
          <Alert
            severity="error"
            sx={{ display: !!errorMessage ? "" : "none" }}
          >
            {errorMessage}
          </Alert>

          <Button
            disabled={isCheckingAuthentication}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ padding: "10px" }}
            type="submit"
          >
            Create account
          </Button>
        </Box>

        {/* Other actions */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 2,
          }}
        >
          <Typography variant="body2">
            Already have an account?{" "}
            <Link component={RouterLink} to="/auth/login">
              Login
            </Link>
          </Typography>
        </Box>
      </form>
    </AuthLayout>
  );
};
