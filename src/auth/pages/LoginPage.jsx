import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
        value={""}
      />

      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
        value={""}
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
        >
          Login
        </Button>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: "10px" }}
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
    </AuthLayout>
  );
};
