export function Blogs1({blogs}){
    return <div>
        {blogs.map(function(blog){
            return <div>
                <h2>{blog.title}</h2>
                <h3>{blog.description}</h3>
                <button>{blog.read == true? "Read"  : "Mark as Read"}</button>
            </div>
        })}
    </div>
}