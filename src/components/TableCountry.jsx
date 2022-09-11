// import { throwServerError } from "@apollo/client";
import {
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
// import { useId } from "react";
import Data from "./countries.json";

const useStyles = makeStyles({
  table: {
    minWidth: 450,
  },
});

export default function TableCountry() {
  const classes = useStyles();
  //   const id = useId();

  // const countryImgLink = ;
  const Data2 = tidy(
    Data,
    mutate({
      countryImgLink: (x) =>
        `https://flagcdn.com/256x192/${x.alpha2.toLowerCase()}.png`,
    })
  );

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Sr. No.</TableCell>
              <TableCell> Country name</TableCell>
              <TableCell>country capital</TableCell>
              <TableCell>country calling code</TableCell>
              <TableCell>Image</TableCell>
            </TableRow>
            {Data2.map((rows, i) => (
              <TableRow key={rows.countryCallingCodes}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{rows.name}</TableCell>
                <TableCell>{rows.alpha2}</TableCell>
                <TableCell>{rows.countryCallingCodes}</TableCell>
                <TableCell>
                  {/* <img src="" alt={rows.alpha2}/> */}
                  <img
                    src={rows.countryImgLink}
                    width="75"
                    height="50"
                    alt={rows.name}
                  ></img>
                </TableCell>
              </TableRow>
            ))}
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  );
}
