import express from 'express';
import Professor from '../models/Professor.js';

const router = express.Router();

router.get('/', async (req, res) => {
    // const newProfessor = new Professor();
    // await newProfessor.save();
    console.log(`Receieved GET Request:\n${req}`);
    console.log(req.query);
    const professors = await Professor.find({});
    console.log(professors);
    res.status(200).json({
        message: 'Professors Found!',
        professors,
    });
});

router.post('/', async (req, res) => {
    console.log(`Receieved POST Request:\n${req}`);
    console.log(req.body);
    const newProfessor = new Professor({
        name: req.body.name,
        title: req.body.title,
        imgUrl: req.body.imgUrl,
        domains: req.body.domains,
        interviews: (req.body.interviews ? req.body.interviews : [])
    });
    await newProfessor.save();
    res.status(200).json({
        message: 'Professor Added To The Database!'
    });
});

export default router;
