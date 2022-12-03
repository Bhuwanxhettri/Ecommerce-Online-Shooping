import mongoose from "mongoose";
const orderSchema = mongoose.Schema({
        amount:{
            type:Number,
        },
        number:{
            type:String,
        },
        product:[],
        user:{
            type:String
        },
        orderBy:{
           type:mongoose.Schema.ObjectId,
           ref:"User",
        //    required:true
        },
        createdAt:{
            type:Date,
            default:Date.now()
        }
})


export default mongoose.model("Order",orderSchema);