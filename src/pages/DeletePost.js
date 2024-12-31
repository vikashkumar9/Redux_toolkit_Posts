
import React from 'react';
import { useDeletePostMutation } from '../features/postsApi';
import AlertSnackbar from '../components/AlertSnackBar';
import Spinner from '../components/Spinner';
const DeletePost = ({ postId }) => {
  const [deletePost, { isLoading, isSuccess }] = useDeletePostMutation();
  const handleDelete = async () => {
    deletePost(postId)
  };
  return <>
  <AlertSnackbar
  show={isSuccess}
  message='Post has been deleted successfully'
/> <button onClick={handleDelete}>{isLoading ? <Spinner/>:" Delete"}</button></>;
};

export default DeletePost;
