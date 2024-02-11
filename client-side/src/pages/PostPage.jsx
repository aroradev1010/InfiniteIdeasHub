import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import Sidebar from "../components/Sidebar";
import SinglePost from "../components/SinglePost";
import Header from "../components/Header.jsx";
import Post from "../components/Post.jsx";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(
          `/api/post/getposts?startIndex=${randomNumber}&limit=3`
        );
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, [postSlug]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Error occured while fetching elements, please try again later
      </div>
    );
  return (
    <>
      <Header />
      <div className="single md:flex">
        <SinglePost post={post} />
        {/* <Sidebar /> */}
      </div>
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-4xl my-10 font-bold">Recent articles</h1>
        <div className="flex flex-wrap gap-5 mt-5 justify-center">
          {recentPosts &&
            recentPosts.map((post) => <Post key={post._id} postData={post} />)}
        </div>
      </div>
      <div className="flex justify-center">
        <CommentSection postId={post._id} />
      </div>
    </>
  );
}
