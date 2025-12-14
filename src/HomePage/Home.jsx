import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../Context/PostContext";

const Home = () => {
  const { posts } = useContext(PostContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-b from-pink-500 via-orange-400 to-purple-500">
      <div className="w-full max-w-md bg-white">

        <header className="flex justify-between p-4 border-b">
          <h1 className="font-billabong text-2xl">Instagram</h1>
        </header>

        <div className="pb-16">
          {posts.length === 0 && (
            <p className="text-center text-gray-400 mt-10">No posts yet</p>
          )}

          {posts.map((post) => (
            <div key={post.id} className="mb-6">
              <div className="flex items-center p-3">
                <img
                  src={`https://via.placeholder.com/40`} // replace with user image if available
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span className="font-semibold">{post.userId}</span>
              </div>

              <img src={post.imageUrl} className="w-full object-cover" />

              <div className="p-3">
                <p className="font-semibold">{post.likes.length} likes</p>
                <p>
                  <span className="font-semibold">{post.userId}</span> {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <nav className="fixed bottom-0 w-full max-w-md bg-white border-t flex justify-between px-8 py-3 text-xl">
          <button onClick={() => navigate("/home")}>🏠</button>
          <button onClick={() => navigate("/post")}>➕</button>
          <button onClick={() => navigate("/profile")}>👤</button>
        </nav>
      </div>
    </div>
  );
};

export default Home;
