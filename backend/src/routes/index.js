import express from 'express';
import professorRouter from './professor.js'
import interviewRouter from './interview.js'

const router = express.Router();

router.use('/professor', professorRouter);
router.use('/interview', interviewRouter);

export default router;