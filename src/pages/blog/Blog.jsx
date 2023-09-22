import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./Dashboard.css";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import TurnedInRoundedIcon from "@mui/icons-material/TurnedInRounded";
import Chart from "../../components/charts/Chart";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";
import CircleChart from "../../components/charts/CircleChart";
import mapImg from "../../images/map.webp";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BloG() {
  return (
    <Container maxWidth="lg" sx={{ pb: 3 }}>
      <Container sx={{ flexGrow: 1, display: "flex", p: 0 }}>
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
            <Typography
              variant="body2"
              sx={{ color: "grey", fontSize: "13px" }}
            >
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
            <Typography
              variant="body2"
              sx={{ color: "grey", fontSize: "13px" }}
            >
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
            <Typography
              variant="body2"
              sx={{ color: "grey", fontSize: "13px" }}
            >
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
            <Typography
              variant="body2"
              sx={{ color: "grey", fontSize: "13px" }}
            >
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
      </Container>
      <Container sx={{ mt: 3 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Item sx={{ p: 4, borderRadius: "10px" }} elevation={0}>
                <Typography
                  variant="h6"
                  component={"div"}
                  sx={{ color: "black", textAlign: "left" }}
                >
                  Profile Vists
                </Typography>
                <Chart />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item sx={{ p: 2, borderRadius: "10px" }} elevation={0}>
                <Typography
                  component={"div"}
                  sx={{
                    color: "black",
                    textAlign: "left",
                    fontSize: "18px",
                    fontWeight: "500",
                    ml: 2,
                    // mb: 1,
                  }}
                >
                  Recent Messages
                </Typography>
                {/* <Divider /> */}
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                    p: 0,
                  }}
                >
                  <ListItemButton>
                    <ListItem sx={{ cursor: "pointer" }}>
                      <ListItemAvatar>
                        <Avatar src="https://cdn-icons-png.flaticon.com/512/236/236831.png" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            component={"div"}
                            sx={{
                              color: "black",
                              textAlign: "left",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Shoaib Memon
                          </Typography>
                        }
                        secondary="Jan 9, 2014"
                      />
                    </ListItem>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItem sx={{ cursor: "pointer" }}>
                      <ListItemAvatar>
                        <Avatar src="https://cdn-icons-png.flaticon.com/512/236/236831.png" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            component={"div"}
                            sx={{
                              color: "black",
                              textAlign: "left",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            M.Haseeb
                          </Typography>
                        }
                        secondary="Jan 7, 2014"
                      />
                    </ListItem>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItem sx={{ cursor: "pointer" }}>
                      <ListItemAvatar>
                        <Avatar src="https://cdn-icons-png.flaticon.com/512/236/236831.png" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            component={"div"}
                            sx={{
                              color: "black",
                              textAlign: "left",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Saqlain Abid
                          </Typography>
                        }
                        secondary="July 20, 2014"
                      />
                    </ListItem>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItem sx={{ cursor: "pointer" }}>
                      <ListItemAvatar>
                        <Avatar src="https://cdn-icons-png.flaticon.com/512/236/236831.png" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            component={"div"}
                            sx={{
                              color: "black",
                              textAlign: "left",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Qadirdad
                          </Typography>
                        }
                        secondary="July 20, 2014"
                      />
                    </ListItem>
                  </ListItemButton>
                  {/* <ListItemButton>
                      <ListItem sx={{ cursor: "pointer" }}>
                        <ListItemAvatar>
                          <Avatar src="https://cdn-icons-png.flaticon.com/512/236/236831.png" />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography
                              component={"div"}
                              sx={{
                                color: "black",
                                textAlign: "left",
                                fontSize: "16px",
                                fontWeight: "500",
                              }}
                            >
                              Tanveer Khan
                            </Typography>
                          }
                          secondary="July 20, 2014"
                        />
                      </ListItem>
                    </ListItemButton> */}
                </List>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container sx={{ mt: 3, display: "flex" }}>
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
            <Typography>Europe</Typography>
            <Typography sx={{ ml: 11 }}>677</Typography>
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
            <Typography>America</Typography>
            <Typography sx={{ ml: 9.8 }}>677</Typography>
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
            <Typography>Australia</Typography>
            <Typography sx={{ ml: 9.4 }}>677</Typography>
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
            <Typography sx={{ ml: 12.5 }}>677</Typography>
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
          <CircleChart />
        </Box>
      </Container>
    </Container>
  );
}
