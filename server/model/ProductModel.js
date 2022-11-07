import mongoose from "mongoose";


const productSchema = mongoose.Schema({
        name:{
            type:String,
            requred:[true,"Please Enter Product Name"],
            trim:true
        },
        description:{
            type:String,
            requred:[true,"Please Enter Product Descritpion"]
        },
        price:{
            type:Number,
            requred:[true,"Please Enter Product Name"],
            maxLenght:[8,"Price cannot exceed 8 characters"]
        },
        rating:{
            type:Number,
            default:0
        },
        image:{
            type:String,
        },
        category:{
            type:String,
            requred:true
        },
        Stock:{
            type:Number,
            requred:[true,"Please Enter product Stock"],
            maxLenght:[4,"Stock cannot exceed 4 digit"],
            default:1
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


export default mongoose.model("Product",productSchema);