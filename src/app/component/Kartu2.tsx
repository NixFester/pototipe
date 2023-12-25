import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";


export default function Kartu() {
    return (
        
        <Grid
            container
            letterSpacing={1}
            style={{
              border: "2px solid #2e2e2e",
              borderRadius: "10px 10px 10px 10px",
              padding: "10px",
            }}
          >
            <Grid item xs={4}>
              <Stack direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={0.5}>
                <Avatar>P</Avatar>
                <Typography variant="subtitle2" color="initial" align="center">
                  Pengguna
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h6" color="initial">
                Detail Diri
              </Typography>
            </Grid>
          </Grid>
    )
}