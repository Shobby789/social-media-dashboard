import { Box, Container, Typography } from "@mui/material";
import RecipeReviewCard from "../../components/card/Card";

export default function Saved() {
  const savedItems = [
    {
      title: "Shrimp and Chorizo Paella",
      sub_heading: "From LinkedIn",
      image:
        "https://www.homecareinsight.co.uk/2020/07/connected-technology.jpg",
    },
    {
      title: "Shrimp and Chorizo Paella",
      sub_heading: "From Facebook",
      image: "https://www.rappler.com/tachyon/2022/12/tech-yearender-2022.jpg",
    },
    {
      title: "Shrimp and Chorizo Paella",
      sub_heading: "Twitter",
      image: "https://ipcdigital.com/wp-content/uploads/2022/07/Technology.jpg",
    },
    {
      title: "Shrimp and Chorizo Paella",
      sub_heading: "Other Platform",
      image:
        "https://www.theforage.com/blog/wp-content/uploads/2022/09/tech-companies.jpg",
    },
  ];
  return (
    <Container>
      <Typography variant="h6" component={"div"} sx={{ mb: 3 }}>
        Saved Items
      </Typography>
      {/* <Container sx={{ border: "1px solid black", mt: 3, p: 0 }}> */}
      <Box
        sx={{
          flexGrow: 1,
          p: 0,
          m: 0,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {savedItems.map(({ title, sub_heading, image }) => {
          return (
            <RecipeReviewCard
              title={title}
              subHeading={sub_heading}
              cardImg={image}
            />
          );
        })}
        {/* <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>xs=8</Item>
          </Grid>
        </Grid> */}
      </Box>
      {/* </Container> */}
    </Container>
  );
}
