const zod = require("zod")

const createBlog = zod.object({
    title  : zod.string().min(1),
    description : zod.string().min(1)
})

const updateBlog = zod.object({
    id : zod.string()
})

module.exports = {
    createBlog,
    updateBlog
}
