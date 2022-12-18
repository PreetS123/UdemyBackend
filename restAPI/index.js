const express= require('express');
const app= express();// express() function creates an instance express application object with methods of routing http request. It is called app by tradition.
const joi= require('joi');// joi is used for validation.
app.use(express.json());// it is inbuilt method in express to recognize the incoming request object as a json object.
                        // This method is called as a middleware.

// app.use() acts as a middleware in express apps
//A middleware is basically a function that will receive the request and response objects ,
  // just like your route Handlers do.

