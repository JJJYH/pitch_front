import React from "react";
import ToggleColorMode from "../components/ColorModeContext";
import OpenIconSpeedDial from "../components/OpenIconSpeedDial";
import { Grid, SpeedDial, Box, TextField } from "@mui/material";
import "./CVScss.scss";
import Buttons from "../components/Button";
const CVPage = () => {
  return (
    <Grid>
      <OpenIconSpeedDial />
      <Buttons />
      <Box mt={2} sx={{ gap: 1 }}>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </Box>
    </Grid>
  );
};

export default CVPage;
