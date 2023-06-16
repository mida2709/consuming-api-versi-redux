import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/base';
import { Avatar, ButtonGroup, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import TimeAgo from 'timeago-react';
import { updatePost } from '../store/action';
// import { updatePost } from '../store/actions';

const PostFeed = ({ post, handleDeleteModal }) => {
  const [editStatus, setEditStatus] = useState(false);
  const [editedPost, setEditedPost] = useState(post.post);
  const dispatch = useDispatch();

  const handleEditChange = (event) => {
    setEditedPost(event.target.value);
  };

  const handleSubmitUpdate = () => {
    dispatch(updatePost(post.id, { ...post, post: editedPost })); // Mengirim aksi 'updatePost' ke Redux store
    setEditStatus(false);
  };

  return (
    <Card key={post.created} styl={{ marginBottom: 20, border: '1px, solid red' }}>
      <CardContent style={{ textAlign: 'left' }}>
        <Grid container>
          <Grid xl={1}>
            <Avatar alt={post.user.name} src={post.user.picture} />
          </Grid>
          <Grid xl={7}>
            <Typography>{post.user.name}</Typography>
          </Grid>
          <Grid xl={4} style={{ textAlign: 'right' }}>
            <Typography>
              <TimeAgo datetime={post.created} locale="id_ID" />
            </Typography>
          </Grid>
        </Grid>
        {!editStatus && post.post}
        {editStatus && (
          <>
            <TextField value={editedPost} multiline onChange={handleEditChange} />
            <Button onClick={handleSubmitUpdate}>Submit</Button>
          </>
        )}
      </CardContent>
      <div>
        <ButtonGroup>
          <Button onClick={() => setEditStatus(!editStatus)}>Edit</Button>
          <Button color="error" onClick={() => handleDeleteModal(post.id)}>
            Delete
          </Button>
        </ButtonGroup>
      </div>
    </Card>
  );
};

export default PostFeed;
