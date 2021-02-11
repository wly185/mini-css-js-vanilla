import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve(path.dirname(''));

// console.log(__dirname);
app.use(express.static('public'));

app.listen(3000, console.log('server running on port 3000', __dirname));
