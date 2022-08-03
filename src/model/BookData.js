const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/LibraryDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((succ)=> {
    console.log('DB connected');
}).catch((err)=> {
    console.log('DB error')
});
const Schema = mongoose.Schema;
var NewBookSchema = new Schema({
    name: String,
    author : String,
    imageUrl : String,
    description : String
});

var BookData = mongoose.model('books', NewBookSchema);                  

module.exports = BookData;