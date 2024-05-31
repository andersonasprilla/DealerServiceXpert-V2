import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import { QUERY_USER } from '../../utils/queries';
import { Transition } from '@headlessui/react';

const AddUserModal = ({ isOpen, onClose }) => {
  const [addUser] = useMutation(ADD_USER, {
    refetchQueries: [{ query: QUERY_USER }]
  });

  const [newUser, setNewUser] = useState({
    userName: '',
    role: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser({
        variables: {
          ...newUser
        }
      });
      setNewUser({
        userName: '',
        role: '',
        email: '',
        password: ''
      });
      onClose();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <Transition.Child
          enter="transition ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="bg-gray-900 p-6">
              <h2 className="text-2xl font-semibold text-white">Add User</h2>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium">User Name</label>
                  <input
                    type="text"
                    name="userName"
                    value={newUser.userName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium">Role</label>
                  <input
                    type="text"
                    name="role"
                    value={newUser.role}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-700 border border-transparent rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
};

export default AddUserModal;