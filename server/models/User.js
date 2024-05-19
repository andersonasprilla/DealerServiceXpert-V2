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
    customers: [{
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    }]
}, {
    versionKey: false // Remove the __v field
});

const User = model('User', userSchema);

module.exports = User;
