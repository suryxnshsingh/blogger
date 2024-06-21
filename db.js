const mongoose = require("mongoose")



mongoose.connect("mongodb+srv://Suryansh:mongopass@suryansh.htggauc.mongodb.net/", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));


 const blogSchema = mongoose.Schema({
    title : String,
    description : String,
    read : Boolean
 })

 const blog = mongoose.model('blogs', blogSchema);

 module.exports ={
    blog
 }