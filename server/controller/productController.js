import Product from '../model/ProductModel.js';
import ApiFeatures from '../utils/apiFeature.js';

// create proudct

// admin - route 😎
export const createProduct = async(req,res,next)=>{
    // req.body.user = req.user.id;
    let product;
    try{
        product =await Product.create(req.body);
    }catch(err){
        console.log(err);
    }
    if(!product){
        return res.status(400).json({message:"product does not store in database"});
    }

    return res.status(200).json({
        message:"Product Added Sucessfully"
    })

}

// admin - route 😎
export const updateProduct= async(req,res,next)=>{
     let updateProduct;
     let product;
     const product_id = req.params.id;
      
     try{
         product = await Product.findById(product_id);
     }catch(err){
         console.log(err);
     }
     
     if(!product){
         return res.status(400).json({message:"product does not found"});
     }

     try{
         updateProduct = await Product.findByIdAndUpdate(product_id,req.body);
     }catch(err){
        console.log(err);
     }
     if(!updateProduct){
        return res.status(400).json({message:"product cannot Updated"});
    }
    
    return res.status(200).json({
        message:"Product Updated Successfully"
    })
}

// admin - route 😎
export const deleteProduct = async(req,res)=>{
    let product;
    try{
         product = await Product.findByIdAndDelete(req.params.id);
    }catch(err){
        console.log(err);
    }
    if(!product){
        return res.status(400).json({message:"product not deleted"});
    }

   return res.status(200).json({message:"Product deleted Sucessfully"});
}

export const getProductDetails = async(req,res)=>{
    let product;
    try{
       product = await Product.findById(req.params.id);
    }catch(err){
        console.log(err);
    }
    if(!product){
        return res.status(400).json({message:"product cannot get"});
    }

    return res.status(200).json(product);

}

export const getAllProduct = async(req,res)=>{
     let resultPerPage =5;
     let products;
     
     const productCount = await Product.countDocuments();
     const apiFeature = new ApiFeatures(Product.find(),req.query)
                                       .search()
                                       .filter()
                                       .pagination(resultPerPage)
  
    try{
        products = await apiFeature.query;
    }catch(err){
       console.log(err);
    }
    if(!products){
     return res.status(400).json({message:"Cannot get the product"});
    }
    return res.status(200).json({products,productCount});
 }
 

 export const createProductReview= async(req,res)=>{
     const {rating,comment,productId} = req.body;
    try{
        const review ={
            user:req.user.id,
            rating:Number(rating),
            comment
         }
        const product = await Product.findById(productId);

        // finding is user already reviewd
        const isReviewd = product.reviews.find(
            (rev)=>rev.user.toString() === req.user.id.toString()
        )
        
        if(isReviewd){
            product.reviews.forEach(rev => {
                if(rev.user.toString() === req.user.id.toString()){
                      rev.rating = rating;
                      rev.comment = comment;
                }  
            });
        }else{
            product.reviews.push(review)
            product.numofReviews = product.reviews.length;
        }

        //  average of rating
        let totalRating=0;
         product.reviews.forEach(rev=>{
            totalRating+=rev.rating
        });
        product.rating =  totalRating/product.numofReviews;
                 
       await product.save();

       return res.status(200).json({
        sucess:true
       })

    }catch(err){
       console.log(err)
    }

 }
