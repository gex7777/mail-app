import { Navigate, useRoutes } from "react-router-dom";

import CustomList from "./components/CustomList";
import inbox from "../../1_inbox .json";
import spam from "../../1_spam.json";
import Layout from "./layout/Layout";
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { element: <Navigate to="/inbox" />, index: true },
        { path: "inbox", element: <CustomList data={inbox} /> },
        { path: "spam", element: <CustomList data={spam} /> },
      ],
    },
  ]);

  return routes;
}
