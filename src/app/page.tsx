"use client";
import MainPage from "./component/mainPage";
import "./styles/animation.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";


export default function Home() {
  const [as, setAs] = useState(true);
  const [onsec, Setonsec] = useState(false);
  const [bs, setBs] = useState(true);
  const [onBs, setOnBs] = useState(true);
  return (
    <div>
      <div style={{display: onBs?"none":"block"}} className="sil1">
      <MainPage/>
      </div>
      <div
        style={{ display: onsec && onBs ? "block" : "none", padding:'8%' }}
        onClick={() => {
          setTimeout(() => {
            setOnBs((prev) => !prev);
          }, 900);
          setBs((prev) => !prev);
        }}
      >
        <Typography
          variant="h3"
          color="initial"
          className={
            bs ? "tracking-in-contract-bck" : "tracking-out-contract-bck"
          }
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, voluptatem.
        </Typography>
      </div>
      <div style={{ display: onsec ? "none" : "block" }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          onClick={() => {
            setTimeout(() => {
              Setonsec((prev) => !prev);
            }, 1000);
            setAs((prev) => !prev);
          }}
          className={as ? "puff-in-center" : "puff-out-center"}
        >
          <Avatar
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "red",
              fontSize: "4em",
            }}
            
          >
            H
          </Avatar>
          <Typography variant="h6" color="initial"> Tekan tuk lanjut</Typography>
        </Box>
      </div>
    </div>
  );
}
