import InboxIcon from "@mui/icons-material/Inbox";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";

export const drawerConfig = [
  {
    title: "inbox",
    path: "/inbox",
    icon: <InboxIcon />,
  },
  {
    title: "Spam",
    path: "/spam",
    icon: <ReportGmailerrorredIcon />,
  },

  {
    title: "Deleted items",
    path: "/trash",
    icon: <DeleteIcon />,
  },
  {
    title: "Custom Folder",
    path: "/custom",
    icon: <FolderSpecialIcon />,
  },
];
