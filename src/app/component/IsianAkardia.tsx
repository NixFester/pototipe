import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Dispatch, SetStateAction, useState } from "react";
import RadioEmoticon from "./RadioEmoticon";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Hubungan from "./Hubungan";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Stack } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

interface IsiAkardia {
  setDiary?: () => void;
  diary?: string;
  expanded: string | false;
  handleChange: (
    panel: string
  ) => (event: React.SyntheticEvent, newExpanded: boolean) => void;
  panel: string;
  judul: string;
  Value?: string;
  valNo?: number | null;
  handleRadio?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setNilai?: Dispatch<SetStateAction<number | null>>;
  handleAlignment?: (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => void;
}

export default function IsianAkardia({
  expanded,
  handleChange,
  panel,
  judul,
  Value = "",
  valNo = 1,
  handleRadio = () => {},
  setNilai,
  handleAlignment,
  diary,
  setDiary,
}: IsiAkardia) {
  const checkNama = (fNama: string, nomor: number) => {
    if (localStorage.getItem(`${fNama}${nomor}`)) {
      nomor++;
      checkNama(fNama, nomor);
    }
    return `${fNama}${nomor}`;
  };

  let isiAkordia = <div></div>;
  const temaTulisan = {
    color: "#f6f3f6", 
  '& label': {color: "#f6f3f6"},
  '& label.Mui-focused': {
      color: '#f9f9fA',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#f9f9fA',
    },'& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#f9f9fA',
      },
      '&:hover fieldset': {
        borderColor: '#f9f9fA',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#f9f9fA',
      },
    },
}

  switch (panel) {
    case "panel1":
      isiAkordia = <RadioEmoticon value={Value} handleRadio={handleRadio} />;
      break;
    case "panel2":
      isiAkordia = (
        <div>
          <TextField
            inputProps={{ style: { color: "#f6f3f6" } }}
            sx={temaTulisan}
            id="filled-basic"
            label="Sharing dong"
            variant="outlined"
            multiline
            fullWidth
            value={Value}
            onChange={handleRadio}
          />
        </div>
      );
      break;
    case "panel3":
      isiAkordia = (
        <Rating
          name="simple-controlled"
          value={valNo}
          onChange={(event, newValue) => {
            if (setNilai) {
              setNilai(newValue);
            }
          }}
          sx={{color: 'white', }}
        />
      );
      break;
    case "panel4":
      isiAkordia = <Hubungan Value={Value} handleAlignment={handleAlignment} />;
      break;
    case "panel5":
      isiAkordia = (
        <div>
          <TextField
          inputProps={{ style: { color: "#f6f3f6" } }}
            id="filled-basic"
            label="Cerita dong"
            variant="outlined"
            multiline
            fullWidth
            sx={temaTulisan}
            value={Value}
            onChange={handleRadio}
          />
        </div>
      );
      break;
    case "panel6":
      isiAkordia = (
        <div>
          <TextField
          inputProps={{ style: { color: "#f6f3f6" } }}
            id="filled-basic"
            label="Sharing dong"
            variant="outlined"
            multiline
            fullWidth
            value={Value}
            sx={temaTulisan}
            onChange={handleRadio}
          />
        </div>
      );
      break;
    case "panel7":
      isiAkordia = (
        <div>
          <TextField
          inputProps={{ style: { color: "#f6f3f6" } }}
            id="filled-basic"
            label="Sharing dong"
            variant="outlined"
            multiline
            fullWidth
            value={Value}
            sx={temaTulisan}
            onChange={handleRadio}
          />
        </div>
      );
      break;
    case "panel8":
      isiAkordia = (
        <Typography>
          Sebenarnya kamu Pengen ga sih? Berteman seperti di masa lalu. Gimana
          sih Perasaan kamu sekarang ketika jauh dengan besti yang dulu, saat
          kemana-mana selalu bareng?
        </Typography>
      );
      break;
    case "panel9":
      isiAkordia = (
        <div>
          <TextField
          inputProps={{ style: { color: "#f6f3f6" } }}
            id="filled-basic"
            label="Sharing dong"
            variant="outlined"
            multiline
            fullWidth
            value={Value}
            sx={temaTulisan}
            onChange={handleRadio}
          />
        </div>
      );
      break;
    case "panel10":
      isiAkordia = (
        <Typography>
          Kamu Keren Banget!😁 Kamu sudah bisa sampai sini. Kamu hebat, kamu
          udah ngelewatin semua ini dan kamu pantas untuk mendapatkan semua
          kebahagiaan!!!
        </Typography>
      );

      break;
    default:
      isiAkordia = (
        <Stack spacing={4}>
          <Button
            variant="contained"
            aria-label="buat"
            sx={{backgroundColor: "#e38b7a", color: "#f6f3f6", "&:hover" : {
                backgroundColor: "#f6f3f6", color: "#bd4b4b"
            }}}
            startIcon={<AddIcon />}
            onClick={setDiary}
          >
            {diary == "" ? "Buat Diary" : "Reset Diary"}
          </Button>
          <TextField
          inputProps={{ style: { color: "#f6f3f6" } }}
            style={diary == "" ? { display: "none" } : {}}
            id="filled-basic"
            label="Diaryku"
            variant="outlined"
            multiline
            fullWidth
            sx={temaTulisan}
            value={diary}
            onChange={handleRadio}
          />
          <Button
            style={diary == "" ? { display: "none" } : {}}
            variant="contained"
            aria-label="simpan"
            sx={{backgroundColor: "#e38b7a", color: "#f6f3f6", "&:hover" : {
                backgroundColor: "#f6f3f6", color: "#bd4b4b"
            }}}
            startIcon={<SaveIcon />}
            onClick={() => {
              const fullNama = "diary";
              let nomorDiary = 1;
              const simpanDiary = checkNama(fullNama, nomorDiary);
              if (diary) {
                localStorage.setItem(simpanDiary, diary);
              }
            }}
          >
            Simpan diary
          </Button>
        </Stack>
      );
  }

  return (
    <Accordion
      expanded={expanded === panel}
      onChange={handleChange(panel)}
      elevation={3}
      sx={{ backgroundColor: "#b46294", color: "#f6f3f6" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${panel}d-content`}
        id={`${panel}d-header`}
      >
        <Typography>{judul}</Typography>
      </AccordionSummary>
      <AccordionDetails>{isiAkordia}</AccordionDetails>
    </Accordion>
  );
}
