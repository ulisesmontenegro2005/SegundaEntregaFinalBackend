import express from 'express';
import { routes } from './routes/routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./../public/'));

app.use('/api/', routes);

app.get('*', (req, res) => {
    res.status(404).send('Not found');
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,() => {
    console.log(`listening in ${PORT}`);
})