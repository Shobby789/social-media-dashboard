import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  fontFamily: "cursive",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ bgcolor: "white" }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="body1"
            noWrap
            component="div"
            sx={{ color: "black", fontWeight: "bold", fontSize: "18px" }}
          >
            Profile Statistics
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <MenuIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding sx={{ mb: 5, color: "black", pl: 2 }}>
              {/* <ListItemButton> */}
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src="https://www.pngitem.com/pimgs/m/537-5372558_flat-man-icon-png-transparent-png.png"
                  sx={{ width: 35, height: 35 }}
                />
              </ListItemIcon>
              <ListItemText primary="Muhammad Shoaib" />
              {/* </ListItemButton> */}
            </ListItem>

            <Link
              to={"/"}
              style={{
                color: "grey",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              <ListItem disablePadding sx={{ color: "#576574" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <SpaceDashboardRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link
              to={"/profile"}
              style={{
                color: "grey",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              <ListItem disablePadding sx={{ color: "#576574" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link
              to={"/notifications"}
              style={{
                color: "grey",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              <ListItem disablePadding sx={{ color: "#576574" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <FavoriteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Notifications" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link
              to={"/saved"}
              style={{
                color: "grey",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              <ListItem disablePadding sx={{ color: "#576574" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <BookmarkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Saved" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link
              to={"/settings"}
              style={{
                color: "grey",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              <ListItem disablePadding sx={{ color: "#57606f" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsApplicationsRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </nav>
        {/* <Button
          size="small"
          sx={{
            mt: 18,
            color: "tomato",
            fontWeight: "bold",
          }}
          startIcon={<LogoutIcon />}
        >
          Logout
        </Button> */}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          minHeight: "100vh",
          bgcolor: "whitesmoke",
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
