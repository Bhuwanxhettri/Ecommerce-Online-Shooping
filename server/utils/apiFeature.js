export default class ApiFeatures{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }
    search(){
        const keyword = this.queryStr.keyword 
            ?{
                name:{
                    $regex:this.queryStr.keyword,
                    $options:"i" // case insensitive means small or big letter no matter
                }
            }:{}
          this.query = this.query.find({...keyword})  
          return this //returning the existing class ApiFeatures
    }
    
    filter(){
        const queryCopy = {...this.queryStr};
        
        // removing some fields for category
        const removeFileds =["keyword","page","limit"];
         
        removeFileds.forEach((key)=> delete queryCopy[key]);

        // filter for Price and Rating
    
        let queryStr =JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g,(key)=>`$${key}`);
        
        this.query = this.query.find(JSON.parse(queryStr));
        return this;

    }

    pagination(reslutPerPage){
         const currentPage = Number(this.queryStr.page) || 1;
         const skip = reslutPerPage *(currentPage - 1);
         this.query = this.query.limit(reslutPerPage).skip(skip)
         return this;
    }

}
