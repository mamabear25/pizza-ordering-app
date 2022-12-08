import mongoose from "mongoose";

const BurgerSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxLength: 40,
    },
    desc:{
        type: String,
        required: true,
        maxLength: 100,
    },
    img:{
        type: String,
        required: true,
    },
    prices:{
        type: [Number],
        required: true,
    },
    extraOptions: {
        type: [
            {
                text: { type: String, required: true },
                price: { type: Number, required: true },
            },
        ],
    },

  },
 {timestamps: true}
);

               //if product exists, do not create new one, use existing product
export default mongoose.models.Burger || mongoose.model("Burger", BurgerSchema);