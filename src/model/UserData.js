const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/LibraryDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const Schema = mongoose.Schema;

var NewCredentialSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    confirm_password: String
   
});

var UserData = mongoose.model('userdatas', NewCredentialSchema);                        //UserData is the model and NewBookData is the schema

module.exports = UserData;