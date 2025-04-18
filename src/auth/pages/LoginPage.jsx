import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Alert, Box, TextField, Button, Typography, Link } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const isAuthenticating = useMemo(() => status == "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <TextField
          sx={{ marginBottom: 2 }}
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={onInputChange}
        />

        <TextField
          sx={{ marginBottom: 2 }}
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
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
          <Alert
            severity="error"
            sx={{ display: !!errorMessage ? "" : "none" }}
          >
            {errorMessage}
          </Alert>

          <Button
            disabled={isAuthenticating}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ padding: "10px" }}
            type="submit"
          >
            Login
          </Button>

          <Button
            disabled={isAuthenticating}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ padding: "10px" }}
            onClick={onGoogleSignIn}
          >
            <GoogleIcon />
            <Typography sx={{ ml: 1 }}>Google</Typography>
          </Button>
        </Box>

        {/* Other actions */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Link href="#" variant="body2" sx={{ fontSize: "0.875rem" }}>
            Forgot password?
          </Link>
          <Link
            href="#"
            variant="body2"
            sx={{ fontSize: "0.875rem" }}
            component={RouterLink}
            to="/auth/register"
          >
            Don't have an account? Register
          </Link>
        </Box>
      </form>
    </AuthLayout>
  );
};
