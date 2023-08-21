const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send({
        id: "01",
        name: "sup nig",
    })
});

var PORT = 9000;
app.listen(PORT);
console.log("Server live on PORT: " + PORT);