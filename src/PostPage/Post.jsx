import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../Context/PostContext";
import { createPost } from "../Services/PostService";

const Post = () => {
  const { addPost } = useContext(PostContext);
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image!");
    const newPost = {
      userId: "currentUserId", 
      imageUrl: image,
      caption,
    };
    const savedPost = await createPost(newPost);
    addPost(savedPost);
    setImage(null);
    setCaption("");
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <input type="file" onChange={handleImageChange} className="mb-4" />
      <input
        type="text"
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="mb-4 border p-2 rounded w-full max-w-md"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Post
      </button>
    </div>
  );
};

export default Post;
