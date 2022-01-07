const mongoose = require('../../config/db');

// const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
     name:{
          type:String,
          require:true,
     },
     telefone:{
          type:String,
          unique:true,
          lowercase:true,
          required:true
     },
     endereco:{
          type:String,
          require:true
         
     },     

     createdAt:{
          type:Date,
          default: Date.now()
     }
    
})

UserSchema.pre('save', async function(next){
   
     next();
})

const User = mongoose.model('users', UserSchema)

module.exports = User