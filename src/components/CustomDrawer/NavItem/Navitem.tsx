import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Navitem = ({ title, path, icon }) => {
  return (
    <>
      {" "}
      <ListItem
        key={title}
        disablePadding
        component={NavLink}
        to={path}
        sx={{
          "&.active": {
            color: "text.primary",
            bgcolor: "action.selected",
            fontWeight: "fontWeightBold",
          },
        }}
      >
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default Navitem;
