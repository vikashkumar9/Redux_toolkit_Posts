import React from 'react';
import { useGetPostByIdQuery } from '../features/postsApi';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

const SingleList = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const { data: post, error, isLoading } = useGetPostByIdQuery(id);
  if (isLoading) {
    return (
      <p className="mt-[50%]">
      <Spinner  />
    </p>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">Error: Unable to fetch the post</p>
      </div>
    );
  }

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">{post?.title}</h1>
      <p className="text-gray-600 mb-6">{post?.body}</p>
      <Link
        to="/"
        className="block py-2 px-4 bg-gray-200 text-center text-black rounded-lg font-medium hover:bg-gray-300 transition duration-300 ease-in-out"
      >
        Back to Posts
      </Link>
    </div>
  );
};

export default SingleList;
