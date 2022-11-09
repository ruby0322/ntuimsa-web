import express from 'express';
import Interview from '../models/Interview.js';

const router = express.Router();

router.get('/', async (req, res) => {
    console.log(`Receieved GET Request:\n${req}`);
    console.log(req.query);
    const interviews = await Interview.find();
    // const interviews = await Interview.findOne({
    //     _id: req.id
    // });
    console.log(interviews);
    res.status(200).json({
        message: 'Interview Found!',
        interviews,
    });
});

router.post('/', async (req, res) => {
    console.log(`Receieved POST Request:\n${req}`);
    console.log(req.body);
    const newInterview = new Interview({
        year: req.body.year,
        markdown: req.body.markdown,
    });
    await newInterview.save();
    res.status(200).json({
        message: 'Interview Added To The Database!'
    });
});

export default router;