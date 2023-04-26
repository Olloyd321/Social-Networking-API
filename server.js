const htmlRoutes = require ('./routes/htmlRoutes');
const apiRoutes = require ('./routes/apiRoutes')
const path = require ('path');
const express = require ('express');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./db/connection.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API Running on port ${PORT}!`);
    })
})
