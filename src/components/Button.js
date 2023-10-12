import React from "react";
import buttonStyle from "../assets/theme/components/button";
import darkbuttonStyle from "../assets/theme-dark/components/button";
import { Button, ButtonGroup } from "@mui/material";

const Buttons = () => {
  // backgroundColor value when button is focused

  return (
    <ButtonGroup>
      <Button variant="contained">Contained</Button>
      <Button
        variant="outlined"
        sx={{
          "&:hover": {
            backgroundColor: true
              ? buttonStyle.styleOverrides.outlined["&:hover"]
              : darkbuttonStyle.styleOverrides.outlined["&:hover"],
            color: buttonStyle.styleOverrides.outlined.color,
          },
        }}
      >
        Outlined
      </Button>
      <Button
        variant="outlined"
        sx={{
          "&:hover": {
            backgroundColor: true
              ? buttonStyle.styleOverrides.outlined["&:hover"]
              : darkbuttonStyle.styleOverrides.outlined["&:hover"],
            color: buttonStyle.styleOverrides.outlined.color,
          },
        }}
      >
        Outlined
      </Button>
      <Button
        variant="outlined"
        sx={{
          "&:hover": {
            backgroundColor: true
              ? buttonStyle.styleOverrides.outlined["&:hover"]
              : darkbuttonStyle.styleOverrides.outlined["&:hover"],
            color: buttonStyle.styleOverrides.outlined.color,
          },
        }}
      >
        Outlined
      </Button>
    </ButtonGroup>
  );
};

export default Buttons;
