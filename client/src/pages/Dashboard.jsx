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

  const EmptyMessage = ({ message }) => (
    <div className="flex flex-col md:flex-row md:gap-x-6 p-4 h-auto text-left my-2 shadow-lg rounded-3xl bg-white font-nunito items-center justify-center">
      <p className="text-gray-600 text-lg">{message}</p>
    </div>
  );

  return (
    <>
      <div className="flex bg-light-blue p-5 gap-x-7 justify-center h-screen">
        <Sidebar />
        <div>
          <Navbar />
          <InfoBar />
          <div className="overflow-y-auto h-[800px]">
            {checkedInCustomers.length > 0 ? (
              <Customer customers={checkedInCustomers} />
            ) : (
              <EmptyMessage message="No Checked In Customers " />
            )}
            {inRepairCustomers.length > 0 ? (
              <Customer customers={inRepairCustomers} />
            ) : (
              <EmptyMessage message="No Customers In Repair" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
