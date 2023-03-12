import CssBaseline from "@mui/material/CssBaseline";

import { useEffect, useState } from "react";

import Router from "./routes";

function App() {
  return (
    <>
      <CssBaseline />

      <Router />
    </>
  );
}

export default App;
