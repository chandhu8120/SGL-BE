import { Schema, model } from "mongoose";

const diamondsShema = Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  product:{type:String,required:true},
  carat:{type:String,required:true},
  fluorescence:{type:String,required:true},
  shape:{type:String,required:true}
});

const Diamonds = model("Diamonds", diamondsShema);

export default Diamonds;
