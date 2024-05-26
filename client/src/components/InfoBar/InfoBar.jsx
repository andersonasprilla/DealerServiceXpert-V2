import React, { useState } from 'react';
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { useSelector } from 'react-redux';

const InfoBar = () => {
  const [showModal, setShowModal] = useState(false);
  const customerCount = useSelector((state) => state.customer.customerCount);

  const handleAddCustomerClick = () => {
    setShowModal(true);
  };

  return (
    <div className="flex items-center place-content-center gap-x-56 p-5">
      <div>
        <h1 className="text-3xl font-semibold leading-6 text-gray-900">Active Repair Orders ({customerCount})</h1>
      </div>
      <div>
        <Button onClick={handleAddCustomerClick}> + Add Customer</Button>
      </div>
      {showModal && <Modal />}
    </div>
  );
};

export default InfoBar;
