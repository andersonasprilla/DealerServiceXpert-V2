import { useQuery, useMutation, gql } from '@apollo/client';
import { useState } from 'react';
import { QUERY_USER } from '../../utils/queries';
import AddUserModal from '../UserModal/userModal';
import Button from '../Button/Button';
import Auth from '../../utils/auth';
import { DELETE_USER } from '../../utils/mutations';

const Manager = () => {
  const { loading, data, refetch, error: queryError } = useQuery(QUERY_USER);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteUser, { error: mutationError }] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: QUERY_USER }],
    awaitRefetchQueries: true,
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDeleteUser = async (userId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      console.error('No token found, cannot delete user');
      return false;
    }

    try {
      const { data } = await deleteUser({ variables: { userId } });

      if (data.deleteUser) {
        refetch();
      } else {
        console.error('Failed to delete user');
      }
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (queryError) return <p>Error loading users: {queryError.message}</p>;

  if (mutationError) console.error('Mutation error:', mutationError.message);

  return (
    <div className="flex justify-center items-center">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
        <Button onClick={openModal}>Add User</Button>

        <AddUserModal isOpen={isModalOpen} onClose={closeModal} refetchUsers={refetch} />

        <div className="gap-x-6 p-4 text-left my-2">
          <div className="text-xl font-bold mb-2">User List</div>
          {data?.users?.map((user) => (
            <div
              key={user._id}
              className="grid grid-cols-1 md:grid-cols-4 gap-x-6 p-4 h-auto text-left my-2 shadow-lg rounded-3xl bg-white font-nunito"
            >
              <div className="flex flex-col md:block">
                <div className="mt-1 text-gray-400">User Name</div>
                <div className="mt-2 text-gray-900">{user.userName}</div>
              </div>
              <div className="flex flex-col md:block">
                <div className="mt-1 text-gray-400">Role</div>
                <div className="mt-2 text-gray-900">{user.role}</div>
              </div>
              <div className="flex flex-col md:block">
                <div className="mt-1 text-gray-400">Email</div>
                <div className="mt-2 text-gray-900">{user.email}</div>
              </div>
              <div className="flex items-center mt-2 md:mt-0">
                <Button className="btn-block btn-danger" onClick={() => {
                  handleDeleteUser(user._id);
                }}>
                  Delete User
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manager;
