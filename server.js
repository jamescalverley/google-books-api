const express = require('express');
const app = express();
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require('dotenv').config();

app.get('/api/test/:search', (req,res) => {
  console.log("INCOMING REQUEST");
  const search = req.params
  console.log(search)
  res.send({message: "test"})
});

const bookSearch = require('./routes/books');
app.use('/api/', bookSearch);

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`.bold.cyan)
});