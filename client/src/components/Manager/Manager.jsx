import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { QUERY_USER } from '../../utils/queries';
import AddUserModal from '../UserModal/userModal';
import Button from '../Button/Button';

const Manager = () => {
  const { loading, data } = useQuery(QUERY_USER);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
        <Button onClick={openModal}>
          Add User
        </Button>

        <AddUserModal isOpen={isModalOpen} onClose={closeModal} />
            <div className="gap-x-6 p-4 text-left my-2">
            <div className="text-xl font-bold mb-2">User List</div>
            {data.users.map((user, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-x-6 p-4 h-auto text-left my-2 shadow-lg rounded-3xl bg-white font-nunito"
              >
                <div>
                  <div className="mt-1 text-gray-400">User Name</div>
                  <div className="mt-2 text-gray-900">{user.userName}</div>
                </div>
                <div>
                  <div className="mt-1 text-gray-400">Role</div>
                  <div className="mt-2 text-gray-900">{user.role}</div>
                </div>
                <div>
                  <div className="mt-1 text-gray-400">Email</div>
                  <div className="mt-2 text-gray-900">{user.email}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Manager;