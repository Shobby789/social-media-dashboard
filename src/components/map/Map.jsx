import { Box, Typography, Button } from "@mui/material";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";
import PieChart from "../chart/PieChart";
import mapImg from "../../images/map.webp";

export default function Map() {
  return (
    <div style={{ display: "flex", marginTop: "30px", padding: "0 20px" }}>
      <Box className="downBox downBox1">
        <Typography sx={{ fontWeight: "500", mb: 3 }}>
          Data Distribution
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            cursor: "pointer",
          }}
          className="listBox"
        >
          <AdjustRoundedIcon sx={{ mr: 1, color: "orange" }} />
          <Typography>Islamabad</Typography>
          <Typography sx={{ ml: 7 }}>677</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            cursor: "pointer",
          }}
          className="listBox"
        >
          <AdjustRoundedIcon sx={{ mr: 1, color: "orange" }} />
          <Typography>Karachi</Typography>
          <Typography sx={{ ml: 9.5 }}>677</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            cursor: "pointer",
          }}
          className="listBox"
        >
          <AdjustRoundedIcon sx={{ mr: 1, color: "orange" }} />
          <Typography>Lahore</Typography>
          <Typography sx={{ ml: 10 }}>677</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            cursor: "pointer",
            mb: 2,
          }}
          className="listBox"
        >
          <AdjustRoundedIcon sx={{ mr: 1, color: "orange" }} />
          <Typography>Other</Typography>
          <Typography sx={{ ml: 11.3 }}>677</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            mb: 0,
            width: "100%",
          }}
        >
          <Button
            sx={{
              background: "lightBlue",
              width: "100%",
              p: 2,
              color: "blue",
              fontWeight: "bold",
              // "&hover":background:"",
            }}
          >
            See Details
          </Button>
        </Box>
      </Box>
      <Box
        className="downBox downBox2"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ fontWeight: "500", alignSelf: "flex-start", ml: 3, mb: 2 }}
        >
          Map Distribution
        </Typography>
        <img src={mapImg} alt="" width={"80%"} height={"80%"} />
      </Box>
      <Box className="downBox downBox3">
        <PieChart />
      </Box>
    </div>
  );
}
