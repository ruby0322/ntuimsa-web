import express from 'express';
import cors from 'cors';
import db from './db.js';
import apiRouter from './routes/index.js';
import path from 'path';

db.connect();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "../frontend", "build")));
    app.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
    });
}

app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Express app listening on port ${port}.`);
});