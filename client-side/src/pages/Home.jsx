import { useEffect, useState } from "react";
import "../css/homepage.css";
import Posts from "../components/Posts";
import Header from "../components/Header";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  function getFormattedDate() {
    const options = { month: "long", day: "numeric", year: "numeric" };
    const today = new Date();
    return today.toLocaleDateString(undefined, options);
  }

  // Example usage:
  const formattedDate = getFormattedDate();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        "https://infiniteideashub.onrender.com/api/post/getPosts"
      );
      const data = await res.json();
      setPosts(data.posts);
      if (!res.ok) {
        retrun;
        setError("Couldn't fetch posts, try again later.");
      }
    };
    try {
      fetchPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  console.log;
  return (
    <>
      <Header />
      <div className="">
        <div className="header ">
          <div className="headerTitles ">
            <div className="my-5 border bg-[#222222] text-white max-w-fit px-5 py-1 rounded-2xl font-bold text-[10px]">
              <h1>InfiniteIdeasHub</h1>
            </div>
            <div className="flex flex-col gap-2">
              <span className="headerTitleLg font-bold">
                How do you comfort a JavaScript bug?
                <p>You console it!</p>
              </span>
              <span className="text-gray-400 text-[1rem] font-bold mt-2 mb-2">
                Dev Arora || {formattedDate}
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <img className="headerImg object-" src="/hero_image.png" alt="" />
          </div>
        </div>
        <h1>{error}</h1>
        <div className="home mt-40">
          <Posts post={posts} />
        </div>
      </div>
    </>
  );
}
