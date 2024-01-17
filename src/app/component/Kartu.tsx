import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Kartu() {
    return (
        
        <Grid
            container
            letterSpacing={1}
          >
            <Grid item xs={5.5} style={{
              border: "2px solid #2e2e2e",
              borderRadius: "10px 10px 10px 10px",
              padding: "10px",
            }}>
              <Container maxWidth="md" style={{ paddingTop: "5px" }}>
                <Avatar>O</Avatar>
              </Container>
            </Grid>
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={5.5} style={{
              border: "2px solid #2e2e2e",
              borderRadius: "10px 10px 10px 10px",
              padding: "10px",
            }}>
              <Typography variant="h6" color="initial">
                Judul
              </Typography>
              <Typography variant="subtitle2" color="initial">
                Detail
              </Typography>
            </Grid>
          </Grid>
    )
}