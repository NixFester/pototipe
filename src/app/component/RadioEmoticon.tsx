import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function RadioEmoticon({
  value,
  handleRadio,
}: {
  value: string;
  handleRadio: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const temaSX= {
    color : "#f6f3f6",
    '&.Mui-checked' : {
      color : "#f6f3f6"
    }
  }
  return (
    <FormControl sx={{}}>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleRadio}
        row
      >
        <FormControlLabel
          value="Senang banget"
          control={<Radio sx={temaSX} />}
          label="😊"
          sx={{color: "#f6f3f6"}}
        />
        <FormControlLabel value="Sedih" control={<Radio sx={temaSX} />} label="😭" />
        <FormControlLabel value="Sakit" control={<Radio sx={temaSX} />} label="😷" />
        <FormControlLabel value="Marah" control={<Radio sx={temaSX} />} label="🤬" />
      </RadioGroup>
    </FormControl>
  );
}
