import { useQuery } from '@apollo/client';
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Customer from "../components/Customer/Customer";
import InfoBar from "../components/InfoBar/InfoBar";
import { QUERY_CUSTOMER } from '../utils/queries';

const Finished = () => {
  const { loading, data } = useQuery(QUERY_CUSTOMER);

  if (loading) return <p>Loading...</p>;

  const finishedCustomers = data.customers.filter(customer => customer.status === "Finished");

  return (
    <>
      <div className="flex bg-light-blue p-5 gap-x-7 justify-center h-screen">
        <Sidebar />
        <div>
          <Navbar />
          <InfoBar />
          <div className="overflow-y-auto h-[800px]">
            <Customer customers={finishedCustomers} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Finished;