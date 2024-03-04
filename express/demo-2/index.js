const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
    res.send(`server is running on PORT:${PORT}`);
})

app.listen(PORT, () => {
    console.log(`server is running on PORT:${PORT}`);
})
