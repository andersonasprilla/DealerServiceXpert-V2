import React, { useState } from 'react';
import Modal from "../Modal/Modal";

const TableInfo = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddUserClick = () => {
    setShowModal(true);
  };

  return (
    <div className=" justify-center space-x-80 sm:flex sm:items-center mt-8 ">
      <div>
        <h1 className="text-base font-semibold leading-6 text-gray-900">Open Ro's (9)</h1>
        <p className="mt-2 text-sm text-gray-700">Active Repair Orders</p>
      </div>
      <div>
        <button
          type="button"
          className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleAddUserClick}
        >
          Add user
        </button>
      </div>
      {showModal && <Modal />}
    </div>
  );
};

export default TableInfo;
