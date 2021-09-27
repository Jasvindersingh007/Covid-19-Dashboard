import { makeStyles, withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#1976d2",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 200,
  },
}))(TableCell);

const useStyles2 = makeStyles((theme) => ({
  "@media (max-width: 760px)": {
    inputRoot: {
      width: 100,
      "&:focus": {
        width: 100,
      },
      outlineColor: "red",
      border: "solid 2px #1976d2",
      fontSize: 14,
    },
    searchButton: {
      color: "white",
      backgroundColor: "#1976d2",
      border: "solid 3px #1976d2",
      height: 36,
      marginRight: 50,
      cursor: "pointer",
    },
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
    MuiTableCell : {
      padding: 0,
    },
    table: {
      color: "white",
      minWidth: 500,
    },
    paper: {
      maxHeight: 400,
    },
    tableHead: {
      backgroundColor: "#1976d2",
      color: "white",
    },
    head: {
      backgroundColor: "#1976d2",
      color: "red",
    },
    backBtn: {
      color: "white",
      borderRadius: 5,
      backgroundColor: "#1976d2",
      paddingLeft: 10,
      cursor: "pointer",
    },
    addBtn: {
      color: "white",
      cursor: "pointer",
      backgroundColor: "#1976d2",
      position: "static",
      marginRight: 20,
      width: 80,
      height: 32,
      border: "solid 3px #1976d2",
      borderRadius: 5,
      fontSize: 15,
      float: "right",
    },
    searchIcon: {
      color: "#1976d2",
    },
    filterBtn: {
      marginRight: 50,
    },
    container: {
      maxHeight: 325,
    },
    tableFooter: {
      justifyContent: "center",
      height: 10,
      maxHeight: 10,
      padding: 0,
      margin : 0,
    },
    tablePagination: {
      
    },
    submit: {
      color: "white",
      backgroundColor: "#1976d2",
      border: "solid 2px #1976d2",
      height: 40,
      width: 80,
      borderRadius: 40,
    },
    canncel: {
      color: "white",
      backgroundColor: "grey",
      height: 40,
      width: 80,
      border: "solid 2px grey",
      borderRadius: 40,
    },
    deleteBtn: {},
    editRecord: {
      width: 39,
      height: 39,
    },
    editRowBtn: {
      width: 40,
      height: 40,
      backgroundColor: "transparent",
      border: "solid 0px white",
      cursor: "pointer",
    },
    editRowIcons: {
      width: 20,
      height: 20,
    },
    hover: {
      backgroundColor: "#1976d2",
      hover: {
        backgroundColor: "#1976d2",
      },
    },
    editIcon: {},
    deleteIcon: {
      marginLeft: 100,
    },
    tabRow: {
      height: 10,
      maxHeight: 10,
      padding: 0,
      margin : 0,
    },
    tabCell: {
      height: 10,
      maxHeight: 10,
      padding: 0,
      margin : 0,
      // fontSize: 10,
    },
    
  
  }, 
  
  
  "@media (min-width: 760px)": {
    dialog : {
      // backgroundColor : 'red',
      maxWidth: 500,
      width: 500,
    },

    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
    MuiTableCell : {
      padding: 0,
    },
    table: {
      color: "white",
      minWidth: 500,
    },
    paper: {
      maxHeight: 400,
    },
    tableHead: {
      backgroundColor: "#1976d2",
      color: "white",
    },
    head: {
      backgroundColor: "#1976d2",
      color: "red",
    },
  
    backBtn: {
      color: "white",
      borderRadius: 50,
      backgroundColor: "#1976d2",
      paddingLeft: 10,
      cursor: "pointer",
    },
    addBtn: {
      color: "white",
      cursor: "pointer",
      backgroundColor: "#1976d2",
      position: "static",
      marginRight: 20,
      width: 80,
      height: 40,
      border: "solid 3px #1976d2",
      borderRadius: 5,
      fontSize: 15,
      float: "right",
    },
    inputRoot: {
      width: "30ch",
      "&:focus": {
        width: "20ch",
      },
      outlineColor: "red",
      border: "solid 2px #1976d2",
      marginTop: 10,
    },
    //
    searchIcon: {
      color: "#1976d2",
    },
    searchButton: {
      color: "white",
      backgroundColor: "#1976d2",
      border: "solid 3px #1976d2",
      height: 36,
      marginRight: 50,
      cursor: "pointer",
    },
    filterBtn: {
      marginRight: 50,
    },
    container: {
      maxHeight: 325,
    },
    tableFooter: {
     
    },
    tablePagination: {
      
      float: 'right',
    },
    submit: {
      color: "white",
      backgroundColor: "#1976d2",
      border: "solid 2px #1976d2",
      height: 40,
      width: 80,
      borderRadius: 40,
    },
    canncel: {
      color: "white",
      backgroundColor: "grey",
      height: 40,
      width: 80,
      border: "solid 2px grey",
      borderRadius: 40,
    },
    deleteBtn: {},
    editRecord: {
      width: 39,
      height: 39,
    },
    editRowBtn: {
      width: 40,
      height: 40,
      backgroundColor: "transparent",
      border: "solid 0px white",
      cursor: "pointer",
    },
    editRowIcons: {
      width: 20,
      height: 20,
    },
    hover: {
      backgroundColor: "#1976d2",
      hover: {
        backgroundColor: "#1976d2",
      },
    },
    editIcon: {},
    deleteIcon: {
      marginLeft: 100,
    },

  }
  
  
}));

export { useStyles2, StyledTableCell };
