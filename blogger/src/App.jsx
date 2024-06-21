import { useState } from 'react'
import { useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateBlog } from './components/CreateBlog'
import { Blogs1 } from './components/Blogs'

function App() {
  const [blogs, setBlogs] = useState([]);

  // fetch("http://localhost:8080/blogs")
  //   .then(async function(res){
  //     const json = await res.json();
  //     setBlogs(json.blogs);
  //   })
  useEffect(()=> {
    const fetchBlogs = async function(){
        try {
            const res=await fetch("http://localhost:8080/blogs");
            const json = await res.json();
            setBlogs(json.blogs)
        } catch (error){
            console.error(error);
        }
    };
    fetchBlogs();
} , [blogs]);

  return (
    <div>
      <h1 style={ {margin : 20, display : 'flex', justifyContent : 'center'} }>Hey Blogger!</h1>
      <CreateBlog></CreateBlog>
      <hr></hr>
      <div style={{display : 'flex', justifyContent : 'center', fontSize : 30, margin : 30}}>
        <p><b>⬩ PREVIOUS BLOGS ⬩</b></p>
      </div>
      <Blogs1 blogs = {blogs} ></Blogs1>
    </div>
  )
}

export default App
