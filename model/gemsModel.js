import { Schema, model } from "mongoose";

const gemsSchema = Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Gems = model("Gems", gemsSchema);

export default Gems;
