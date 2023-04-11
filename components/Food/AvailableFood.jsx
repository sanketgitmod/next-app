import * as React from "react";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function AvailableFood(props) {
  const router = useRouter();
  const handleShowDetails = () => {
    router.push("/" + props.f.id);
  };
  return (
    <Card
      onClick={handleShowDetails}
      style={{ width: 600, margin: 20, cursor: "pointer" }}
    >
      <CardMedia
        component="img"
        height="240"
        image={props.f.imageUrl}
        alt={props.f.name}
      />
      <CardContent style={{ display: "inline-block" }}>
        <Typography variant="h5" component="div">
          {props.f.name}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          <CurrencyRupeeIcon sx={{ fontSize: 12 }} />
          {props.f.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.f.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AvailableFood;
