// import { throwServerError } from "@apollo/client";
import {
  Button,
  createTheme,
  makeStyles,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { mutate, tidy } from "@tidyjs/tidy";
import React from "react";
import Data from "./countries.json";
import { useEffect, useState } from "react";
import { myData } from "./FetchApi";

const theme = createTheme({
  palette: {
    primary: {
      light: "#98ff98",
      main: "#4aa02c",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const useStyles = makeStyles({
  table: {
    minWidth: 350,
    background: theme.palette.primary.light,
    border: `2px solid ${theme.palette.primary.main}`,
  },
  tableContainer: {
    maxWidth: 1000,
    margin: 30,
  },
});

export default function TableCountry() {
  const [countryData, setCountryData] = useState();
  useEffect(() => {
    if (myData) {
      setCountryData(myData);
    }
  }, []);

  console.log(countryData, "fetched");
  const classes = useStyles();
  const Data2 = tidy(
    Data,
    mutate({
      countryImgLink: (x) =>
        `https://flagcdn.com/256x192/${x.alpha2.toLowerCase()}.png`,
      // capital:myData
    })
  );

  return (
    <div>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Sr. No.</TableCell>
              <TableCell>Country name</TableCell>
              <TableCell>Country Capital</TableCell>
              <TableCell>Country Calling Code</TableCell>
              <TableCell>Flag</TableCell>
              <TableCell>Add</TableCell>
              <TableCell>Currency</TableCell>
            </TableRow>
            {Data2.map((rows, i) => (
              <TableRow key={rows.countryCallingCodes}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{rows.name}</TableCell>
                <TableCell>{rows.alpha2}</TableCell>
                <TableCell>{rows.countryCallingCodes}</TableCell>
                <TableCell>
                  <img
                    src={rows.countryImgLink}
                    width="75"
                    height="50"
                    alt={rows.name}
                  />
                </TableCell>
                <TableCell>
                  <Button color="primary" variant="contained">
                    +
                  </Button>
                </TableCell>
                <TableCell>
                  <ol>
                    {rows.currencies.map((currency) => (
                      <li key={currency}>{currency}</li>
                    ))}
                  </ol>
                </TableCell>
              </TableRow>
            ))}
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  );
}
