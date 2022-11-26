import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import  dotenv from 'dotenv';
import User from '../model/UserModel.js'

dotenv.config();

export const registerUser = async(req,res)=>{

    const { name, email, password } = req.body;
    let existingUser;
    try {
      existingUser = await User.findOne({ email: email });
    } catch (err) {
      console.log(err);
    }
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists! Login Instead" });
    }
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password,salt);
   
    const user = new User({
      name,
      email,
      avatar:{
           public_id:"this id",
           url:"profile pic url"
      },
      password: hashedPassword,
    });
  
    try {
      await user.save();
    } catch (err) {
      console.log(err);
    }

   // after every thing is correct jwt token should generated for authorization
  // secret key used for encode the user details
  const token = jwt.sign({ id:user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  return res.status(201).json({ message:"register sucessfully",token});

}

export const login = async(req,res)=>{
     const {email,password} = req.body;
     let existingUser;
     try {
      existingUser = await User.findOne({ email: email }).select("+password");
    } catch (err) {
      return new Error(err);
    }
    if (!existingUser) {
      return res.status(400).json({ message: "User not found. Signup Please" });
    }
    
    //  comparing the password
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Inavlid Email / Password" });
    }
    // after every thing is correct jwt token should generated for authorization
   // secret key used for encode the user details
   const token = jwt.sign({ id:existingUser._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 30), // 30 seconds
    httpOnly: true,
    sameSite: "lax",
  });

  return res
  .status(200)
  .json({ message: "Successfully Logged In", user: existingUser,token});

}

export const verifyToken = (req, res, next) => {
  // const header = req.headers['authorization'];

  const cookies = req.headers.cookie;
  // split and getting the first word
  const token = cookies.split("=")[1];

  if (!token) {
    res.status(404).json({ message: "No token found" }); 
  }
  jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(400).json({ message: "Invalid TOken" });
    }
    // after verifying token
    console.log(user.id); 
    req.id = user.id; //😋
  });

  next(); //😋 send to the getUserMiddleware function
};


export const getUser = async (req, res, next) => {
  const userId = req.id;
  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    return new Error(err);
  }
  if (!user) {
    return res.status(404).json({ messsage: "User Not FOund" });
  }
  return res.status(200).json({ user });
};



export const logout = (req, res, next) => {
   res.cookie("token",null,{
    expires:new Date(Date.now()),
    httpOnly:true,
   })

   res.status(200).json({
      sucess:true,
      message:"Logged out"
   })
};


// get user details

export const getUserDetails = async(req,res,next)=>{
    let user;
    try{
       user  = await User.findById(req.user.id)
    }catch(err){
      console.log(err)
    }
    res.status(200).json({user});

}

// update user profile
export const updateUserProfile = async(req,res)=>{
  let updateUser;
  const {name,email,image} = req.body;
  const newUser = {
      name,
      email,
  }
    try{
      updateUser = await User.findByIdAndUpdate(req.user.id,newUser)
  }catch(err){
      console.log(err);
  }
  if(!updateUser){
      return res.json({message:"sorry cannot update data"});
  }
  return res.status(200).json({updateUser});
}

// get all user to check how many user logeed in
export const getAllUser = async(req,res)=>{
   let users;
   try{
      users = await User.find();
   }catch(err){
     console.log(err);
   }
   if(!users){
      return res.json({message:"cannt get user details"});
   }

   return res.status(200).json(users);

}