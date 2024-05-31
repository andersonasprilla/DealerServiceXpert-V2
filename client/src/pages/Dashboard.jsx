import { useQuery } from '@apollo/client';
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Customer from "../components/Customer/Customer";
import Manager from "../components/Manager/Manager"; 
import InfoBar from "../components/InfoBar/InfoBar";
import { QUERY_CUSTOMER, QUERY_USER } from '../utils/queries';
import AuthService from '../utils/auth'; 

const Dashboard = () => {
  const userRole = AuthService.getProfile().data.role;
  const { loading, data } = userRole === "Manager" ? useQuery(QUERY_USER) : useQuery(QUERY_CUSTOMER);

  if (loading) return <p>Loading...</p>;

  if (userRole === "Manager") {
    return (
      <>
        <div className="flex bg-light-blue p-5 gap-x-7 justify-center h-screen">
          <Sidebar />
          <div>
            <Navbar />
            <InfoBar />
            <div className="overflow-y-auto h-[800px]">
              <Manager />
            </div>
          </div>
        </div>
      </>
    );
  }

  const checkedInCustomers = data.customers.filter(customer => customer.status === "Checked In");
  const inRepairCustomers = data.customers.filter(customer => customer.status === "In Repair");

  return (
    <>
      <div className="flex bg-light-blue p-5 gap-x-7 justify-center h-screen">
        <Sidebar />
        <div>
          <Navbar />
          <InfoBar />
          <div className="overflow-y-auto h-[800px]">
            <Customer customers={checkedInCustomers} />
            <Customer customers={inRepairCustomers} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;