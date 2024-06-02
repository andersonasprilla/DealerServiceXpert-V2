import { useState } from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import Contact from './Contact';
import HatNumber from './Hat';
import RepairOrder from './RepairOrder';
import CustomerName from './CustomerName';
import Vehicle from './Vehicle';
import Priority from './Priority';
import { useMutation } from '@apollo/client';
import { ADD_CUSTOMER } from '../../utils/mutations';
import { QUERY_CUSTOMER } from '../../utils/queries';

const Modal = ({ showModal, setShowModal, size }) => {
  const [formData, setFormData] = useState({
    hatNumber: '',
    repairOrder: '',
    customerName: '',
    vehicle: '',
    contact: '',
    priority: 'Drop Off',  // Default value
  });

  const [addCustomer, { loading, error }] = useMutation(ADD_CUSTOMER, {
    refetchQueries: [QUERY_CUSTOMER, "Customers"]
  });

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { hatNumber, repairOrder, customerName, vehicle, contact, priority } = formData;
    const isEmpty = [hatNumber, repairOrder, customerName, vehicle, contact].some((value) => value === '');

    if (isEmpty) {
      alert('Please fill out all fields.');
      return;
    }
    try {
      const { data } = await addCustomer({
        variables: {
          hatNumber,
          repairOrder,
          customerName,
          vehicle,
          contact,
          priority,
        },
      });
      setShowModal(false);
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  return (
    <Dialog open={showModal} handler={() => setShowModal(false)} size={size}>
      <DialogHeader className="ml-22">Add New Customer</DialogHeader>
      <DialogBody className=" justify-center">
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <HatNumber value={formData.hatNumber} onChange={handleInputChange} />
          <RepairOrder value={formData.repairOrder} onChange={handleInputChange} />
          <CustomerName value={formData.customerName} onChange={handleInputChange} />
          <Vehicle value={formData.vehicle} onChange={handleInputChange} />
          <Contact value={formData.contact} onChange={handleInputChange} />
          <Priority value={formData.priority} onChange={handleInputChange} />
          <button type="submit" style={{ display: 'none' }}></button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
      </DialogBody>
    </Dialog>
  );
};

export default Modal;