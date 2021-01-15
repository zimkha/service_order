import { model, Schema, ObjectId } from "mongoose";

const orderSchema = new Schema({
    _id : {type: String},
    drugs: {type: {
    name: {type: String},
    frequency: {type: String},
    tags: {type: String},
    TobeCareful: {type: String},
  }},
  patient: {type: String},
  medecin: {type : String},
  createdAt: { type: Date},
  updatedAt: {type: Date},
});

export default model("Order", orderSchema);