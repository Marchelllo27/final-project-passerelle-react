import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  productList: {
    position: "absolute",
    zIndex: 200,
    height: "20rem",
    "& .MuiList-root": {
      display: "flex",
      flexDirection: "column",
      padding: 0,
    },
    "& .MuiList-root li": {
      width: "100%",
      color: "#464545",
      fontWeight: "bold",
    },
  },
});

export default function BasicSelect(props) {
  const styles = useStyles();

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="product-label">Produit</InputLabel>
        <Select
          value={props.value}
          labelId="product-label"
          id="product"
          name="product"
          label="Produit"
          onChange={props.onChange}
          MenuProps={{ className: styles.productList }}
        >
          <MenuItem value="dish">Plat</MenuItem>
          <MenuItem value="drink">Boisson</MenuItem>
          <MenuItem value="dessert">Dessert</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
