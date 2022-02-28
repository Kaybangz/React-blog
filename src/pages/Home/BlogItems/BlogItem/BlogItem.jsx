import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../../components/common/Chip/Chip";
import "./styles.css";

const BlogItem = ({
  blog: {
    id,
    description,
    title,
    cover,
    createdAt,
    authorName,
    authorAvatar,
    category,
  },
}) => {
  return (
    <div className="blogItem__container">
      <img src={cover} alt="cover image" className="cover__image" />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className="post__description">{description}</p>

      <footer>
        <div className="post__author">
          <img src={authorAvatar} alt="author avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className="blogItem__link" to={`/blog/${id}`}>
          <button>Read more</button>
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
