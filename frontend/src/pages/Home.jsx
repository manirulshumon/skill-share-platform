import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Community Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map(post => <PostCard key={post._id} post={post} />)}
      </div>
    </div>
  );
}
