import React from "react";

import MuiDrawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { drawerConfig } from "./config";
import Navitem from "./NavItem/Navitem";

const drawerWidth = 240;

export const CustomDrawer = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <MuiDrawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {drawerConfig.map((item) => (
              <Navitem {...item} key={item.title} />
            ))}
          </List>
        </Box>
      </MuiDrawer>
      <Box component="main" sx={{ flexGrow: 1, marginTop: 8 }}>
        {children}
      </Box>
    </Box>
  );
};
