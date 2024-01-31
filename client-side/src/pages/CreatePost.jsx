import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { combineSlices } from "@reduxjs/toolkit";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null);

  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);

  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);

  const [createPostSuccess, setCreatePostSuccess] = useState(null);
  const [createPostError, setCreatePostError] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };
  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setImageFileUploadError(null);
    setCreatePostError(null);
    setCreatePostSuccess(null);
    if (Object.keys(formData).length === 0) {
      setCreatePostError("No changes made");
      return;
    }
    if (imageFileUploading) {
      setCreatePostError("Please wait for the image to upload");
      return;
    }
    try {
      const res = await fetch(`/api/post/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setCreatePostError(data.message);
      }
      if (res.ok) {
        setCreatePostError(null);
        navigate(`/post/${data.slug}`);
      } else {
        setCreatePostSuccess("User updated successfully");
      }
    } catch (error) {
      setCreatePostError(error.message);
    }
  };

  const uploadImage = async () => {
    setImageFileUploading(true);
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError(
          "Could not upload image (File must be less than 2MB)"
        );
        setImageFileUploadProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
        setImageFileUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
          setFormData({ ...formData, image: downloadURL });
          setImageFileUploading(false);
          setImageFileUploadProgress(false);
        });
      }
    );
  };
  const [formData, setFormData] = useState({});
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="javascript">JavaScript</option>
            <option value="reactjs">React.js</option>
            <option value="nextjs">Next.js</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            // onChange={(e) => setFile(e.target.files[0])}
          />
          {imageFileUploadError && (
            <Alert color="failure">{imageFileUploadError}</Alert>
          )}
        </div>
        {/* {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>} */}
        {/* {formData.image && (
          <img
            src={formData.image}
            alt="upload"
            className="w-full h-72 object-cover"
          />
        )} */}
        {imageFile && (
          <div className="">
            <img className="h-[300px]" src={imageFileUrl} alt="" />
          </div>
        )}
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
        {/* {publishError && (
          <Alert className="mt-5" color="failure">
            {publishError}
          </Alert>
        )} */}
      </form>
      {createPostSuccess && (
        <Alert color="success" className="mt-5">
          {createPostSuccess}
        </Alert>
      )}
      {createPostError && (
        <Alert color="failure" className="mt-5">
          {createPostError}
        </Alert>
      )}
    </div>
  );
};

export default CreatePost;
