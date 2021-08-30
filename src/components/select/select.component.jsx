import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { SelectContainer } from './select.styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects({handleChange, sort}) {
  
  const classes = useStyles();
  

  return (
    <SelectContainer>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-helper">Sort</InputLabel>
        <NativeSelect
          value={sort}
          onChange={handleChange}
        >
          <option aria-label="None" value="" />
          <option value={"price"}>Price</option>
          <option value={"size"}>Size</option>
          <option value={"id"}>Id</option>
        </NativeSelect>
        <FormHelperText>Sort by price or size or id</FormHelperText>
      </FormControl>
    </SelectContainer>
  );
}
