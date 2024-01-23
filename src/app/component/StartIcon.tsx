import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function StartIcon({
  klikLanjut,
  as,
  onsec,
}: {
  klikLanjut: VoidFunction;
  as: boolean;
  onsec: boolean;
}) {
  return (
    <div style={{ display: onsec ? "none" : "block" }}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        onClick={klikLanjut}
        className={as ? "puff-in-center" : "puff-out-center"}
      >
        <Avatar
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "red",
            fontSize: "4em",
          }}
          imgProps={{
            style: {transform: 'scale(1.5)'}
          }}
          src="/sua.png"
        >
        </Avatar>
        <Typography variant="h5" mt="10px" >
          {" "}
         Ketan
        </Typography>
      </Box>
    </div>
  );
}
