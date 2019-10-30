const express = require('express');
const cors = require('cors');

const db = require('./plugins/db');
const admin = require('./routes/admin');

const app = express();

app.use(cors());
app.use(express.json());

db(app);
admin(app);

app.listen(3001, () => {
  console.log('App is start on port 3001');
})

