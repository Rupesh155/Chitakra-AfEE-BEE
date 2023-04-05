const userSchema=require('./models/users');
const jwt=require('jsonwebtoken')
const  generateAuthToken=function(data){
    data=JSON.stringify(data)
    const token=jwt.sign(data,"ERUHIERHIDNFKLFUHIKSFNIFEIFIKFNHFFHSEIGHIIHF",{
        // expiresIn:"30d",
    });
    return token
}
module.exports=generateAuthToken;