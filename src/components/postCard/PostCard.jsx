import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function PostCard({ imgSrc }) {
  return (
    <Card sx={{ maxWidth: 260, height: 280 }}>
      <CardMedia
        sx={{ height: "100%" }}
        image={
          "https://i.pinimg.com/originals/26/f6/c7/26f6c76e2de3b80c38d6545d09f2b9c5.jpg"
        }
        title="green iguana"
      />
    </Card>
  );
}
