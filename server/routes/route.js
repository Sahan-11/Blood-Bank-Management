import express from 'express';
import { createPost, getAllPosts, getPost, deletePost, Signup, Login, getAllDonors, createPosts, getAllBloodbanks } from '../controller/post-controller.js';


const router = express.Router();

router.post('/Donate', createPost);
router.post('/Request', createPosts);
router.get('/posts', getAllPosts);
router.get('/data', getAllDonors);
router.get('/bldbank', getAllBloodbanks);
router.get('/post/:id', getPost);
router.delete('/delete/:id', deletePost);
router.post('/Signup', Signup);
// router.post('/Userdetails', Signup);

router.post('/Login', Login);

export default router; 