const express=require('express')
const mongoose=require('mongoose')
const bcrypt =require('bcrypt')
const app=express()
const cors=require('cors')
app.use(cors())
// const jwt  =require('jwt')

const bodyparser=require('body-parser')
const urluncodedeParser=bodyparser.urlencoded({extended:false})
app.use(bodyparser.json(),urluncodedeParser)
const User=require('./models/users')
const Restaurant=require('./models/restaurant')
// const Product=require('./models/product')
const generateAuthToken = require('./jwtTokenGenerator')
const Product = require('./models/product')
// const jwt=require('jwt')

mongoose.set('strictQuery' , true)
mongoose.connect('mongodb://127.0.0.1:27017/sam').then((res)=>{
    console.log('data base  connected ho gya ab kam kr le')

}).catch((err)=>{
    console.log(err,"errrr")

})

// app.get('/',(req,res)=>{
//     res.send('hello from server')
// })
// app.post('/register',async(req,res)=>{
//     const user=req.body
//     console.log(req.body,"akansha")
//     const  Email=await User.findOne({email:user.email})
//     if(Email){
//         res.send('user is already register in  our dataBase')
//     } 
//     else{
//         console.log(req.body.passWord,"rrr")
//             user.passWord= await bcrypt.hash(req.body.passWord,10)
//             console.log(req.body.passWord,"rrr")
//             const dbUser=new User({
//                 firstName:user.firstName,
//                 lastName:user.lastName,
//                 email:user.email.toLowerCase(),
//                 passWord:user.passWord


//             })
//              await dbUser.save()
//             res.json({messge:"done"})

//     }

// })
// // login api

// app.post('/login', async(req,res)=>{
//     const userInfo=req.body
//     console.log(userInfo,"ppp")
//     let userData
//     try{
//          userData= await User.findOne({email:userInfo.email});

        
//         //  console.log(typeof userData.toObject(),"sdrugekfhekfhi")
//         //  console.log(typeof userData,'jiyaaa')
//     }
//     catch(err){
//         console.log(err,"err while matching email in database");
        

//     }
//     // console.log(userData.passWord,"rrrrrrrrrrrrrr")
//     if(!userData){
//         return res.status(401).send({message:"Invalid Email or password", success:false})
//     }
//     const validPassword=await bcrypt.compare(userInfo.passWord,userData.passWord).catch((err)=>{
//         console.log(err,"err while hashin");
//         res.status(500).send({message:"Internal server err"})

//     });
//     if(!validPassword){
//         return res.status(401).status({message:"Invalid email passWord"})
//     }
//     let userDataObject=userData.toObject()

//     delete userDataObject.passWord
//     console.log(userData,'users')
//     const token=generateAuthToken(userData);
//     return res.status(200).send({
        
//         data:{token:token, userData:userDataObject},
    
//         message:"Loggged in successfully",
//         success:true,
//     })

    


// })

// add restaurant
app.post('/restaurant',(req,res)=>{
    const user=req.body
    const Restaurantdata=new Restaurant(user)
    Restaurantdata.save().then((resdata)=>{
        res.json(resdata)
    }).catch((err)=>{
        console.log(err)
    })
})

// // //add product api
app.post('/restaurant/:id/product',(req,res)=>{
    const {id}=req.params
    console.log(id,'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
    Restaurant.findById(id).then((Restaurantdata)=>{

    res.json(Restaurantdata)
    if(!Restaurantdata){
        res.status(404).json({err:"error h bhai nhi h vo jo dhundh rha"})
    }
    const newProduct=new Product({
        ...req.body,
        restaurant:Restaurantdata._id
    })
     if(!Restaurantdata.Product){
        Restaurantdata.products=[]
     }
    return Promise.all([newProduct.save(),Restaurantdata.save()]).then((product)=>{
        res.json(product)
    });
    // newProduct.save();
    }).catch((err)=>{
console.log(err,'rrrr')
    })
})

// // //search for restaurant
app.get('/restaurant/search',(req,res)=>{
    //search?q=rajpura
    const {q}=req.query
    // console.log(q)
    Restaurant.find({
        $or:[{name:{$regex:`${q}`}},{city:{$regex:`${q}`}}]

    }).then((resData)=>{
        res.json(resData)
    }).catch((err)=>{
        res.json({err:"errr"})
    })
})
app.get('/restaurants', (req, res)=>{
    Restaurant.find().populate('products').then((aarzo)=>{
        res.json(aarzo);
    })
    
    .catch((err)=>{
        console.log(err)
    })
})

app.get('/restaurants/:id', (req, res)=>{
    const details = req.query
    let resData
    try{
        resData = Restaurant.findOne({_id : details._id})
    } catch(err){
        console.log(err, "Not found!")
    }
    
    if(!resData){
        res.json(resData.data);
    }else{
        res.status(401).send("Not added yet");
    }
})



app.listen(3035,()=>{
    console.log('server running on port no 3035')

})