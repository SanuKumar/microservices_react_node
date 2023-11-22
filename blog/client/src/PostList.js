/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */

import { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetchPost();
  }, []); // ren the function only 1 time

  const fetchPost = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };

  const renderedPosts = Object.values(posts).map((post, id) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
        </div>
        <CommentList postId={post.id} />
        <CommentCreate postId={post.id} />
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
