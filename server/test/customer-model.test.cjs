const assert = require('node:assert/strict');
const { test } = require('node:test');
const mongoose = require('mongoose');
const Customer = require('../models/Customer');

function customer(overrides = {}) {
  return new Customer({
    hatNumber: '1234', repairOrder: '123456', customerName: 'jANE DOE',
    vehicle: 'Honda Civic', contact: '(555)-123-4567', ...overrides
  });
}

test('customer setters and defaults remain compatible', async () => {
  const document = customer();
  await document.validate();
  assert.equal(document.customerName, 'Jane Doe');
  assert.equal(document.priority, 'Drop Off');
  assert.equal(document.status, 'Checked In');
  assert.equal(document.user, null);
  assert.ok(document.openedAt instanceof Date);
});

test('customer validators reject invalid input', () => {
  const error = customer({ hatNumber: '12', repairOrder: 'abc', contact: '123', status: 'invalid' })
    .validateSync();
  for (const field of ['hatNumber', 'repairOrder', 'contact', 'status']) {
    assert.ok(error.errors[field], `Expected validation error for ${field}`);
  }
});

test('customer reference and query ObjectId casting remain compatible', () => {
  const id = new mongoose.Types.ObjectId();
  const document = customer({ user: id.toString() });
  assert.ok(document.user.equals(id));
  assert.equal(Customer.schema.path('user').options.ref, 'User');
  const query = Customer.find({ user: id.toString() });
  assert.ok(query.cast(Customer).user.equals(id));
});
