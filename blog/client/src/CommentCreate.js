/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */

import { useState } from "react";
import axios from "axios";

export default ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary mt-3 mb-3">Submit</button>
      </form>
    </div>
  );
};