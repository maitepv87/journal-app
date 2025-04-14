import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";

export const RegisterPage = () => {
  const formData = {
    email: "maitepv87@gmail.com",
    password: "12345",
    displayName: "Maite Perez Vento",
  };

  const { displayName, email, password, onInputChange, formState } = useForm(formData);

  const onSubmit = (event) => {
    event.preventDefault();

    // dispatch(checkingAuthentication());

    console.log(formState);
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
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          name="email"
          value={email}
          onChange={onInputChange}
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
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            marginTop: 1,
          }}
        >
          <Button
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
