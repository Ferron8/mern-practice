//creating a router
//read https://expressjs.com/en/4x/api.html#router.get
import express from "express";//has to import express
import { login, logout, signup } from "../contollers/auth.controllers.js";//import the routes from the auth.controllers.js file


const router = express.Router(); //creates an instance of the Router() function. allows use to use router methods

//create the routes here.
//for better readability store these routes in auth.controllers.js after creation.
router.get("/signup", signup); //the new imported signup route from auth.controllers.js
router.get("/login", login); //the new imported login route from auth.controllers.js
router.get("/logout", logout); //the new imported logout route from auth.controllers.js




//Below are the old routes created here before they were exported back from the auth.controllers.js file
//***do not use these in here***
// router.get("/signup", (req, res) => { //this is the end point for the signup page
//     res.send("signup in called"); //sends a response to the /signup endpoint
// });

// router.get("/login", (req, res) => { //this is the end point for the login page
//     res.send("login in called"); //sends a response to the /login endpoint
// });
// router.get("/logout", (req, res) => { //this is the end point for the logout page
//     res.send("logout called"); //sends a response to the /logout endpoint
// });


export default router //exports the router instance for use in another file