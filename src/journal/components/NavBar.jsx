import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  Box,
} from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";

export const NavBar = ({ drawerWidth = 240 }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
          onClick={handleDrawerToggle}
        >
          <MenuOutlined />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="h6" noWrap component="div">
            Journal App
          </Typography>

          <IconButton color="error">
            <LogoutOutlined />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Drawer que solo aparece en pantallas pequeñas */}
      <Drawer
        variant="temporary"
        open={openDrawer}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {/* Aquí va el contenido del Sidebar */}
      </Drawer>
    </AppBar>
  );
};
