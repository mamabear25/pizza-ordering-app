import mongoose from "mongoose";

const PromoSchema = new mongoose.Schema({
    img:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
        maxLength: 40,
    },
    desc:{
        type: String,
        required: true,
        maxLength: 200,
    },
},
 {timestamps: true}
);
               //if product exists, do not create new one, use existing product
export default mongoose.models.Promo || mongoose.model("Promo", PromoSchema);