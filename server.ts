import express from 'express';
import router from './routes/index.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('src/public'));
app.use('/dist/src/public/app.js', express.static('dist/src/public/app.js'));
app.use('/dist/src/public/app.js.map', express.static('dist/src/public/app.js.map'));
app.use('/dist/src/models/user.js', express.static('dist/src/models/user.js'));
app.use('/dist/src/models/user.js.map', express.static('dist/src/models/user.js.map'));
app.use('/dist/src/UserServices/UserService.js', express.static('dist/src/UserServices/UserService.js'));
app.use('/dist/src/UserServices/UserService.js.map', express.static('dist/src/UserServices/UserService.js.map'));
app.use('/dist/src/data/users.json', express.static('dist/src/data/users.json'));

app.use('/api', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    }
);