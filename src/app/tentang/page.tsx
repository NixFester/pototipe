"use client";
import "../styles/animation.css";
import Navigasi from "../component/navigasi";
import { Paper, Typography, Box, Stack } from "@mui/material";
import { useEffect } from "react";
import { App } from '@capacitor/app'

export default function Tentang() {
  useEffect(() => {
    App.addListener('appUrlOpen', (event) => {
      const slug = event.url.split('.app').pop()
      if (slug)
        window.location.href = slug

    })
  }, [])
  
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor={"#bd4b4b"}
    >
      <Paper elevation={10} sx={{ backgroundColor: "white", padding: "10px" }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ color: "black" }}
        >
          <Box
            component="img"
            sx={{
              height: 250,
              width: 300,
              marginBottom: "10px",
            }}
            alt="The house from the offer."
            src="/group.jpg"
          />
            <Paper elevation={5} sx={{background: "#bd4b4b"}}>
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{padding: "5px", color: "#f6f3f6" }}
          >
            <Typography variant="h5">Ketua: Dwi Ayu R.</Typography>

            <Typography variant="h6">Pembuat Aplikasi:</Typography>

            <Typography variant="h5">Abi Candra A.M.</Typography>

            <Typography variant="h5">Anggota :</Typography>

            <Typography variant="subtitle1">Lukman Hakim</Typography>

            <Typography variant="subtitle1">Nabila Sofya A.</Typography>

            <Typography variant="subtitle1">Arya Eka R.</Typography>
          </Stack>
            </Paper>
        </Stack>
      </Paper>
      <Navigasi navGate={2} />
    </Box>
  );
}
