import express from "express";
import {PORT,mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


const app=express();

//Middleware for parsing request body
app.use(express.json());

//Middle for handling CORS policy
app.use(cors());
// app.use(
//     cors({
//         origin:'https://localhost:3000',
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders:['Content-Type'],
//     })
// )

app.get('/',(request,response)=>{
    return response.status(234).send('Welcome to mernstack ttutorial')
})

app.use('/books', booksRoute);

mongoose.connect(mongoDBURL).then(()=>{
console.log('App connected to database');
app.listen(PORT ,()=>{
    console.log(`App is listening on port:${PORT}`)
});

})
.catch((error)=>{
console.log(error);
});
