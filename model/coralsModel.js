import { Schema, model } from "mongoose";

const coralsSchema = Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
});


const Corals = model("Corals", coralsSchema);
export default Corals;

