import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Customer from "../components/Customer/Customer";
import TableInfo from "../components/TableInfo/TableInfo";

const Dashboard = () => {
  return (
    <>
      <div className="flex bg-light-blue p-5 gap-x-7 justify-center h-screen">
          <Sidebar />
        <div>
          <Navbar />
          <TableInfo />
            <div className=" overflow-y-auto h-[800px] lg:h-[1080]">
            <Customer />
            </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
