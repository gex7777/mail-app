import { Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";

const Preview = ({ email }) => {
  const title = "hello";
  if (!email) {
    return <>Plse select n email</>;
  }
  return (
    <Box>
      <Typography variant="h4">{email.name}</Typography>
      <Typography variant="h5">{email.subject}</Typography>
      <Typography variant="body1" gutterBottom>
        {email.content}
      </Typography>
    </Box>
  );
};

export default Preview;
