import React from "react";
import { Box, Typography, Container } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.main",
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            padding: 3,
            borderRadius: "8px",
            boxShadow: 3,
            backgroundColor: "#fff",
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            sx={{ fontWeight: "bold" }}
          >
            {title}
          </Typography>

          {children}
        </Box>
      </Container>
    </Box>
  );
};
