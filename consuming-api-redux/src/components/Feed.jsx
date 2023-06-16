import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Box, ButtonGroup, Modal, Typography } from '@mui/material';
// import { deletePost } from '../store/action';
import { deletePost } from '../store/action';
import PostFeed from './PostFeed';

const Feed = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');

  const handleDeleteModal = (id) => {
    setId(id);
    setOpen(true);
  };

  const handleDelete = () => {
    dispatch(deletePost(id));
    setOpen(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal open={open}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Are You Sure?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This Action Cannot Be Rolled Back
          </Typography>
          <ButtonGroup>
            <Button onClick={handleDelete}>Yes</Button>
            <Button color="error" onClick={() => setOpen(false)}>
              No
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
      {posts.map((post) => (
        <PostFeed key={post.id} post={post} handleDeleteModal={handleDeleteModal} />
      ))}
    </div>
  );
};

export default Feed;
