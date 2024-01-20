import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Avatar, Box, Typography, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { blue } from "@mui/material/colors";
import "../styles/animation.css";
import LingkarKecil from "./LingkarKecil";
import Stack from '@mui/material/Stack';
import { Dispatch, SetStateAction } from "react";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function MainPage({
  klikDs,
  dsdot,
  hoverTouch,
  hoverEnd,
  title,
}: {
  klikDs: VoidFunction;
  dsdot: boolean;
  hoverTouch: {(keMana:string):void};
  hoverEnd :VoidFunction;
  title: string;
}) {
  return (
    <Stack
    justifyContent="center"
    alignItems="center"
    spacing={0}
      height={'100vh'}
      width={"100vw"}
    >
      
      <Typography
            
            variant="h3"
            color="initial"
            style={{
              paddingBottom: "20px",
              transform : dsdot?'translateY(-50px)':'translateY(-110px)',
              transition: 'all 1s'
            }}
          >
            {title}
          </Typography>
      
      
      <div
      
            style={{
              marginTop:'-45px'
            }}
            onClick={klikDs}
            className={dsdot ? "" : "coba"}
          >
             
            <Avatar
              sx={{ bgcolor: blue[800] }}
              className={`ikonBesar ${dsdot ? "spinning" : ""}`}

            >
              <AssignmentRoundedIcon
                className="gede2"
              />
            </Avatar>
          </div>
          <div className="rummahdiv">
          <LingkarKecil hoverTouch={hoverTouch} hoverEnd={hoverEnd} dsdot={dsdot} nomor={1} />
        <LingkarKecil hoverTouch={hoverTouch} hoverEnd={hoverEnd} dsdot={dsdot} nomor={2} />
        <LingkarKecil hoverTouch={hoverTouch} hoverEnd={hoverEnd} dsdot={dsdot} nomor={3} />
        <LingkarKecil hoverTouch={hoverTouch} hoverEnd={hoverEnd} dsdot={dsdot} nomor={4} />
        <LingkarKecil hoverTouch={hoverTouch} hoverEnd={hoverEnd} dsdot={dsdot} nomor={5} />
          </div>
        
      
      {/*
      <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}>
        <NavigateNextIcon
          style={{
            transform: "scale(3) rotate(180deg)",
            filter: "contrast(0)",
          }}
        />
        <div>
          
        </div>
        <NavigateNextIcon style={{ transform: "scale(3)" }} onClick={changee} />
      </Stack>  
        
    */}
    </Stack>
  );
}
