import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  productList: {
    position: "absolute",
    zIndex: 200,
    height: "20rem",
    "& .MuiList-root": {
      display: "flex",
      flexDirection: "column",
      padding: 0
    },
    "& .MuiList-root li": {
      width: "100%",
      color: "#464545",
      fontWeight: "bold",
    },
  },
});

export default function BasicSelect() {
  const [product, setProduct] = React.useState('');

  const styles = useStyles();

  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Produit</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={product}
          label="Produit"
          onChange={handleChange}
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