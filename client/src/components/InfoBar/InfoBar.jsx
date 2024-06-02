import React, { useState } from 'react';
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { useSelector } from 'react-redux';

const InfoBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [size, setSize] = useState(null);
  const customerCount = useSelector((state) => state.customer.customerCount);

  const handleAddCustomerClick = (value) => {
    setShowModal(true);
    setSize(value);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5 gap-y-4 md:gap-y-0">
      <div className="text-center md:text-left">
        <h1 className="text-xl md:text-3xl font-semibold leading-6 text-gray-900">Active Repair Orders ({customerCount})</h1>
      </div>
      <div>
        <Button onClick={() => handleAddCustomerClick("xs")}> + Add Customer</Button>
      </div>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} size={size} />}
    </div>
  );
};

export default InfoBar;