import mongoose, { mongo } from 'mongoose';
const { Schema } = mongoose;

const ProductSchema = new Schema({
    title:{type:String,required:true},
    slug:{type:String,unique:true, required:true},
    description:{type:String,required:true},
    imageURL:{type:String},
    flavour:{type:String},
    price:{type:Number},
    quantity:{type:Number,required:true}
})
mongoose.models={}
export default mongoose.model("Product",ProductSchema);
