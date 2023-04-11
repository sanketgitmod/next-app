import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  price: String,
});

export default mongoose.models.Food || mongoose.model("Food", foodSchema);
