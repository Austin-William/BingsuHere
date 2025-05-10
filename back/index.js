const express = require("express");
const routes = require("./src/routes/router.js");

const app = express();
const port = 8080;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware to allow cross-origin requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use('/', routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log('Server started successfully');
})