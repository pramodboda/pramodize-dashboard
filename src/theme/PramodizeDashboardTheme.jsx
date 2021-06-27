// import React from 'react';

import {createMuiTheme} from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';

const PramodizeDashboardTheme = createMuiTheme({
    palette:{
      primary:{
        main: '#8A3FFC' 
      },
      secondary:{
        main: "#f9f9f9",
        contrastText: '#8A3FFC',
      }
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
        },
        containedPrimary:{
            "&:hover":{
                backgroundColor: "#6929C4"
            }
        },
        containedSecondary:{
            backgroundColor: grey[50],
            "&:hover":{
                backgroundColor: grey[200],
            }
        }
      }
    },
    props:{
      MuiButton:{
        disableRipple: true,
        disableElevation: true
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


  export default PramodizeDashboardTheme;