import { Schema, model } from "mongoose";

const beadsSchema = Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Beads = model("Beads", beadsSchema);

export default Beads;

