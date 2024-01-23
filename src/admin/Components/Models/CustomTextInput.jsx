import {
  InputAdornment,
  FormControl,
  ThemeProvider,
  TextField,
  outlinedInputClasses,
  createTheme,
  useTheme,
} from "@mui/material";
import React from "react";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&::before, &::after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

const CustomTextInput = ({
  inputLabel,
  inputIcon,
  inputValue, 
  handleChangeValue,
  name,
}) => {
  const outerTheme = useTheme();

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <TextField
        sx={{ my: "1rem" }}
        id="input-with-icon-textfield"
        required
        label={inputLabel}
        fullWidth
        variant="outlined"
        onChange={(e) => handleChangeValue(name, e.target.value)}
        value={inputValue}
        InputProps={{
          endAdornment: (
            <InputAdornment sx={{ height: "2em" }} position="end">
              {inputIcon && React.createElement(inputIcon)}
            </InputAdornment>
          ),
        }}
      />
    </ThemeProvider>
  );
};

export default CustomTextInput;

{
  /* <FormControl sx={{ m: 1 }} variant="outlined">
  <TextField
    required
    label={inputLabel}
    id="outlined-end-adornment"
    sx={{
      width: "28.5ch",
      "@media (max-width:400px)": {
        width: "25ch",
      },
    }}
    onChange={handleChangeValue}
    defaultValue={inputValue}
    InputProps={{
      endAdornment: (
        <InputAdornment sx={{ height: "2em" }} position="end">
          {inputIcon && React.createElement(inputIcon)}
        </InputAdornment>
      ),
    }}
  />
</FormControl>; */
}
