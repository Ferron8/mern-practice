/*
***read express.js docs***
this is in the "Hello World tab"

nodemon will stop the server and restart any changes.

***read node.js docs on "How to read environment variables from Node.js"
for .env files*** will import into the package.json

1. import the express module and create an express function express();
2. check if the app is listening on a specific app
3. import the dotenv module. create a .env file and add the PORT inside
4. create the app.use method ***read https://expressjs.com/en/4x/api.html#app.use****
5. go to auth.route.js
auth is just a name for routes




*/


import express from "express"; //import express
import dotenv from "dotenv"; //importing the .env module
//routes
import authRoutes from "./routes/auth.route.js";//importing the auth.routes.js file from the routes folder


dotenv.config(); //loads the contents of the .env file. Will allow you to use the process.env object

const app = express(); //creating an app
const PORT = process.env.PORT || 5000; //create a port variable in .env PORT:5000
// const port = 5000; //create a env file for this port
// console.log(process.env.PORT); //will access the env and get the port. process.env comes from dotenv.config() module

//this is the endpoint for the file homepage localhost:5000/api/auth/
//authRoues is just a name
app.use("/api/auth", authRoutes); //this is a check point that waits on a request then passes control to the next middleware 

app.listen(PORT, () => { //check if the app is running on PORT: 5000
    console.log(`Server is running on port http://localhost:${PORT}`);
    
});