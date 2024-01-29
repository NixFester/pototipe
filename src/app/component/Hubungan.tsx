import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface HubunganProps {
  Value: string 
  handleAlignment? :(
  event: React.MouseEvent<HTMLElement>,
  newAlignment: string,
) => void
  VSatu: string,
  VDua :string
  VTiga : string
}

export default function Hubungan({Value,handleAlignment, VSatu, VDua, VTiga}:HubunganProps) {
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
        <ToggleButton value="Aman" sx={sSX}>{VSatu}</ToggleButton>
        <ToggleButton value="Renggang" sx={sSX}>{VDua}</ToggleButton>
        <ToggleButton value="Renggang banget" sx={sSX}>{VTiga}</ToggleButton>
      </ToggleButtonGroup>
    )
}