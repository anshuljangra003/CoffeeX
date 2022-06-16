// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import mongoose from "mongoose"
import connectDB from "../../middleware/connection"
import Product from "../../models/Product"

const handler=async(req,res)=>{
  if(req.method=='POST'){
      for(let i=0;i<req.body.length;i++){
    let p=new Product({
    title:req.body[i].title,
    slug : req.body[i].slug,
    description:req.body[i].description,
    imageURL:req.body[i].imageURL,
    flavour:req.body[i].flavour,
    price:req.body[i].price,
    quantity:req.body[i].quantity,

  })
  await p.save();
     }
res.status(200).json({success:"Successfully Added"})
}   
}
export default connectDB(handler);
  