import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Dashboard 2 React themes
import theme from "./assets/theme";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "./assets/theme-dark";

// Material Dashboard 2 React contexts
import { useMaterialUIController } from "./context";

function App() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      <Router>
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                exact
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
