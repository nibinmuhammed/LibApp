const mongoose = require('mongoose');
const dbUrl = "mongodb+srv://nibin:1WQrI5wPxQMcGqDn@cluster0.bzf3oc5.mongodb.net/test";
const connectionParams ={
    useNewUrlParser:true,
    useUnifiedTopology:true
};

mongoose.connect(dbUrl,connectionParams)
.then(()=>{
console.log("Database connected");

})
.catch(()=>{

    console.log("error");
})    
const Schema = mongoose.Schema;

var NewCredentialSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    confirm_password: String
   
});

var UserData = mongoose.model('userdata', NewCredentialSchema);                        //UserData is the model and NewBookData is the schema

module.exports = UserData;