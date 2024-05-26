import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Customer from "../components/Customer/Customer";
import InfoBar from "../components/InfoBar/InfoBar";

const Dashboard = () => {
  return (
    <>
      <div className="flex bg-light-blue p-5 gap-x-7 justify-center h-screen">
          <Sidebar />
        <div>
          <Navbar />
          <InfoBar />
            <div className=" overflow-y-auto h-[800px] ">
            <Customer />
            </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
