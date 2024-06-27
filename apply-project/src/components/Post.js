// Post.js
import React from "react";

const Post = ({ id, nickname, title, created_at, likes, views }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{nickname}</td>
      <td>
        <a href="/">{title}</a>
      </td>
      <td>{created_at}</td>
      <td>{likes}</td>
      <td>{views}</td>
    </tr>
  );
};

export default Post;
