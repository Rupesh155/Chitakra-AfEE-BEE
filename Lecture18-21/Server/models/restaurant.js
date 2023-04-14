const mongoose=require('mongoose')
const restaurant=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
   products:[{type: mongoose.Schema.Types.ObjectId,ref:'Product'}] //jo product h uska schema alg se bnayenge aur vha se sb data uth kr yhaa le ayega isme array bna rhe h kyukin data store hoga yha
})
const Restaurant=mongoose.model('Restaurant',restaurant)
module.exports=Restaurant