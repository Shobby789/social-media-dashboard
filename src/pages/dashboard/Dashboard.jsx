import "./Dashboard.css";
import { Container, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PostAddRoundedIcon from "@mui/icons-material/PostAddRounded";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import SlideshowRoundedIcon from "@mui/icons-material/SlideshowRounded";
import Chart from "../../components/chart/Chart";
import PieChart from "../../components/chart/PieChart";
import ViewsCards from "../../components/viewsCards/ViewsCards";
import MessageList from "../../components/messageList/MessageList";
import Map from "../../components/map/Map";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "14rem",
  height: "15rem",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

export default function Dashboard() {
  return (
    <div style={{ padding: "30px 0" }}>
      {/* <Typography
        variant="h5"
        noWrap
        component="h5"
        sx={{ color: "black", mb: 2, fontWeight: "bold" }}
      >
        Hi, Welcome back
      </Typography> */}
      <ViewsCards />
      {/* <Container
        maxWidth="lg"
        sx={{
          border: "0px solid black",
          display: "flex",
          justifyContent: "space-between",
          p: 1,
        }}
      >
        <DemoPaper square={false} id="icon1" elevation={0}>
          <PostAddRoundedIcon
            sx={{
              fontSize: 55,
              background: "transparent",
              borderRadius: "50%",
              padding: "15px",
              mb: 3,
            }}
            className="icon"
          />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ color: "black", mb: 1, fontWeight: "bold" }}
          >
            89 Posts
          </Typography>
          <Typography
            variant="body"
            noWrap
            component="div"
            sx={{ color: "black", mb: 2, fontWeight: "" }}
          >
            Friends
          </Typography>
        </DemoPaper>
        <DemoPaper id="box2" elevation={0}>
          <ThumbUpRoundedIcon
            sx={{
              fontSize: 55,
              background: "transparent",
              borderRadius: "50%",
              padding: "15px",
              mb: 3,
            }}
            className="icon"
          />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ color: "black", mb: 1, fontWeight: "bold" }}
          >
            89 Likes
          </Typography>
          <Typography
            variant="body"
            noWrap
            component="div"
            sx={{ color: "black", mb: 2, fontWeight: "" }}
          >
            Friends
          </Typography>
        </DemoPaper>
        <DemoPaper id="box3" elevation={0}>
          <MessageRoundedIcon
            sx={{
              fontSize: 55,
              background: "transparent",
              borderRadius: "50%",
              padding: "15px",
              mb: 3,
            }}
            className="icon"
          />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ color: "black", mb: 1, fontWeight: "bold" }}
          >
            89 Comments
          </Typography>
          <Typography
            variant="body"
            noWrap
            component="div"
            sx={{ color: "black", mb: 2, fontWeight: "" }}
          >
            Friends
          </Typography>
        </DemoPaper>
        <DemoPaper id="box4" elevation={0}>
          <SlideshowRoundedIcon
            sx={{
              fontSize: 55,
              background: "transparent",
              border: "0px solid silver",
              borderRadius: "50%",
              padding: "15px",
              mb: 3,
            }}
            className="icon"
          />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ color: "black", mb: 1, fontWeight: "bold" }}
          >
            89 Views
          </Typography>
          <Typography
            variant="body"
            noWrap
            component="div"
            sx={{ color: "black", mb: 2, fontWeight: "" }}
          >
            Friends
          </Typography>
        </DemoPaper>
      </Container> */}
      <Container
        sx={{
          mt: 4,
          p: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <DemoPaper
          elevation={0}
          sx={{
            width: "38rem",
            height: "30rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            borderRadius: "20px",
            p: 3,
          }}
        >
          <Typography variant="h6" component={"div"} sx={{ fontWeight: "700" }}>
            Website Visits
          </Typography>
          <Typography variant="body" component={"div"} sx={{ mb: 4 }}>
            (+43%) than last year
          </Typography>
          <Chart />
        </DemoPaper>
        <DemoPaper
          elevation={0}
          sx={{
            width: "20rem",
            height: "30rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            borderRadius: "20px",
            p: 3,
            pb: 8,
          }}
        >
          <Typography variant="h6" component={"div"} sx={{ fontWeight: "700" }}>
            Messages
          </Typography>
          {/* <PieChart /> */}
          <MessageList />
        </DemoPaper>
      </Container>
      <Map />
    </div>
  );
}
