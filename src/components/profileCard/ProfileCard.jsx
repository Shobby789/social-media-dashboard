import { Avatar, Box, Container, Divider, Typography } from "@mui/material";
import "./ProfileCard.css";

export default function ProfileCard() {
  return (
    <>
      <div>
        <Container className="profile-page">
          <div className="cover-photo"></div>
          <div className="profile-photo"></div>
          <div className="profile-credentials">
            <div>
              <Typography
                variant="h5"
                component={"div"}
                sx={{ fontWeight: "600" }}
              >
                Shoaib Memon
              </Typography>
              <Typography variant="body2" component={"div"}>
                MERN Stack Developer
              </Typography>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
