import { Alert, Button, Modal, TextInput, Textarea } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Comment from "./Comment";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function CommentSection({ postId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(null);
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const navigate = useNavigate();
  // console.log(postId);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > 200) {
      return;
    }
    try {
      const res = await fetch("https://infiniteideashub.onrender.com/api/comment/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: comment,
          postId,
          userId: currentUser._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setComment("");
        setCommentError(null);
        setComments([data, ...comments]);
      }
    } catch (error) {
      setCommentError(error.message);
      if (!currentUser) {
        setCommentError("Sign in to comment");
      }
    }
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await fetch(`https://infiniteideashub.onrender.com/api/comment/getPostComments/${postId}`);
        if (res.ok) {
          const data = await res.json();
          setComments(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getComments();
  }, [postId]);

  const handleLike = async (commentId) => {
    try {
      if (!currentUser) {
        navigate("/sign-in");
        return;
      }
      const res = await fetch(`https://infiniteideashub.onrender.com/api/comment/likeComment/${commentId}`, {
        method: "PUT",
      });
      if (res.ok) {
        const data = await res.json();
        setComments(
          comments.map((comment) =>
            comment._id === commentId
              ? {
                  ...comment,
                  likes: data.likes,
                  numberOfLikes: data.likes.length,
                }
              : comment
          )
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = async (comment, editedContent) => {
    setComments(
      comments.map((c) =>
        c._id === comment._id ? { ...c, content: editedContent } : c
      )
    );
  };

  const handleDelete = async (commentId) => {
    setShowModal(false);
    try {
      if (!currentUser) {
        navigate("/sign-in");
        return;
      }
      const res = await fetch(`https://infiniteideashub.onrender.com/api/comment/deleteComment/${commentId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        const data = await res.json();
        setComments(comments.filter((comment) => comment._id !== commentId));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="max-w-4xl  w-full my-5 px-5 ">
      <h1 className="mb-5 font-bold text-[2rem] ml-2">Comments</h1>

      <form
        onSubmit={handleSubmit}
        className="ml-10 rounded-md p-3 shadowSection"
      >
        {currentUser ? (
          <div className="flex items-center gap-1 mb-4 mt-1 text-gray-500 text-sm">
            {/* <p>Signed in as:</p> */}
            <img
              className="h-10 w-10  object-cover rounded-full"
              src={currentUser.profilePicture}
              alt=""
            />
            <Link
              to={"/dashboard?tab=profile"}
              className="text-sm ml-2 hover:underline"
            >
              {currentUser.username}
            </Link>
          </div>
        ) : (
          <div className=" my-5 text-sm flex gap-1">
            <p className="text-[gray]">You must be signed in to comment.</p>
            <Link className="font-bold hover:underline" to={"/sign-in"}>
              Sign In
            </Link>
          </div>
        )}
        <Textarea
          style={{ resize: "none" }}
          className="border-none bg-[whitesmoke]"
          placeholder="Add a comment..."
          rows="3"
          maxLength="200"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <div className="flex justify-between items-center mt-5">
          <p className="text-gray-500 text-xs font-semibold">
            {200 - comment.length} characters remaining
          </p>
          <button
            className="px-5 py-2 bg-[#2222] font-bold rounded-3xl"
            type="submit"
          >
            Submit
          </button>
        </div>
        {commentError && (
          <Alert color="failure" className="mt-5">
            {commentError}
          </Alert>
        )}
      </form>

      {comments.length === 0 ? (
        <p className="text-xl tracking-wider my-10 ml-10 font-bold">
          No comments yet!!, Leave one now
        </p>
      ) : (
        <>
          {comments.map((comment) => (
            <Comment
              key={comment._id}
              comment={comment}
              onLike={handleLike}
              onEdit={handleEdit}
              onDelete={(commentId) => {
                setShowModal(true);
                setCommentToDelete(commentId);
              }}
            />
          ))}
        </>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this comment?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => handleDelete(commentToDelete)}
              >
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
