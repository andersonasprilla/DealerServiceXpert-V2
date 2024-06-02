import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import { QUERY_USER } from '../../utils/queries';
import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react';

const AddUserModal = ({ isOpen, onClose }) => {
  const [addUser, { loading, error }] = useMutation(ADD_USER, {
    refetchQueries: [{ query: QUERY_USER }]
  });

  const [newUser, setNewUser] = useState({
    userName: '',
    role: '',
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({
    userName: false,
    role: false,
    email: false,
    password: false
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevState) => ({ ...prevState, [name]: value === '' }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    if (newUser[name] === '') {
      setErrors((prevState) => ({ ...prevState, [name]: true }));
    }
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

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <Dialog open={isOpen} handler={onClose} dismiss={{ escapeKey: true }} size="xs">
      <DialogHeader className="text-2xl font-semibold text-gray-800 flex justify-center">
        Add User
      </DialogHeader>
      <DialogBody className="flex justify-center p-4 bg-white rounded-lg shadow-lg">
        <form className="flex flex-col gap-2 w-full rounded-lg" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium">User Name</label>
            <input
              type="text"
              name="userName"
              value={newUser.userName}
              onChange={handleInput}
              onBlur={handleBlur}
              className="block w-full rounded-lg px-3 py-2 custom-input border border-gray-300 shadow-sm"
            />
            {errors.userName && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Role</label>
            <input
              type="text"
              name="role"
              value={newUser.role}
              onChange={handleInput}
              onBlur={handleBlur}
              className="block w-full rounded-lg px-3 py-2 custom-input border border-gray-300 shadow-sm"
            />
            {errors.role && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleInput}
              onBlur={handleBlur}
              className="block w-full rounded-lg px-3 py-2 custom-input border border-gray-300 shadow-sm"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={newUser.password}
              onChange={handleInput}
              onBlur={handleBlur}
              className="block w-full rounded-lg px-3 py-2 custom-input border border-gray-300 shadow-sm"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
          </div>
          <button type="submit" className="hidden"></button>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
        </form>
      </DialogBody>
    </Dialog>
  );
};

export default AddUserModal;
