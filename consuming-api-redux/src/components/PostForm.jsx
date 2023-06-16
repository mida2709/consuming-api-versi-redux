import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CircularProgress, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createPost } from '../store/action';

// import { addPost } from '../store/actions';

export const PostForm = () => {
  const [post, setPost] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleCreatePost = async () => {
    setLoading(true);
    dispatch(createPost(post)); // Mengirim aksi 'addPost' ke Redux store
    setPost('');
    setLoading(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Post new Feed</Typography>
        <TextField multiline placeholder="post" value={post} onChange={(event) => setPost(event.target.value)} />
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={handleCreatePost} disabled={loading}>
          {loading && <CircularProgress />}
          Post
        </Button>
      </CardActions>
    </Card>
  );
};
