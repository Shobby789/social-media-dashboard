import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "25px",
}));

export default function SocialMediaCard() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <Item elevation={0}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
              >
                <Typography>
                  <FacebookIcon sx={{ color: "#2980b9", fontSize: "30px" }} />
                </Typography>
                <Typography>1K Views</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "" }}>
                <Typography variant="h6">4.2M</Typography>
                <Typography sx={{ ml: 5 }} variant="h6">
                  1.2M
                </Typography>
                <Typography sx={{ ml: 5 }} variant="h6">
                  2.2M
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "" }}>
                <Typography variant="body2">Followers</Typography>
                <Typography variant="body2" sx={{ ml: 2 }}>
                  Reactions
                </Typography>
                <Typography variant="body2" sx={{ ml: 2 }}>
                  Comments
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Item elevation={0}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
              >
                <Typography>
                  <InstagramIcon sx={{ color: "#e74c3c", fontSize: "30px" }} />
                </Typography>
                <Typography>1K Views</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "" }}>
                <Typography variant="h6">4.2M</Typography>
                <Typography sx={{ ml: 5 }} variant="h6">
                  1.2M
                </Typography>
                <Typography sx={{ ml: 5 }} variant="h6">
                  2.2M
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "" }}>
                <Typography variant="body2">Followers</Typography>
                <Typography variant="body2" sx={{ ml: 2 }}>
                  Reactions
                </Typography>
                <Typography variant="body2" sx={{ ml: 2 }}>
                  Comments
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Item elevation={0}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
              >
                <Typography>
                  <TwitterIcon sx={{ color: "#2980b9", fontSize: "30px" }} />
                </Typography>
                <Typography>1K Views</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "" }}>
                <Typography variant="h6">4.2M</Typography>
                <Typography sx={{ ml: 5 }} variant="h6">
                  1.2M
                </Typography>
                <Typography sx={{ ml: 5 }} variant="h6">
                  2.2M
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "" }}>
                <Typography variant="body2">Followers</Typography>
                <Typography variant="body2" sx={{ ml: 2 }}>
                  Reactions
                </Typography>
                <Typography variant="body2" sx={{ ml: 2 }}>
                  Comments
                </Typography>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <Item elevation={0}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
              >
                <Typography>
                  <PinterestIcon sx={{ color: "#c0392b", fontSize: "30px" }} />
                </Typography>
                <Typography>1K Views</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "" }}>
                <Typography variant="h6">4.2M</Typography>
                <Typography sx={{ ml: 5 }} variant="h6">
                  1.2M
                </Typography>
                <Typography sx={{ ml: 5 }} variant="h6">
                  2.2M
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "" }}>
                <Typography variant="body2">Followers</Typography>
                <Typography variant="body2" sx={{ ml: 2 }}>
                  Reactions
                </Typography>
                <Typography variant="body2" sx={{ ml: 2 }}>
                  Comments
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Item elevation={0}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
              >
                <Typography>
                  <LinkedInIcon sx={{ color: "#2980b9", fontSize: "30px" }} />
                </Typography>
                <Typography>1K Views</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "" }}>
                <Typography variant="h6">4.2M</Typography>
                <Typography sx={{ ml: 5 }} variant="h6">
                  1.2M
                </Typography>
                <Typography sx={{ ml: 5 }} variant="h6">
                  2.2M
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "" }}>
                <Typography variant="body2">Followers</Typography>
                <Typography variant="body2" sx={{ ml: 2 }}>
                  Reactions
                </Typography>
                <Typography variant="body2" sx={{ ml: 2 }}>
                  Comments
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Item elevation={0}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
              >
                <Typography>
                  <YouTubeIcon sx={{ color: "#eb2f06", fontSize: "30px" }} />
                </Typography>
                <Typography>1K Views</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "" }}>
                <Typography variant="h6">4.2M</Typography>
                <Typography sx={{ ml: 5 }} variant="h6">
                  1.2M
                </Typography>
                <Typography sx={{ ml: 5 }} variant="h6">
                  2.2M
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "" }}>
                <Typography variant="body2">Followers</Typography>
                <Typography variant="body2" sx={{ ml: 2 }}>
                  Reactions
                </Typography>
                <Typography variant="body2" sx={{ ml: 2 }}>
                  Comments
                </Typography>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
