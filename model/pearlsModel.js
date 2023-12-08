import { Schema, model } from "mongoose";

const pearlsSchema = Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
});


const Pearls = model("Pearls", pearlsSchema);
export default Pearls;

