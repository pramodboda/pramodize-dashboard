import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";

import "./App.css";
import "./components/Sidebar/SidebarStyles.css";
import "./components/Navbar/NavbarStyles.css";

// Theming
import PramodizeDashboardTheme from "./theme/PramodizeDashboardTheme";
import {ThemeProvider} from '@material-ui/core/styles';

import 'fontsource-roboto';



function App() {
  return (

    <ThemeProvider theme={PramodizeDashboardTheme}>
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
