import { Router } from 'express';
import * as BlogController from './blog.controller.js';
const router =Router ();
router.get('/',BlogController.getblog);
router.post('/',BlogController.addBlog);
export default router; 