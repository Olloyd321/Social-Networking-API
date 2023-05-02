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
    .virtual('user')
    // getter
    .get(function () {
        return `${usersSchema.Schema}`;
    })
    .set(function (){

    })

const User = mongoose.model('User', usersSchema)
modeule.exports = User;