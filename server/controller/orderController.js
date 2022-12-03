import Order from "../model/Order.js";
export const createOrder = async(req,res)=>{
    //  console.log(req.body)
    const {amount,number,product,user} = req.body;
    const order = new Order({
        amount,
        number,
        product,
        user
      });
      try {
       const ordercheck =  await order.save();
        if(ordercheck){
           return res.status(201).json({ message: "order sucessfully"});
        }
        return res.json({message:"canot save into database"})
      } catch (err) {
        console.log(err);
      }
  
    
}

export const getOrder = async(req,res)=>{
  const email = req.params.id
  let order;
  try {
    order = await Order.find({email});
  } catch (err) {
    return res.json({message:err})
  }
  if (!order) {
    return res.status(404).json({ messsage: "No order has been done yet" });
  }
  return res.status(200).json({ order });
     
}