const { Schema, model } = require('mongoose');

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    // Reference to the Customer model
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    }
});

const User = model('User', userSchema);

module.exports = User;
