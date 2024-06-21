const express = require("express");
const { createBlog, updateBlog } = require("./types");
const { blog } = require("./db");
const app = express();
const cors = require("cors");


app.use(express.json());

app.use(cors())

app.post("/blog", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createBlog.safeParse(createPayload);
    console.log(parsedPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent wrong inputs"
        });
        return;
    }
    await blog.create({
        title: createPayload.title,
        description: createPayload.description,
        read: false
    });
    res.json({
        msg: "Blog added"
    });
});

app.get("/blogs", async function(req, res) {
    const blogs = await blog.find({});
    res.json({
        blogs
    });
});


app.put("/read", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateBlog.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent wrong inputs"
        });
        return;
    }
    await blog.update({
        _id: req.body.id
    }, { 
        read: true
    });
    res.json({
        msg: "blog marked as read"
    });
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
