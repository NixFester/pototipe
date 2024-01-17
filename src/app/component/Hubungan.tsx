import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
export default function Hubungan({Value,handleAlignment}:{Value: string, handleAlignment? :(
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => void }) {
    return (
        <ToggleButtonGroup
        color="primary"
        value={Value}
        exclusive
        onChange={handleAlignment}
        aria-label="hubungan"
      >
        <ToggleButton value="Aman">Aman 🦾</ToggleButton>
        <ToggleButton value="Renggang">Renggang 😥</ToggleButton>
        <ToggleButton value="Renggang banget">Renggang Banget 😭</ToggleButton>
      </ToggleButtonGroup>
    )
}