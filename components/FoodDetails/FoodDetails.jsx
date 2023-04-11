import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function FoodDetails(props) {
  return (
    <Grid container spacing={2}>
      <Grid item sm={6}>
        <Card style={{ margin: 20 }}>
          <CardMedia
            component="img"
            height="350"
            image={props.f.imageUrl}
            alt={props.f.name}
          />
        </Card>
      </Grid>
      <Grid item sm={6}>
        <CardContent style={{ display: "inline-block" }}>
          <Typography variant="h3" component="div">
            {props.f.name}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            <CurrencyRupeeIcon sx={{ fontSize: 35 }} />
            {props.f.price}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {props.f.description}
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
}

export default FoodDetails;
