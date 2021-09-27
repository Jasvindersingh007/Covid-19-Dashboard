import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import CountryApi from "../../api/api";
import { useStyles2, StyledTableCell } from "./style";
import Country from "../country";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = async (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const AllCountry = () => {
  const classes = useStyles2();
  const [datas, setData] = React.useState([{ first_name: "data not found" }]);
  const [search, setSearch] = React.useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {
    async function fetchUser() {
      const result = await CountryApi.GetCountryRecords();
      setData(result);
      // console.log(result);
    }
    fetchUser();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    datas.map((data) => {
      if (data.country.toLowerCase() === search.toLowerCase()) {
        console.log(data);
        setData([data]);
      }
    });
  };

  

  return (
    <React.Fragment>
      <form className={classes.form} onSubmit={submitSearch}>
        <InputBase
          placeholder="  Search with Country . . ."
          variant="filled"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          classes={{
            root: classes.inputRoot,
          }}
        />
        <button type="submit" className={classes.searchButton}>
          GO
        </button>
      </form>
      <br />

      <TableContainer component={Paper} className={classes.paper}>
        <Table
          className={classes.table}
          aria-label="custom pagination table"
          stickyHeader
        >
          <TableHead className={classes.head}>
            <TableRow>
              <StyledTableCell> </StyledTableCell>
              <StyledTableCell> Country </StyledTableCell>
              <StyledTableCell> Country Flag </StyledTableCell>
              <StyledTableCell> Population </StyledTableCell>
              <StyledTableCell> Tests </StyledTableCell>
              <StyledTableCell> Cases </StyledTableCell>
              <StyledTableCell> today’s cases </StyledTableCell>
              <StyledTableCell> Deaths </StyledTableCell>
              <StyledTableCell> Today’s deaths </StyledTableCell>
              <StyledTableCell> Recovered </StyledTableCell>
              <StyledTableCell> Today’s Recovered </StyledTableCell>
              <StyledTableCell> Critical cases </StyledTableCell>
              <StyledTableCell> Active </StyledTableCell>
              <StyledTableCell> Vaccination data </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.body}>
            {(rowsPerPage > 0
              ? datas.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : datas
            ).map((data) => (
              <TableRow key={data.id} className={classes.tabRow}>
                <TableCell className={classes.tabCell}><Country toChild={data} sendToParent={setData}/></TableCell>
                <TableCell className={classes.tabCell}>{data.country}</TableCell>
                <TableCell className={classes.tabCell}>{data.country}</TableCell>
                <TableCell className={classes.tabCell}>{data.population}</TableCell>
                <TableCell className={classes.tabCell}>{data.tests}</TableCell>
                <TableCell className={classes.tabCell}>{data.cases}</TableCell>
                <TableCell className={classes.tabCell}>{data.todayCases}</TableCell>
                <TableCell className={classes.tabCell}>{data.deaths}</TableCell>
                <TableCell className={classes.tabCell}>{data.todayDeaths}</TableCell>
                <TableCell className={classes.tabCell}>{data.recovered}</TableCell>
                <TableCell className={classes.tabCell}>{data.todayRecovered}</TableCell>
                <TableCell className={classes.tabCell}>{data.critical}</TableCell>
                <TableCell className={classes.tabCell}>{data.active}</TableCell>
                <TableCell className={classes.tabCell}>{data.cases}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.tableFooter}>
        <TablePagination
          className={classes.tablePagination}
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          colSpan={3}
          count={datas.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: { "aria-label": "rows per page" },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </div>
    </React.Fragment>
  );
};

export default AllCountry;
