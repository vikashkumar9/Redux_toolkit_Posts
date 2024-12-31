import React, { useState } from "react";
import { useGetPostsQuery } from "../features/postsApi";
import DeletePost from "./DeletePost";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import Pagging from "../components/Pagging";
const PostList = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data: posts, error, isLoading } = useGetPostsQuery({ page, limit });
  if (isLoading)
    return (
      <p className="mt-[50%]">
        <Spinner />
      </p>
    );
  if (error)
    return <p className="text-center text-red-600">Error: {error.message}</p>;
  return (
    <div className="container mx-auto p-4 md:px-32">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Posts</h2>
      <Link
        to="/addpost"
        className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
      >
        Add Post
      </Link>
      <ul className="space-y-4">
        {posts?.map((post) => (
          <li
            key={post.id}
            className="border border-gray-200 p-4 rounded flex justify-between items-center shadow-lg"
          >
            <span className="font-semibold">
              {post.id}. {post.title}
            </span>
            <div className="flex items-center space-x-4">
              <DeletePost postId={post.id} />
              <Link
                to={`post/${post.id}`}
                className="text-blue-500 hover:underline"
              >
                View
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <Pagging page={page} setPage={setPage} posts={posts.length} limit={limit}/>
    </div>
  );
};

export default PostList;
