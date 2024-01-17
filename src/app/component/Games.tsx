import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Avatar, Box, Typography, Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import "../styles/animation.css";

export default function Games({ changee,klikDs,
  dsdot, }: { changee: VoidFunction;
    klikDs: VoidFunction;
    dsdot: boolean; }) {
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
            variant="h2"
            color="initial"
            style={{
              marginTop: "-15px",
              paddingBottom: "20px",
              transform: dsdot ? "scale(1)" : "scale(0)",
              transition: "all 1s",
            }}
          >
            Games
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
            <Avatar
              style={{ transform: dsdot ? "scale(0)" : "scale(1)" }}
              className="dot satu"
              sx={{ transition: "all 1s" }}
            />
            <Avatar
              style={{ transform: dsdot ? "scale(0)" : "scale(1)" }}
              className="dot dua"
              sx={{ transition: "all 1s" }}
            />
            <Avatar
              style={{ transform: dsdot ? "scale(0)" : "scale(1)" }}
              className="dot tiga"
              sx={{ transition: "all 1s" }}
            />
            <Avatar
              style={{ transform: dsdot ? "scale(0)" : "scale(1)" }}
              className="dot empat"
              sx={{ transition: "all 1s" }}
            />
            <Avatar
              style={{ transform: dsdot ? "scale(0)" : "scale(1)" }}
              className="dot lima"
              sx={{ transition: "all 1s" }}
            />
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
              <SportsEsportsIcon
                style={{
                  width: "120px",
                  height: "120px",
                  fontSize: "4em",
                }}
              />
            </Avatar>
          </div>
        </Box>
      </Grid>
      <Grid item xs={1} onClick={changee}>
        <NavigateNextIcon
          style={{
            transform: "scale(3) rotate(180deg)"
          }}
        />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={1} >
        <NavigateNextIcon style={{ 
          transform: "scale(3)",
          filter: "contrast(0)", }} />
      </Grid>
    </Grid>
  );
}
