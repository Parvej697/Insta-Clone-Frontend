import axios from "axios";

const API_URL = "http://localhost:8080/api/posts";

export const fetchPosts = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true, // only if backend requires cookies/auth
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const createPost = async (postData) => {
  try {
    const response = await axios.post(API_URL, postData, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export const likePost = async (postId, userId) => {
  try {
    const response = await axios.put(`${API_URL}/${postId}/like/${userId}`, {}, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error liking post:", error);
    throw error;
  }
};
