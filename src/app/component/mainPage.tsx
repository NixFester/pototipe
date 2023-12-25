import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Kartu from "./Kartu";
import Kartu2 from "./Kartu2"

export default function MainPage(){
    return (
        <Container maxWidth="md" style={{ padding: "10px" }}>
      <Stack spacing={5} style={{marginTop:"20px"}}>
        <Kartu2/>
        <Stack spacing={2}>  
        <Kartu/>
        <Kartu/>
        <Kartu/>
        <Kartu/>
        </Stack>
      </Stack>
    </Container>
    )
}