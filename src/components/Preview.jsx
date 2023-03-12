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
      <Typography variant="h4">{email}</Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </Box>
  );
};

export default Preview;
