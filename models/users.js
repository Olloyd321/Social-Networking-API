const mongoose = require('mongoose');

const usersSchema = new  mongoose.Schema(
    {
        username:{
        type: String,  
        required: true,
        unique: true,
        trimmed: true,
        },

        email:{
            type: String,
            required: true,
            unique: true,

        },

        thoughts:{

        },

        friends:{

        },
    }
);

usersSchema
.virtual('')
// getter
.get(function () {
    return
})

const User = mongoose.model('User', usersSchema)
modeule.exports = User;