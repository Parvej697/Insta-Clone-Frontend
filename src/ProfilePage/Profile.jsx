import React, { useContext, useState,useEffect } from "react";
import { PostContext } from "../Context/PostContext";

const Profile = () => {
  const { posts } = useContext(PostContext);

  
  const [user, setUser] = useState({
    username: "current_user",
    bio: "This is my Instagram bio",
    profileImage: "https://via.placeholder.com/150",
    followers: 120,
    following: 180,
  });

  
  const userPosts = posts.filter((post) => post.userId === user.username);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full max-w-3xl p-4">
        <div className="flex items-center mb-6">
          <img
            src={user.profileImage}
            alt="profile"
            className="w-24 h-24 rounded-full mr-6 object-cover"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold">{user.username}</h2>
            <p className="text-gray-600">{user.bio}</p>
            <div className="flex space-x-4 mt-2">
              <span><strong>{userPosts.length}</strong> posts</span>
              <span><strong>{user.followers}</strong> followers</span>
              <span><strong>{user.following}</strong> following</span>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <button className="flex-1 bg-blue-500 text-white py-2 rounded font-semibold">
            Edit Profile
          </button>
          <button className="flex-1 bg-gray-200 text-black py-2 rounded font-semibold">
            Settings
          </button>
        </div>

        <h3 className="font-semibold mb-2">Posts</h3>
        {userPosts.length === 0 ? (
          <p className="text-gray-500 text-center">No posts yet</p>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {userPosts.map((post) => (
              <img
                key={post.id}
                src={post.imageUrl}
                alt="user-post"
                className="w-full h-32 object-cover rounded"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
