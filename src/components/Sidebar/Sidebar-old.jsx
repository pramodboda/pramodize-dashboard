import React, { useState } from "react";

function Sidebar() {
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
  return (
    <nav className="side-navbar">
      <ul className="side-navbar-nav">
        <li className="logo">
          <a href="#" className="pramodizeBrand">
            <span>Pramodize</span>
          </a>
          <span class="side-navbar-toggle-btn" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                class="fa-primary"
                d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
              />
              <path
                fill="currentColor"
                class="fa-secondary"
                d="M416 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L269.3 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C432.4 476.9 424.2 480 416 480z"
              />
            </svg>
          </span>
        </li>
        <li class="nav-item">
          <a href="#" className="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <g className="fa-group">
                <path
                  fill="currentColor"
                  className="fa-secondary"
                  d="M510.62 92.63l-95.32 76.28a48.66 48.66 0 0 1 .7 7.09 48 48 0 0 1-96 0 47.44 47.44 0 0 1 .71-7.1l-95.33-76.27a45.11 45.11 0 0 1-29.66 1.59l-101.5 101.5A47.9 47.9 0 1 1 48 160a47.87 47.87 0 0 1 12.28 1.78l101.5-101.5A47.87 47.87 0 0 1 160 48a48 48 0 0 1 96 0 47.44 47.44 0 0 1-.71 7.1l95.32 76.26a46.5 46.5 0 0 1 34.76 0l95.34-76.27A48.66 48.66 0 0 1 480 48a48.36 48.36 0 1 1 30.62 44.63z"
                />
                <path
                  fill="currentColor"
                  className="fa-primary"
                  d="M400 320h-64a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V336a16 16 0 0 0-16-16zm160-128h-64a16 16 0 0 0-16 16v288a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V208a16 16 0 0 0-16-16zm-320 0h-64a16 16 0 0 0-16 16v288a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V208a16 16 0 0 0-16-16zM80 352H16a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V368a16 16 0 0 0-16-16z"
                />
              </g>
            </svg>

            <span className="link-text">Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="alien-monster"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M160,320h64V224H160Zm192-96v96h64V224Z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
            <span className="link-text">Pages</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="space-station-moon-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M501.70312,224H448V160H368V96h48V66.67383A246.86934,246.86934,0,0,0,256,8C119.03125,8,8,119.0332,8,256a250.017,250.017,0,0,0,1.72656,28.26562C81.19531,306.76953,165.47656,320,256,320s174.80469-13.23047,246.27344-35.73438A250.017,250.017,0,0,0,504,256,248.44936,248.44936,0,0,0,501.70312,224ZM192,240a80,80,0,1,1,80-80A80.00021,80.00021,0,0,1,192,240ZM384,343.13867A940.33806,940.33806,0,0,1,256,352c-87.34375,0-168.71094-11.46094-239.28906-31.73633C45.05859,426.01953,141.29688,504,256,504a247.45808,247.45808,0,0,0,192-91.0918V384H384Z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M256,320c-90.52344,0-174.80469-13.23047-246.27344-35.73438a246.11376,246.11376,0,0,0,6.98438,35.998C87.28906,340.53906,168.65625,352,256,352s168.71094-11.46094,239.28906-31.73633a246.11376,246.11376,0,0,0,6.98438-35.998C430.80469,306.76953,346.52344,320,256,320Zm-64-80a80,80,0,1,0-80-80A80.00021,80.00021,0,0,0,192,240Zm0-104a24,24,0,1,1-24,24A23.99993,23.99993,0,0,1,192,136Z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
            <span className="link-text">Space</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="space-shuttle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M32 416c0 35.35 21.49 64 48 64h16V352H32zm154.54-232h280.13L376 168C243 140.59 222.45 51.22 128 34.65V160h18.34a45.62 45.62 0 0 1 40.2 24zM32 96v64h64V32H80c-26.51 0-48 28.65-48 64zm114.34 256H128v125.35C222.45 460.78 243 371.41 376 344l90.67-16H186.54a45.62 45.62 0 0 1-40.2 24z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M592.6 208.24C559.73 192.84 515.78 184 472 184H186.54a45.62 45.62 0 0 0-40.2-24H32c-23.2 0-32 10-32 24v144c0 14 8.82 24 32 24h114.34a45.62 45.62 0 0 0 40.2-24H472c43.78 0 87.73-8.84 120.6-24.24C622.28 289.84 640 272 640 256s-17.72-33.84-47.4-47.76zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.91 0 31.94 80 0 80z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
            <span className="link-text">Shuttle</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
