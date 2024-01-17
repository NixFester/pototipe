import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function RadioEmoticon({value,handleRadio}:{value:string
     handleRadio : (event: React.ChangeEvent<HTMLInputElement>)=> void }) {
    return (
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleRadio}
            row
          >
            <FormControlLabel
              value="Senang banget"
              control={<Radio />}
              label="😊"
            />
            <FormControlLabel value="Sedih" control={<Radio />} label="😭" />
            <FormControlLabel value="Sakit" control={<Radio />} label="😷" />
            <FormControlLabel value="Marah" control={<Radio />} label="🤬" />
          </RadioGroup>
        </FormControl>
    )
}