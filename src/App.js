import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";

import "./App.css";
import "./components/Sidebar/SidebarStyles.css";
import "./components/Navbar/NavbarStyles.css";

// Theming
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import 'fontsource-roboto';

const theme = createMuiTheme({
  palette:{
    primary:{
      main: '#8A3FFC' 
    },
    // brand: '#FFD216'
  },

  // shape:{
  //   borderRadius: 25
  // },
  spacing: 8,
  
  overrides:{
    MuiButton:{
      root:{
        textTransform: "none"
      }
    }
  },
  props:{
    MuiButton:{
      disableRipple: true,
      // variant: 'contained',
      // color: 'primary'
    },
    MuiCheckbox:{
      disableRipple: true
    },
    MuiCard:{
      elevation: 1
    },
    typography: {
      subtitle1: {
        fontSize: 12,
      },
      body1: {
        fontWeight: 500,
      },
      button: {
        fontStyle: 'italic',
      },
      h5:{
        color: 'red'
      }
    },
  }
});

function App() {
  return (

    <ThemeProvider theme={theme}>
      <div className="App">
        <Sidebar />
        <div className="wrapper">
          <Navbar />
          <div className="main">
            <Dashboard/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
