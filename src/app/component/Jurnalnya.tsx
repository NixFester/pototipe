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
  Checkbox,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

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
  return (
    <Stack spacing={2}>
      <Paper square={false} elevation={4} sx={{ paddingTop: "10px" }}>
        <TextField
          onChange={(e) => {
            setGanti(e.target.value);
          }}
          sx={{ color: "white !important" }}
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
            href={`https://wa.me/6281290167102?text=${encodeURI(isiDiary)}`}
            variant="contained"
            endIcon={<WhatsAppIcon />}
            sx={{ fontSize: "0.8em" }}
          >
            Curhat ke Ahli-nya
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
