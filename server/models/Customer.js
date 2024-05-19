const { Schema, model } = require('mongoose');
const capitalizeName = require('../utils/capitalizeName');

// Define the customer schema
const customerSchema = new Schema({
    hatNumber: {
        required: true,
        type: Number,
        match: [/^\d{4}$/, 'Must be a 4-digit number']
    },
    repairOrder: {
        required: true,
        type: Number,
        match: [/^\d{6}$/, 'Must be a 6-digit number']
    },
    openedAt: {
        type: Date,
        default: Date.now
    },
    customerName: {
        required: true,
        type: String,
        set: capitalizeName
    },
    vehicle: {
        required: true,
        type: String,
    },
    contact: {
        required: true,
        type: String,
        match: [/^\(\d{3}\)-\d{3}-\d{4}$/, 'Must match the format (xxx)-xxx-xxxx']
    },
    priority: {
        required: true,
        type: String,
        enum: ['Drop Off', 'Waiter'],
        default: 'Drop Off',
    },
    status: {
        type: String,
        enum: ['Checked In', 'In Repair', 'Finished'],
        default: 'Checked In',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    versionKey: false // Remove the __v field
});

// Pre-save middleware to format customer name
customerSchema.pre('save', function(next) {
    if (this.isModified('customerName')) {
        this.customerName = capitalizeName(this.customerName);
    }
    next();
});

// Create the model
const Customer = model('Customer', customerSchema);

module.exports = Customer;
