import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {
    console.log(post.id);
  return (
    <div>
      <div key={post.id}>
        <NavLink to={`/blog/${post.id}`}>
          <p className="font-bold text-lg cursor-pointer underline">
            {post.title}
          </p>
        </NavLink>
        <NavLink to={`/categories/${post.category.replaceAll("-", " ")}`}>
          <p className="text-sm mt-[4px]">
            By <span className="italic">{post.author}</span> on{" "}
            <span className="underline font-bold cursor-pointer">
              {post.category}
            </span>
          </p>
        </NavLink>
        <p className="text-sm mt-[4px]">Posted On {post.date}</p>
        <p className="text-md mt-[10px]">{post.content}</p>
        <div className="flex gap-x-3">
          {post.tags.map((tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll("-", " ")}`}>
              <span
                key={index}
                className="text-blue-700 underline font-bold text-xs mt-[5px]"
              >{`#${tag}`}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
