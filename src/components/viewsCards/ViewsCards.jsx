import { Avatar, Box, Typography } from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import TurnedInRoundedIcon from "@mui/icons-material/TurnedInRounded";
import "./ViewsCards.css";

export default function ViewsCards() {
  return (
    <div className="viewsCards" style={{ padding: "0 20px" }}>
      <Box className="box">
        <Box
          sx={{
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            pr: 1,
          }}
        >
          <Box className="icon eyeIcon">
            <VisibilityRoundedIcon style={{ color: "white" }} />
          </Box>
        </Box>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            flexDirection: "column",
            pl: 0,
          }}
        >
          <Typography variant="body2" sx={{ color: "grey", fontSize: "13px" }}>
            Profile Views
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "black", fontSize: "18px", fontWeight: "500" }}
          >
            112.000
          </Typography>
        </Box>
      </Box>
      <Box className="box">
        <Box
          sx={{
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            pr: 1,
          }}
        >
          <Box className="icon followIcon">
            <PersonRoundedIcon style={{ color: "white" }} />
          </Box>
        </Box>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            flexDirection: "column",
            pl: 0,
          }}
        >
          <Typography variant="body2" sx={{ color: "grey", fontSize: "13px" }}>
            Followers
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "black", fontSize: "18px", fontWeight: "500" }}
          >
            112.000
          </Typography>
        </Box>
      </Box>
      <Box className="box">
        <Box
          sx={{
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            pr: 1,
          }}
        >
          <Box className="icon followerIcon">
            <PersonAddAltRoundedIcon style={{ color: "white" }} />
          </Box>
        </Box>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            flexDirection: "column",
            pl: 0,
          }}
        >
          <Typography variant="body2" sx={{ color: "grey", fontSize: "13px" }}>
            Following
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "black", fontSize: "18px", fontWeight: "500" }}
          >
            112.000
          </Typography>
        </Box>
      </Box>
      <Box className="box">
        <Box
          sx={{
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            pr: 1,
          }}
        >
          <Box className="icon bookMarkIcon">
            <TurnedInRoundedIcon style={{ color: "white" }} />
          </Box>
        </Box>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            flexDirection: "column",
            pl: 0,
          }}
        >
          <Typography variant="body2" sx={{ color: "grey", fontSize: "13px" }}>
            Saved
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "black", fontSize: "18px", fontWeight: "500" }}
          >
            112.000
          </Typography>
        </Box>
      </Box>
      <Box className="box" id={"lastBox"}>
        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
            pr: 1,
          }}
        >
          <Avatar
            src="https://www.pngitem.com/pimgs/m/537-5372558_flat-man-icon-png-transparent-png.png"
            sx={{ width: 50, height: 50 }}
          />
        </Box>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 0, fontWeight: "500", fontSize: "17px" }}
          >
            Social D.
          </Typography>
          <Typography variant="body2">sociald@gmail.com</Typography>
        </Box>
      </Box>
    </div>
  );
}
