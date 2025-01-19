const mongoose = require("mongoose");
const { number } = require("zod");
// mongoose.connect('mongodb+srv://jaldabir12:%3CSKfgbEOLriZKmc1i%3E@paytm-db.m4dvx.mongodb.net/backend')


mongoose.connect('mongodb+srv://kiran888joshi:0Hrusqpy4XGlGsg6@paytm-db.8il3q.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});


const signupSchema = new mongoose.Schema({
       firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true 
        },
        password:{
             type:String,
             required:true
      }
})

const accountSchema = new mongoose.Schema({
   userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      required:'true'
   },
   balance:{
    type:Number,
    required:true
   }
})


const User = new mongoose.model("User", signupSchema);
const Account = new mongoose.model("Account",accountSchema);


module.exports={
    User,
    Account
};