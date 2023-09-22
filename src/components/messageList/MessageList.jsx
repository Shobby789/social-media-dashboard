import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function MessageList() {
  return (
    <div>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", p: 0 }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://cdn-icons-png.flaticon.com/512/146/146031.png"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography sx={{ color: "black" }}>Shoaib Memon</Typography>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline", cursor: "pointer" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {/* Ali Connors */}
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </Link>
        <Divider variant="inset" component="li" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://cdn-icons-png.flaticon.com/512/236/236832.png"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography sx={{ color: "black" }}>M.Haseeb</Typography>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {/* to Scott, Alex, Jennifer */}
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </Link>
        <Divider variant="inset" component="li" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="data:image/jpeg;base64,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"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography sx={{ color: "black" }}>Moazam Ali</Typography>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {/* Sandra Adams */}
                  </Typography>
                  {" — Do you have Paris? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </Link>
        <Divider variant="inset" component="li" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://www.pngitem.com/pimgs/m/537-5372558_flat-man-icon-png-transparent-png.png"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography sx={{ color: "black" }}>Saqlain Abid</Typography>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {/* Sandra Adams */}
                  </Typography>
                  {" — Do you have Paris? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
