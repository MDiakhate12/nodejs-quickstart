const express = require('express');
const app = express();
const path = require('path')

app.use('/static', express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.redirect("/static/index.html")
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on  http://localhost:${port}`);
});
