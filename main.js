const express = require('express');
const fs = require('fs');
const PORT =3005;
const app = express();
const bodyParser = require('body-parser'); 
const connectDB = require('./db/database');

app.use(bodyParser.json());



connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
});

