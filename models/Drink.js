import mongoose from "mongoose";

const DrinkSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxLength: 40,
    },
    img:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
  },
 {timestamps: true}
);

               //if product exists, do not create new one, use existing product
export default mongoose.models.Drink || mongoose.model("Drink", DrinkSchema);