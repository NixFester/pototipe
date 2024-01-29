import { useState } from "react"
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

import InfoIcon from '@mui/icons-material/Info';

import { Paper, createTheme } from "@mui/material";

export default function Navigasi({navGate= 1}: {navGate?: number}) {
  
    const [navgat,setNavgat] = useState(navGate)
    return(
        <Paper sx={{backgroundColor: "#bd4b4b", position: 'fixed', bottom: 0, left: 0, right: 0 }} >
        <BottomNavigation
        
          showLabels
          value={navgat}
          onChange={(event, newValue) => {
            setNavgat(newValue);
          }}
          
          sx={{borderRadius: "15px 15px 0 0",backgroundColor: '#b46294',
          "& .MuiBottomNavigationAction-root, svg": {
            color: "#f6f3f6"},
          "& .Mui-selected, .Mui-selected svg" : {
            color :"#f6f3f6",
            transform : "scale(1.1)",
            fontStyle: "oblique"
          }}}
        >
          <BottomNavigationAction label="Jurnalku" icon={<AutoStoriesIcon />} href="/diaryku" />
          <BottomNavigationAction label="Beranda" icon={<HomeIcon />} href="/" />
          <BottomNavigationAction label="Tentang" icon={<InfoIcon />} href="/tentang" />
        </BottomNavigation>
      </Paper>
    )
}