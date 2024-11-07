/*
from the routes created in auth.routes.js export the routes
back into the auth.routes.js folder

using the export function assign the route to a variable
and use async to wait on the request

will be able to access the new variable in the auth.routes.js file
*/



export const signup = async (req, res) => { //this is the end point for the signup page
    res.send("Sign up called"); //sends a response to the /signup endpoint
};
export const login = async (req, res) => { //this is the end point for the login page
    res.send("login called"); //sends a response to the /login endpoint
};
export const logout = async (req, res) => { //this is the end point for the logout page
    res.send("logout called"); //sends a response to the /logout endpoint
};
