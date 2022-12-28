import mongoose from "mongoose";

const userOrderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxLength: 200,
    },
    size:{
        type: Number,
        required: true,
    },
    toppings:{
        type: [String],
        required: false,
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    total:{
        type: Number,
        required: true
    },


},{timestamps: true})

export default mongoose.models.userOrderSchema || mongoose.model("userOrder", userOrderSchema);
