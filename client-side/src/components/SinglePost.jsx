import React from "react";
import "../css/singlepost.css";
import { timeSince } from "../utils/FormatDate.js";
const SinglePost = ({ post }) => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={post.image} alt="" />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>{timeSince(post.createdAt)}</span>
        </div>
        <div
          className="singlePostDesc tracking-wide"
          dangerouslySetInnerHTML={{ __html: post && post.content }}
        ></div>
      </div>
    </div>
  );
};

export default SinglePost;
