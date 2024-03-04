import {
  Stack,
  TextField,
  Paper,
  Button,
  Typography,
  Avatar,
  IconButton,
  Divider,
  Box,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import { deepPurple } from '@mui/material/colors';

export default function Jurnalnya({
  isiDiary,
  noDiary,
  refresh,
}: {
  isiDiary: string;
  noDiary: number;
  refresh: () => void;
}) {
  const [ganti, setGanti] = useState("");
  const [kirimIsiJuga,setKirimIsiJuga] = useState(false)

  const [kondisi, setKondisi] = useState(false);
  const temaTulisan = {
    "& .MuiInput-underline:after": {
      borderBottomColor: "#f9f9fA",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#f9f9fA",
      },
      "&:hover fieldset": {
        borderColor: "#f9f9fA",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#f9f9fA",
      },
    },
    "& .MuiFilledInput-root": {
      backgroundColor: "#f9f9fA",
    },
  };

  const temaButton = {
    backgroundColor: "#b46294",
    color: "#f6f3f6",
    "&:hover": {
      backgroundColor: "#f6f3f6",
      color: "#bd4b4b",
    },
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKirimIsiJuga(event.target.checked);
  };
  return (
    <div style={{ paddingTop: "10px" }}>
      {" "}
      <Stack spacing={2}>
        <Paper square={false} elevation={4}>
          <TextField
            onChange={(e) => {
              setGanti(e.target.value);
            }}
            sx={temaTulisan}
            label={"Diary ke-1"}
            style={ganti !== "" ? {} : { pointerEvents: "none" }}
            value={ganti !== "" ? ganti : isiDiary}
            multiline
            fullWidth
            variant="filled"
          />
        </Paper>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Stack spacing={2} direction="row">
            <Button
              sx={temaButton}
              variant="contained"
              startIcon={ganti !== "" ? <SaveIcon /> : <EditIcon />}
              onClick={() => {
                if (ganti !== "") {
                  localStorage.setItem(`diary${noDiary}`, ganti);
                  refresh();
                }
                if (ganti == "") {
                  setGanti(isiDiary);
                }
              }}
            >
              {ganti == "" ? "Edit" : "Simpan"}
            </Button>
            <Button
              onClick={() => {
                setKondisi((prev) => !prev);
                console.log(kondisi);
              }}
              variant="contained"
              sx={temaButton}
            >
              Hari ini lagi ga baik baik aja? 😭
            </Button>
          </Stack>
        </Stack>
        <Stack display={kondisi ? "" : "none"}>
          <Paper elevation={5}>
            <Stack divider={<Divider orientation="horizontal" flexItem />}>
              <Typography textAlign={"center"}>
                Curhat Yuk!
              </Typography>
              <Paper sx={{ padding: "10px" }} >
                <Stack
                  direction={"row"}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Avatar src="/Ahli.jpg"/>
                  <Stack>
                    <Typography>Kartika Dwi Hapsari</Typography>
                    <Typography variant={"caption"}>
                      Duta Kesehatan Mental Dandiah Care
                    </Typography>
                  </Stack>
                  <IconButton aria-label="kontak" href={kirimIsiJuga?`https://wa.me/6281290167102?text=${encodeURI(isiDiary)}`:"https://wa.me/6281290167102"}>
                    <WhatsAppIcon />
                  </IconButton>
                </Stack>
              </Paper>
              <Box
              display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <FormControlLabel control={<Checkbox checked={kirimIsiJuga} onChange={handleChange}/>} label="Kirim juga Diary Kamu?" />
              </Box>
            </Stack>
          </Paper>
        </Stack>
      </Stack>
    </div>
  );
}
/*
href={`https://wa.me/6281290167102?text=${encodeURI(isiDiary)}`}
*/
