import { Schema, model } from "mongoose";

const jewellarySchema = Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Jewellary = model("Jewellary", jewellarySchema);

export default Jewellary;
