import { Container } from "@mui/material";
import ProfileCard from "../../components/profileCard/ProfileCard";
import SocialMediaCard from "../../components/socialMediaCard/SocialMediaCard";
import AgeEngagementCharts from "../../components/ageEngagementCharts/AgeEngagementCharts";
import PostAnalytics from "../../components/chart/PostAnalytics";

export default function User() {
  return (
    <Container maxWidth="lg" sx={{ p: 0, pb: 5 }}>
      <ProfileCard />
      <Container
        maxWidth="lg"
        sx={{ mt: 3, borderTop: "1px solid silver", pt: 3 }}
      >
        <SocialMediaCard />
      </Container>
      <Container sx={{ mt: 6 }}>
        <AgeEngagementCharts />
        {/* <PostAnalytics /> */}
      </Container>
    </Container>
  );
}
