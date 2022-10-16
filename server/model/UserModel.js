import mongoose from "mongoose";
import validator from 'validator'

const userSchema = mongoose.Schema({
    name:{
        type:String,
        requred:[true,"Please Enter Your Name"],
        maxLength:[30,"Name cannot exceed more than 30 character"],
        minLength:[4,"Name must be more than 4 character"],
    },
    email:{
        type:String,
        requred:true,
        uinque:true,
        validate:[validator.isEmail,"Please Enter a Valid Email"]
    },
    password:{
        type:String,
        requred:true,
        minLength:[8,"Password must be 8 character"],
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            requred:true
        },
        url:{
            type:String,
            requred:true
        }
    },
    role:{
        type:String,
        default:"user",
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date
})


export default  mongoose.model("User",userSchema);