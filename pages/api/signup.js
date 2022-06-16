import User from "../../models/User"
import connectDB from "../../middleware/connection"
var CryptoJS = require("crypto-js");
// import Users from "../../models/Users";
const handler =async(req,res)=>{
    try {
        if(req.method=="POST"){
            const{name,email}=req.body;
            let u=new User({name,email,password: CryptoJS.AES.encrypt(req.body.password,"123"
                )});
            await u.save();
            // console.log(req.body)
            res.status(200).json({success:"success"});
        }
    
    } catch (error) {
        console.error(error);
        res.status(404).json({error:"Some Error Occurred"})
    }
   
}
export default connectDB(handler)