import React from "react";
import BlogPages from "../../BlogPages/Index";
import BlogItem from "./BlogItem/BlogItem";
import './styles.css';

const BlogItems = ({ blogs }) => {
  return (
    <div className="blogItems__container">
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default BlogItems;
