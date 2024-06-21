app.get("/blogs", async function(req, res){
     const blogs = await blog.find({});

     res.json({
        blogs
     })
})