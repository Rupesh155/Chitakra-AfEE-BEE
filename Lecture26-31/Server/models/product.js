const mongoose=require('mongoose')
const product=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,ref:'Restaurant'
    }//yha hum store nhi kra rge prrr bs add kra rhe h vha se
})
const Product=mongoose.model('Product',product)
module.exports=Product