import * as React from "react";
import { useState, useEffect } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";

import nutrients from "../../utils/nutrients";
import sendHttpRequest from "../../utils/sendHttpRequest";

const useStyles = makeStyles({
  optionsStyles: {
    position: "absolute",
    zIndex: 200,
    height: "20rem",
    "& .MuiList-root": {
      display: "flex",
      flexDirection: "column",
    },
    "& .MuiList-root li": {
      width: "100%",
      color: "#464545",
      fontWeight: "bold",
    },
  },
});

 const ProductFilter = (props) => {
  const [filterValue, setFilterValue] = useState("");

  const style = useStyles();

  const handleChange = (event) => {
    setFilterValue(event.target.value);
    props.onGetFilterValue(event.target.value)
  };

  return (
    <FormControl
      sx={{
        width: 400,
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <InputLabel id="filter">Choisissez votre filter</InputLabel>
      <Select
        labelId="filter"
        id="demo-simple-select"
        value={filterValue}
        label="Choisissez votre filter"
        onChange={handleChange}
        MenuProps={{ className: style.optionsStyles }}
      >
        {nutrients.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}


export default ProductFilter;