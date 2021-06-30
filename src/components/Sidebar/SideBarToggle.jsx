import React, {useState} from 'react';


const SideBarToggle = () => {
    
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log(sidebarOpen);
    if (sidebarOpen) {
      let bodyEle = document.getElementsByTagName("BODY")[0];
      bodyEle.classList.add("side-navbar-minimize");
    } else {
      let bodyEle = document.getElementsByTagName("BODY")[0];
      bodyEle.classList.remove("side-navbar-minimize");
    }
  };

    return(
        <ul className="side-navbar-nav">
        <li className="logo">
          <a href="#" className="pramodizeBrand">
            <span>Pramodize</span>
          </a>
          <span className="side-navbar-toggle-btn" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                className="fa-primary"
                d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
              />
              <path
                fill="currentColor"
                className="fa-secondary"
                d="M416 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L269.3 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C432.4 476.9 424.2 480 416 480z"
              />
            </svg>
          </span>
        </li>
        
      </ul> 


 
    )
};


export default SideBarToggle;
