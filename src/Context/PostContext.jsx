import React, { createContext, useState, useEffect } from "react";
import { fetchPosts } from "../Services/PostService";

// eslint-disable-next-line react-refresh/only-export-components
export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    getPosts();
  }, []);

  const addPost = (post) => {
    setPosts((prev) => [post, ...prev]);
  };

  const updatePost = (updatedPost) => {
    setPosts((prev) =>
      prev.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  return (
    <PostContext.Provider value={{ posts, addPost, updatePost }}>
      {children}
    </PostContext.Provider>
  );
};
