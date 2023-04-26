const mongoose = require('mongoose');

const usersSchema = new  mongoose.Schema(
    {
        username:{
        type: String,  
        required: true,
        unique: true,
        trimmed: true,

        }
    }
);

const User = mongoose.model('User', usersSchema)
modeule.exports = User;