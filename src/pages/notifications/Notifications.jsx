import { Container, Typography } from "@mui/material";
import React from "react";
import UserList from "../../components/userList/UserList";

export default function Notifications() {
  return (
    <Container sx={{ padding: "10px" }}>
      <Typography variant="h6" component={"div"} sx={{ mb: 3 }}>
        Notifications
      </Typography>
      <UserList />
    </Container>
  );
}
