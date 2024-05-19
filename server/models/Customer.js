const { Schema, model, set } = require('mongoose');

// Helper function to format names
function capitalizeName(name) {
    return name.replace(/\b\w/g, char => char.toUpperCase()).toLowerCase();
}

const customerSchema = new Schema({
    hatNumber: {
        type: Number,
        required: true,
        match: [/^\d{4}$/, 'Must be a 4-digit number']
    },
    repairOrder: {
        type: Number,
        required: true,
        match: [/^\d{6}$/, 'Must be a 6-digit number']
    },
    openedAt: {
        type: Date,
        default: Date.now
    },
    customerName: {
        type: String,
        required: true,
        set: capitalizeName
    },
    vehicle: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true,
        match: [/^\(\d{3}\)-\d{3}-\d{4}$/, 'Must match the format (xxx)-xxx-xxxx']
    },
    priority: {
        type: String,
        enum: ['Drop Off', 'Waiter'],
        required: true
    },
    status: {
        type: String,
        enum: ['Checked In', 'In Repair', 'Finished'],
        default: 'Checked In'
    },
}); 

// Pre-save middleware to format customer name
customerSchema.pre('save', function(next) {
    this.customerName = capitalizeName(this.customerName);
    next();
});

const Customer = model('Customer', customerSchema);

module.exports = Customer;