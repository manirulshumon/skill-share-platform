export default function PostCard({ post }) {
    return (
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p className="text-gray-700">{post.description}</p>
        <span className={`text-sm px-2 py-1 rounded ${post.category === "Offer" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
          {post.category}
        </span>
      </div>
    );
  }
  