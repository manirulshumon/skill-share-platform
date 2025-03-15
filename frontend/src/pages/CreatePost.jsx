import React from "react";

export default function CreatePost() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create a Post</h1>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Describe your skill or request..."
          className="border p-2 rounded"
        ></textarea>
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}
