import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

if (rpocess.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
}

const PORT =process.env.PORT || 8000;

const URL =process.env.MONGODB_URI || 'mongodb://sai01:saigadge001@ac-odvcdnc-shard-00-00.lphaudo.mongodb.net:27017,ac-odvcdnc-shard-00-01.lphaudo.mongodb.net:27017,ac-odvcdnc-shard-00-02.lphaudo.mongodb.net:27017/?ssl=true&replicaSet=atlas-s9335l-shard-0&authSource=admin&retryWrites=true&w=majority';

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(URL);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));