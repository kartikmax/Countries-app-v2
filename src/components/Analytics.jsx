// import { Grid } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import Data from "./countries.json"
import { myData } from "./FetchApi";

export default function Analytics() {
  console.log(myData);
  const [allData, setAllData] = useState();
  useEffect(() => {
    if (myData) {
      setAllData(myData);
    }
  }, []);
  console.log(allData,"here")

  return (
    <>
      <ol>
        {allData.Map((x) => (
          <li>{x.name}</li>
        ))}
      </ol>
    </>
  );
}
