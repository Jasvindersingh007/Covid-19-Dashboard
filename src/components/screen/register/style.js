import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@media (max-width: 760px)": {
    field: {
      maxWidth: "100%",
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#1976d2",
  },
  field: {
    fontSize: 20,
    width: 400,
    height: 40,
  },
  red: {
    color: "red",
  },
  error: {
    color: "red",
  },
  center: {
    marginLeft: '40%',
  }
}));

export { useStyles };
