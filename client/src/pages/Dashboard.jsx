import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Customer from "../components/Customer/Customer";
import TableInfo from "../components/TableInfo/TableInfo";

const Dashboard = () => {
  return (
    <div className='flex h-screen overflow-hidden bg-light-blue'>
      <Sidebar />
      <div className='flex flex-col flex-1'>
        <Navbar />
        <TableInfo />
        <div className='flex-1 overflow-y-auto'>
          <Customer />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

