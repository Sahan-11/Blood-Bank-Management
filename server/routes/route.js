import express from 'express';
import { createPost, getAllPosts, getPost, deletePost, Signup, Login } from '../controller/post-controller.js';


const router = express.Router();

router.post('/create', createPost);
router.get('/posts', getAllPosts);
router.get('/post/:id', getPost);
router.delete('/delete/:id', deletePost);
router.post('/Signup', Signup);
router.post('/Login', Login);

export default router; 