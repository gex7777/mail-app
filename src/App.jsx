import CssBaseline from "@mui/material/CssBaseline";

import { useEffect, useState } from "react";
import localInbox from "../../1_inbox .json";
import localSpam from "../../1_spam.json";
import Router from "./routes";

function App() {
  const [inbox, setInbox] = useState([]);
  const [spam, setSpam] = useState([]);
  useEffect(() => {
    setInbox(localInbox), setSpam(localSpam);
  }, []);
  return (
    <>
      <CssBaseline />

      <Router />
    </>
  );
}

export default App;
