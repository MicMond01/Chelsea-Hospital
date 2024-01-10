import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { pink } from "@mui/material/colors";

const RadioButton = ({ radioValue, handleChangeValue }) => {
  const [value, setValue] = React.useState(radioValue.toLowerCase());

  //   React.useEffect(() => {
  //     setValue(radioValue);
  //   }, [radioValue]);

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="row-radio-buttons-group"
        defaultValue={radioValue}
      >
        <FormControlLabel
          value="Female"
          onChange={handleChangeValue}
          control={<Radio sx={{ "&.Mui-checked": { color: pink[800] } }} />}
          label="Female"
          sx={{
            color: pink[800],
          }}
        />

        <FormControlLabel
          value="Male"
          onChange={handleChangeValue}
          control={<Radio color="default" />}
          label="Male"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
