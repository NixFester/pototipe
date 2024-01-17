import { Box,Typography, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

interface HiScreenObj {
    keMainPage:VoidFunction, 
    onsec:boolean,
    onBs:boolean,
    bs:boolean,
    nama:string
}

export default function HiScreen({keMainPage, onsec,onBs,bs,nama}:HiScreenObj) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign={"left"}
      style={{
        display: onsec && onBs ? "block" : "none",
        padding: "25vh 8%",
      }}
      onClick={keMainPage}
    >
      <Typography
        variant="h3"
        color="initial"
        className={
          bs ? "tracking-in-contract-bck" : "tracking-out-contract-bck"
        }
      >
        Hi,{" "}
        {nama !== "no"
          ? nama.split(" ")[0].charAt(0).toUpperCase() +
            nama.split(" ")[0].slice(1)
          : ""}
      </Typography>
      <Typography
        variant="h4"
        color="initial"
        className={
          bs ? "tracking-in-contract-bck" : "tracking-out-contract-bck"
        }
      >
        Apa yang ingin kamu ceritakan kali ini?
      </Typography>
      <Button
        style={nama !== "no" ? { display: "none" } : {}}
        variant="outlined"
        endIcon={<LoginIcon />}
        href="/signup"
      >
        Login
      </Button>
    </Box>
  );
}
