
import { Schema, model } from "mongoose";

const beadsSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }
});

const Beads = model("Beads", beadsSchema); 

export default Beads;
