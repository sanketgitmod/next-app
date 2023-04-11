import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Button, Container } from "@mui/material";

function AddFoodForm(props) {
  const [food, setFood] = useState({
    name: "",
    imageUrl: "",
    description: "",
    price: "",
  });
  const handleForm = (e) => {
    e.preventDefault();
    props.onAddFood(food);

    setFood({
      name: "",
      imageUrl: "",
      description: "",
      price: "",
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box component="form" sx={{ mt: 1 }}>
        <TextField
          onChange={(e) => setFood({ ...food, name: e.target.value })}
          label="name"
          variant="outlined"
          required
          fullWidth
          margin="normal"
          value={food.name}
        />

        <TextField
          onChange={(e) => setFood({ ...food, imageUrl: e.target.value })}
          label="image url"
          variant="outlined"
          required
          fullWidth
          margin="normal"
          value={food.imageUrl}
        />

        <TextField
          onChange={(e) => setFood({ ...food, description: e.target.value })}
          label="description"
          variant="outlined"
          required
          fullWidth
          margin="normal"
          value={food.description}
        />

        <TextField
          onChange={(e) => setFood({ ...food, price: e.target.value })}
          label="price"
          variant="outlined"
          required
          fullWidth
          margin="normal"
          value={food.price}
        />

        <Button
          onClick={handleForm}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add Food
        </Button>
      </Box>
    </Container>
  );
}

export default AddFoodForm;
