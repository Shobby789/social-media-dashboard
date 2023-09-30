import "./Dashboard.css";
import { Container, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Chart from "../../components/chart/Chart";
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
      <ViewsCards />

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
            (+20%) than last month
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
          <MessageList />
        </DemoPaper>
      </Container>
      <Map />
    </div>
  );
}
