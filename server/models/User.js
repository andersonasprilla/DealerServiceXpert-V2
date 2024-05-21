const { Schema, model, set } = require('mongoose');
const capitalizeName = require('../utils/capitalizeName');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        set: capitalizeName
    },
    role: {
        type: String,
        required: true,
        enum: ['Service Advisor', 'Manager'],
        default: 'Service Advisor'
    },
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

// Pre-save middleware to format customer name
userSchema.pre('save', function(next) {
    if (this.isModified('username')) {
        this.username = capitalizeName(this.username);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
const User = model('User', userSchema);

module.exports = User;
