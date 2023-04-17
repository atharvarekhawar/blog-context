// export default function App() {
//   return <div>Hello World</div>;
// }
import React,{useContext,useEffect} from 'react'
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import TagPage from './Pages/TagPage';
import CategoryPage from './Pages/CategoryPage';
import { AppContext } from './context/AppContext'
import "./App.css"
import {Routes, Route, useSearchParams, useLocation} from 'react-router-dom'

const App = () => {

  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(()=>{
     const page = searchParams.get('page') ?? 1;
     if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replace("-"," ");//accesing value after last "/"
      fetchBlogPosts(Number(page),tag)
     }
     else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page),null,category)
     }
     else{
      fetchBlogPosts(Number(page));
     }
  },[location.pathname , location.search]);

  return (
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/blog/:blogId" element = {<BlogPage/>}/>
      <Route path="/tags/:tag" element = {<TagPage/>}/>
      <Route path="/categories/:category" element = {<CategoryPage/>}/>
    </Routes>
  )
}

export default App;
