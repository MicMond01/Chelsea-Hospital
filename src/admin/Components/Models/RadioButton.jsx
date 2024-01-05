import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { pink } from "@mui/material/colors";

const RadioButton = ({ radioValue }) => {
  const [value, setValue] = React.useState(radioValue.toLowerCase());

  //   React.useEffect(() => {
  //     setValue(radioValue);
  //   }, [radioValue]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="female"
          control={<Radio sx={{ "&.Mui-checked": { color: pink[800] } }} />}
          label="Female"
          sx={{
            color: pink[800],
          }}
        />

        <FormControlLabel
          value="male"
          control={<Radio color="default" />}
          label="Male"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
