import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Avatar, Box, Typography, Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import "../styles/animation.css";
import { FamilyRestroom, Favorite, Watch } from "@mui/icons-material";
import LingkarKecil from "./LingkarKecil";

export default function MainPage({
  changee,
  klikDs,
  dsdot,
  hoverTouch,
  hoverEnd,
  title
}: {
  changee: VoidFunction;
  klikDs: VoidFunction;
  dsdot: boolean;
  hoverTouch: {(keMana:string):void};
  hoverEnd :VoidFunction;
  title: string;
}) {
  return (
    <Grid
      container
      spacing={-2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="87vh"
          paddingLeft="15px"
        >
          <Typography
            variant="h3"
            color="initial"
            style={{
              marginTop: "-15px",
              paddingBottom: "20px",
              transform: dsdot ? "translateY(0px)" : "translateY(-90px)",
              transition: "all 1s",
            }}
          >
            {title}
          </Typography>

          <div
            style={{
              width: "200px",
              height: "200px",
              fontSize: "4em",
            }}
            onClick={klikDs}
            className={dsdot ? "" : "coba"}
          >
             <LingkarKecil hoverTouch={hoverTouch} hoverEnd={hoverEnd} dsdot={dsdot} nomor={1} />
             <LingkarKecil hoverTouch={hoverTouch} hoverEnd={hoverEnd} dsdot={dsdot} nomor={2} />
             <LingkarKecil hoverTouch={hoverTouch} hoverEnd={hoverEnd} dsdot={dsdot} nomor={3} />
             <LingkarKecil hoverTouch={hoverTouch} hoverEnd={hoverEnd} dsdot={dsdot} nomor={4} />
             <LingkarKecil hoverTouch={hoverTouch} hoverEnd={hoverEnd} dsdot={dsdot} nomor={5} />
            <Avatar
              style={{
                width: "200px",
                height: "200px",
                position: "absolute",
                top: dsdot ? "200px" : "0",
              }}
              sx={{ bgcolor: blue[800] }}
              className={dsdot ? "spinning" : ""}

            >
              <AssignmentRoundedIcon
                style={{
                  width: "120px",
                  height: "120px",
                }}
              />
            </Avatar>
          </div>
        </Box>
      </Grid>
      <Grid item xs={1}/>
      <Grid item xs={1}>
        <NavigateNextIcon
          style={{
            transform: "scale(3) rotate(180deg)",
            filter: "contrast(0)",
          }}
        />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={1} onClick={changee}>
        <NavigateNextIcon style={{ transform: "scale(3)" }} />
      </Grid>
    </Grid>
  );
}
