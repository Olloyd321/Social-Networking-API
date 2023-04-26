const mongoose = require('mongoose');
const db = require('../models');
// const db = require('../db/connection.js')

const seed = [
    {username: 'Olloyd'}
]

db.User.delete