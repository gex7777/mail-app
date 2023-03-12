import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import FlagIcon from "@mui/icons-material/Flag";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Preview from "./Preview";

const CustomList = ({ data }) => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  function handleSelect(item) {
    setSelectedEmail(item);
  }
  return (
    <Stack
      direction={"row"}
      divider={<Divider orientation="vertical" flexItem />}
      sx={{ height: "100%" }}
    >
      <Box>
        <List
          sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
        >
          {data.map((item) => (
            <div key={item.mId}>
              <ListItem
                alignItems="flex-start"
                onClick={() => handleSelect(item)}
              >
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" />
                </ListItemAvatar>
                <ListItemText
                  primary={item.subject}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.name}
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
                <Box>
                  <DeleteIcon fontSize="small" />
                  <FlagIcon fontSize="small" />
                </Box>
              </ListItem>
              <Divider component="li" />
            </div>
          ))}
        </List>
      </Box>
      <Box>
        <Preview key={selectedEmail} email={selectedEmail} />
      </Box>
    </Stack>
  );
};

export default CustomList;
