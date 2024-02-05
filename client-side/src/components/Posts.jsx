import "../css/posts.css";
import Post from "./Post";

export default function Posts({ post }) {
  return (
    <div className="posts flex justify-center">
      {post.map((postData) => {
        return <Post key={postData._id} postData={postData} />;
      })}
      
    </div>
  );
}
