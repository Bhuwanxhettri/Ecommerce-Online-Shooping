import jwt from 'jsonwebtoken';
// import User from '../model/UserModel';


export const isAuthenticatedUser = async(req,res,next)=>{
      const token = req.cookies.token;
      if(!token){
       return  res.json({message:"Please login first"});
      }

      jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
          return res.status(400).json({ message: "Invalid TOken" });
        }
        req.user = user;
      });
    
    next();
}

export const authorizeRole =(...roles)=>{
   return async (req,res,next)=>{
          const user = await User.findById(req.user.id);
         if(!roles.includes(user.role)){
            return res.json({message:`Role:${user.role} is not access this resources`})
         }
    next();
   }

}
