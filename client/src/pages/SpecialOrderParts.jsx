import { useQuery } from '@apollo/client';
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Customer from "../components/Customer/Customer";
import InfoBar from "../components/InfoBar/InfoBar";
import { QUERY_CUSTOMER } from '../utils/queries';

const SpecialOrderParts = () => {
  const { loading, data } = useQuery(QUERY_CUSTOMER);

  if (loading) return <p>Loading...</p>;

  const backOrderCustomers = data.customers.filter(customer => customer.status === "Back Order");

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
            {backOrderCustomers.length > 0 ? (
              <Customer customers={backOrderCustomers} />
            ) : (
              <EmptyMessage message="No Customers, Click Add Customer Button" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialOrderParts;
