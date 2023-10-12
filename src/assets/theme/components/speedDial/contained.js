/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React Base Styles
import colors from "../../base/colors";
import typography from "../../base/typography";

// Material Dashboard 2 React Helper Functions
import pxToRem from "../../functions/pxToRem";

const { white, info, secondary, primary } = colors;
const { size } = typography;

const contained = {
  base: {
    backgroundColor: primary.main,
    minHeight: pxToRem(40),
    padding: `${pxToRem(10)} ${pxToRem(24)}`,

    "&:hover": {
      backgroundColor: primary.focus,
    },

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(12)} ${pxToRem(28)}`,
    fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: primary.main,

    "&:hover": {
      backgroundColor: primary.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: primary.focus,
    },
  },

  secondary: {
    backgroundColor: secondary.main,

    "&:hover": {
      backgroundColor: secondary.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: secondary.focus,
    },
  },
};

export default contained;
