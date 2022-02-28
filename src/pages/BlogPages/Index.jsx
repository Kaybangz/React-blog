import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Chip from "../../components/common/Chip/Chip";
import EmptyList from "../../components/common/Chip/EmptyList/EmptyList";
import { blogList } from "../../config/data";
import "./styles.css";

const BlogPages = () => {
  const { id } = useParams();

  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));

    if (blog) {
      setBlogPost(blog);
    }
  }, []);

  return (
    <div>
      <Link className="goBack" to="/">
        <span>&#8592;</span> Home
      </Link>

      {blogPost ? (
          <div className="blog__container">
            <header>
              <div className="blog__details">
                <div className="author__avatar">
                  <img src={blogPost.authorAvatar} alt="author's avatar" />
                </div>
                <p className="blog__date">
                  Published on {blogPost.createdAt} by {blogPost.authorName}
                </p>
              </div>
              <h1>{blogPost.title}</h1>
              <div className="blog__subCategory">
                {blogPost.subCategory.map((category, index) => {
                  return (
                    <div>
                      <Chip key={index} label={category} />
                    </div>
                  );
                })}
              </div>
            </header>
            <img className="cover__image" src={blogPost.cover} alt="cover" />
            <p className="blog__description">{blogPost.description}</p> 
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};
export default BlogPages;
