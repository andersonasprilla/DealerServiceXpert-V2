import React, { useState } from 'react';
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

const TableInfo = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddUserClick = () => {
    setShowModal(true);
  };

  return (
    <div className="flex items-center place-content-center gap-x-56 p-5">
      <div>
        <h1 className="text-3xl font-semibold leading-6 text-gray-900">Active Repair Orders (9)</h1>
      </div>
      <div>
        <Button onClick={handleAddUserClick}> + Add User</Button>
      </div>
      {showModal && <Modal />}
    </div>
  );
};

export default TableInfo;
