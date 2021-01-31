//middleware - the heart of express
const express = require("express");
const app = express();

// Express = 2 things:
// 1. Router
// 2. Middleware that comprises a webframework

// Req (comes in) -----MIDDLEWARE ----> Res(goes out)
// Middleware function is ANY function that has access to the req,res, next object

// Req -----MIDDLEWARE ----> Res

// 1. Request comes in:

// --MIDDLEWARE FUNCTIONS
// 2. We need to validate the user, sometimes.
// 3. We need to store some things in the DB.
// 4. If there is data from the user we need to parse it and store it.
// END OF MIDDLEWARE FUNCTIONS

// 5. Res

function validateUser(req, res, next) {
  // get info out of the req object
  // do some stuff with the DB
  //locals is property that is prebuilt into express and is attached to response.
  //   every piece of middleware will have access to locals becuase every piece of middleware has access to the response object
  res.send("<h1>Main Page</h1>");
  res.locals.validated = true;
  console.log("VALIDATED RAN!");
  next();
}

// This will run validateUser on ALL paths, all methods!
app.use(validateUser);

// This will run validateUser on '/admin', all methods
app.use("/admin", validateUser);

// This will run validateUser on '/', only on get methods
app.get("/", validateUser);

//the next object is what makes the (req,res, next) =>{}) a middleware function
app.get("/", (req, res, next) => {
  res.send("<h1>Main Page</h1>");
  console.log(res.locals.validated);
});

app.get("/admin", (req, res, next) => {
  res.send("<h1>Admin Page</h1>");
});

// app.use is the same as app.get
app.listen(3000);
