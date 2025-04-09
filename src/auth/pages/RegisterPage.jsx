import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Create account">
      <TextField
        label="Full name"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
        value={""}
      />

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
    </AuthLayout>
  );
};
