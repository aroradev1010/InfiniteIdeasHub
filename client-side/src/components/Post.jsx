import { Link } from "react-router-dom";
import "../css/post.css";
import { timeSince } from "../utils/FormatDate";

export default function Post({ img, postData }) {
  // console.log(postData);
  return (
    <Link to={`/post/${postData.slug}`}>
      <div className="post">
        <img className="postImg" src={postData.image} alt="" />
        <div className="postInfo">
          <span className="postTitle line-clamp-2">{postData.title}</span>
          <div className="my-5 border bg-[#222222] text-white max-w-fit px-5 py-1 rounded-2xl font-bold text-[10px]">
            <h1>{postData.category}</h1>
          </div>

          <hr />
          <span className="postDate">{timeSince(postData.createdAt)}</span>
        </div>
        <p
          className="postDesc line-clamp-3"
          dangerouslySetInnerHTML={{ __html: postData && postData.content }}
        ></p>
      </div>
    </Link>
  );
}
