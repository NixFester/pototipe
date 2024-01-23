import { useState } from "react"
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Paper } from "@mui/material";

export default function Navigasi() {
    const [navgat,setNavgat] = useState(1)
    return(
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={5}>
        <BottomNavigation
          showLabels
          value={navgat}
          onChange={(event, newValue) => {
            setNavgat(newValue);
          }}
          sx={{backgroundColor: "#FAFAF9",}}
        >
          <BottomNavigationAction label="Jurnalku" icon={<RestoreIcon sx={{color: "#373954"}} />} color="#FAFAF9" href="/jurnal" />
          <BottomNavigationAction label="Beranda" icon={<HomeIcon />} href="/" />
          <BottomNavigationAction label="Archive" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Paper>
    )
}