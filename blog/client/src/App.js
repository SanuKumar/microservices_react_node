/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import PostCreate from "./PostCreate";
import PostList from "./PostList";

export default () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};
