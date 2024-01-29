import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
export default function Hubungan({Value,handleAlignment}:{Value: string, handleAlignment? :(
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => void }) {
    const sSX = {"&.Mui-selected, &.Mui-selected:hover": {
      color: "#f6f3f6",
      backgroundColor: '#9d97af'
    }}
    return (
        <ToggleButtonGroup
        value={Value}
        exclusive
        onChange={handleAlignment}
        aria-label="hubungan"
        sx={{color: 'white', backgroundColor: '#bd4b4b' }}
      >
        <ToggleButton value="Aman" sx={sSX}>Aman 🦾</ToggleButton>
        <ToggleButton value="Renggang" sx={sSX}>Renggang 😥</ToggleButton>
        <ToggleButton value="Renggang banget" sx={sSX}>Renggang Banget 😭</ToggleButton>
      </ToggleButtonGroup>
    )
}