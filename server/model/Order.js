import mongoose from "mongoose";
const orderSchema = mongoose.Schema({
        name:{
            type:String,
            trim:true
        },
        description:{
            type:String,
        },
        price:{
            type:Number,
        },
        image:{
            type:String,
        },
        category:{
            type:String,
        },
        numofReviews:{
            type:Number,
            default:0
        },
        reviews:[
            {
                user: {
                    type: mongoose.Schema.ObjectId,
                    ref: "User",
                    required: true,
                  },
                rating:{
                    type:Number,
                    required:true
                },
                comment:{
                    type:String,
                    required:true
                }
            }
        ],
        user:{
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