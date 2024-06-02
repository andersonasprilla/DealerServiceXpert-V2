import Button from '../Button/Button';

const UserItem = ({ user, onDelete }) => {
  return (
    <div
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
        <Button className="btn-block btn-danger" onClick={() => onDelete(user._id)}>
          Delete User
        </Button>
      </div>
    </div>
  );
};

export default UserItem;
