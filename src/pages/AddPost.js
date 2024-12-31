import React, { useEffect } from 'react';
import { useAddPostMutation } from '../features/postsApi';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Spinner from '../components/Spinner';
import AlertSnackbar from '../components/AlertSnackBar';

const AddPost = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [addPost, { isLoading, isSuccess }] = useAddPostMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await addPost({ title: data.title, body: 'This is a new post', userId: 1 }).unwrap();
    reset(); // Clear the form after successful submission
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  }, [isSuccess, navigate]);

  return (
    <>
      <AlertSnackbar show={isSuccess} message="Post has been added successfully" />
      <div className="mt-8 flex flex-col items-center space-y-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center space-y-6 p-6 bg-white rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold text-gray-700">Add a New Post</h2>


          <input
            type="text"
            placeholder="Enter Post Title"
            {...register('title', { 
              required: 'Title is required', 
  
            })}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 ${
              errors.title ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
            }`}
          />
                    {errors.title && <p className="text-red-500 text-sm w-full text-left">{errors.title.message}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            {isLoading ? <Spinner /> : "Add Post"}
          </button>

          <Link
            to="/"
            className="w-full py-2 bg-gray-200 text-center text-black rounded-lg font-medium hover:bg-gray-300 transition duration-300 ease-in-out"
          >
            Cancel
          </Link>
        </form>
      </div>
    </>
  );
};

export default AddPost;
