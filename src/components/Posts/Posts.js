/* eslint-disable no-unused-expressions */
import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  console.log("posts LINE9 POSTS.js", { posts });

  return (
    <div className="posts-container-wrapper">
      {posts &&
        posts.map((post) => (
          <Post key={post.id} post={post} likePost={likePost} />
        ))}
    </div>
  );
};

export default Posts;
