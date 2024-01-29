import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import { Avatar, Typography,} from "@mui/material";
import "../styles/animation.css";
import LingkarKecil from "./LingkarKecil";
import Stack from '@mui/material/Stack';

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
      zIndex={4}
    >
      
      <Typography
            
            variant="h3"
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
              sx={{ bgcolor: "#b46294" }}
              className={`ikonBesar ${dsdot ? "spinning" : ""}`}

            >
              <AssignmentRoundedIcon
                className="gede2"
                sx={{
                  color: "#f6f3f6"
                }}
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
    </Stack>
  );
}
