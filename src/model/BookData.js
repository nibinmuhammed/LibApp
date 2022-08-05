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
var NewBookSchema = new Schema({
    name: String,
    author : String,
    imageUrl : String,
    description : String
});

var BookData = mongoose.model('book', NewBookSchema);                  

module.exports = BookData;