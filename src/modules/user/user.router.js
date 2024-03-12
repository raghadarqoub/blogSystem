import { Router } from 'express';
import * as UserController from "./user.controller.js";
const router =Router ();
router.get('/' ,UserController .getUsers);
router.patch('/:id',UserController.update);
router.delete('/:id',UserController.destory);
export default router;