const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { getStereo } = require ('../database/index.js');
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser());
app.use(express.static(__dirname + '/../client/dist'));
const staticPath = `${__dirname}/../client/dist`;
app.use('/products/:id', express.static(staticPath));

const port = 3005;

app.get('/:id', (req, res) => {
  let deepfryd_id = req.params.id;
  getStereo(deepfryd_id, (results) => {
    res.send(results);
  });
});

app.listen(port, () => console.log (`Listening on port ${port}...`));