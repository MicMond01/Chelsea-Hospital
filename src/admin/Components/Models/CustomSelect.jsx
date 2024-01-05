import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {
  ThemeProvider,
  createTheme,
  outlinedInputClasses,
  useTheme,
} from "@mui/material";

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

const CustomSelect = ({ doctor, inputValue, inputLabel }) => {
  const outerTheme = useTheme();

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label={inputLabel}
            defaultValue={doctor}
            helperText="Please select a Doctor"
            sx={{
              width: "28.5ch",
              maxWidth: "100%",
              "@media (max-width:400px)": {
                width: "25ch",
              },
            }}
          >
            {inputValue.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default CustomSelect;
