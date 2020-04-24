import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [casilla, setCasilla] = React.useState("");

  const handleChange = (event) => {
    setCasilla(event.target.value);
    props.handleSeleccionCasilla(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Casillas</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={casilla}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Casillas</em>
          </MenuItem>
          <MenuItem value={"r1"}>1</MenuItem>
          <MenuItem value={"r2"}>2</MenuItem>
          <MenuItem value={"r3"}>3</MenuItem>
          <MenuItem value={"r4"}>4</MenuItem>
          <MenuItem value={"r5"}>5</MenuItem>
          <MenuItem value={"r6"}>6</MenuItem>
          <MenuItem value={"r7"}>7</MenuItem>
          <MenuItem value={"r8"}>8</MenuItem>
          <MenuItem value={"r9"}>9</MenuItem>
          <MenuItem value={"r10"}>10</MenuItem>
          <MenuItem value={"r11"}>11</MenuItem>
          <MenuItem value={"r12"}>12</MenuItem>
          <MenuItem value={"r13"}>13</MenuItem>
          <MenuItem value={"r14"}>14</MenuItem>
        </Select>
        <FormHelperText>{props.formHelperText}</FormHelperText>
      </FormControl>
    </div>
  );
}
