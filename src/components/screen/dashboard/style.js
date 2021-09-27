import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
const mobileDrawerWidth = 140;

const useStyles = makeStyles((theme) => ({
  "@media (max-width: 760px)": {
    appbar: {
      backgroundColor: "#1976d2",
      height: 65,
    },
    menuButton: {
      margin: 0,
      padding: 0,
    },
    icon: {
      height: 90,
    },
    title: {
      margin: 1,
      padding: 1,
      cursor: "pointer",

    },
    AccountCircle: {
      margin: 1,
      padding: 1,
    },
    logoutBtn: {
      color: "white",
      fontSize: 15,
      margin: 1,
      padding: 1,
    },
    root: {
      flexGrow: 1,
    },
    link: {
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
    drawer: {
      width: mobileDrawerWidth,
      flexShrink: 0,
      // position: 'relative',
    },
    drawerClose: {
      backgroundColor: "#1976d2",
      padding: 5,
      color: "white",
    },
    drawerPaper: {
      marginTop: 65,
      width: mobileDrawerWidth,
      maxWidth: mobileDrawerWidth,
    },
    drawerLinksImage: {
      height: 40,
    },
    content: {
      position: "static",
      paddingTop: theme.spacing(6),
      paddingLeft: theme.spacing(0),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: mobileDrawerWidth,
    },
  },

  "@media (min-width: 760px)": {
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    icon: {
      height: 90,
    },
    link: {
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
    title: {
      flexGrow: 1,
      cursor: "pointer",

    },
    appbar: {
      backgroundColor: "#1976d2",
      height: 65,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      // position: 'relative',
    },
    drawerClose: {
      backgroundColor: "#1976d2",
      padding: 5,
      color: "white",
    },
    drawerPaper: {
      marginTop: 65,
      width: drawerWidth,
      maxWidth: drawerWidth,
    },
    drawerLinksImage: {
      height: 40,
    },
    content: {
      position: "static",
      paddingTop: theme.spacing(6),
      paddingLeft: theme.spacing(0),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: drawerWidth,
    },
    logoutBtn: {
      color: "white",
      fontSize: 15,
      marginLeft: 5,
    },
  },
}));

export { useStyles };
