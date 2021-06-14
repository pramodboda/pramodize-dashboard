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
      main: '#1d1d1d' 
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
      variant: 'contained',
      color: 'primary'
    },
    MuiCheckbox:{
      disableRipple: true
    },
    MuiPaper:{
      // elevation: 0.5  
    }
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
