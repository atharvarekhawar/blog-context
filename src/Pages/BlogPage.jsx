import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {
  const newUrl="https://codehelp-apis.vercel.app/api/"
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { setLoading, loading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
 
  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newUrl}get-blog?blogId=${blogId}`;   
    try {
      const result = await fetch(url);
      const data = result.json();
      console.log(result);
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      alert("Error!! try again");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
      {loading ? (
        <Spinner />
      ) : blog ? (
        <div>
          <BlogDetails post={blog} />
          <h2>Related Blogs</h2>
          {
            relatedBlogs.map((post) => (
                <div key={post.id}>
                   <BlogDetails post={post} />
                </div>            
            ))
          }
        </div>
        ) : 
       (
        <p>No blog Found</p>
       )}
    </div>
  );
};

export default BlogPage;
