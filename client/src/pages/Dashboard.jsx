import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Customer from "../components/Customer/Customer";
import TableInfo from "../components/TableInfo/TableInfo";
import Side from "../components/Side/Side";

const Dashboard = () => {
  return (
    <>
      <div className="flex bg-light-blue p-5 gap-x-7 justify-center h-screen">
          <Side />
        <div>
          <Navbar />
          <TableInfo />
            <div className=" overflow-y-auto h-[1080px]">
            <Customer />
            </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
