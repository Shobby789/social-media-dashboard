import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  borderRadius: "0px",
}));

export default function AgeEngagementCharts() {
  const data = {
    labels: ["Reactions", "Views", "Share"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 12],
        backgroundColor: ["#38ada9", "#0c2461", "#e55039"],
        borderColor: ["#38ada9", "#0c2461", "#e55039"],
        borderWidth: 1,
      },
    ],
  };
  const data2 = {
    labels: ["Views", "Reactions", "Share"],
    datasets: [
      {
        label: "# of Votes",
        data: [32, 19, 12],
        // backgroundColor: ["#38ada9", "#0c2461", "#e55039"],
        backgroundColor: ["#0c2461", "#e55039", "#38ada9"],
        borderColor: ["#0c2461", "#e55039", "#38ada9"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Item elevation={0}>
              <Typography variant="h6" sx={{ color: "black", mb: 3 }}>
                Age Engagement Rate
              </Typography>
              <Pie data={data} />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                pt: 16,
                pb: 15.3,
                pl: 0,
              }}
            >
              <Box sx={{ display: "flex", mb: 2 }}>
                <FiberManualRecordIcon sx={{ color: "#0c2461" }} />
                {/* <Typography>10-25</Typography> */}
                <Typography sx={{ ml: 2 }}>40%</Typography>
              </Box>
              <Box sx={{ display: "flex", mb: 2 }}>
                <FiberManualRecordIcon sx={{ color: "#38ada9" }} />
                {/* <Typography>10-25</Typography> */}
                <Typography sx={{ ml: 2 }}>30%</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <FiberManualRecordIcon sx={{ color: "#e55039" }} />
                {/* <Typography>10-25</Typography> */}
                <Typography sx={{ ml: 2 }}>30%</Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item elevation={0}>
              <Typography variant="h6" sx={{ color: "black", mb: 3 }}>
                Ethinicity Engagement Rate
              </Typography>
              <Pie data={data2} />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                pt: 16,
                pb: 15.3,
                pl: 0,
              }}
            >
              <Box sx={{ display: "flex", mb: 2 }}>
                <FiberManualRecordIcon sx={{ color: "#0c2461" }} />
                {/* <Typography>10-25</Typography> */}
                <Typography sx={{ ml: 2 }}>52%</Typography>
              </Box>
              <Box sx={{ display: "flex", mb: 2 }}>
                <FiberManualRecordIcon sx={{ color: "#38ada9" }} />
                {/* <Typography>10-25</Typography> */}
                <Typography sx={{ ml: 2 }}>18%</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <FiberManualRecordIcon sx={{ color: "#e55039" }} />
                {/* <Typography>10-25</Typography> */}
                <Typography sx={{ ml: 2 }}>30%</Typography>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
