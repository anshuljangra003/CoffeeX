import User from "../../models/User"
import connectDB from "../../middleware/connection"
var CryptoJS = require("crypto-js");
// import Users from "../../models/Users";
const handler =async(req,res)=>{
    try {
        if(req.method=="POST"){
            let user=await User.findOne({"email":req.body.email});
            var bytes  = CryptoJS.AES.decrypt(user.password, '123');
            var originalText = bytes.toString(CryptoJS.enc.Utf8);
            if(user){
            if(req.body.email==user.email&& req.body.password==originalText){
            res.status(200).json({success:"success",user:user.email,name:user.name})
            }
            res.status(404).json({error:"WRONG DETAILS"})
        }
        res.status(404).json({error:"WRONG DETAILS"})
        }
    
    } catch (error) {
        console.error(error);
        res.status(404).json({error:"NOT FOUND"})
    }
   
}
export default connectDB(handler)