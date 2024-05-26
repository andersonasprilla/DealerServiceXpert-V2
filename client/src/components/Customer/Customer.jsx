import Dropdown from "../Dropdown/Dropdown";

import customers from "../../../../server/seeders/customerSeeds.json";
import formatTime from "../helper/formatTime";

  
  const Customer = () => {

    return ( 

      <div className="flex justify-center items-center" >
            <div className="m-2">
            {customers.map((customer, index) => (
            
            <div key={index} className=" gap-x-6 p-4 flex  h-auto  text-left  my-2 shadow-lg  rounded-3xl bg-white font-nunito">
              <div> 
                    <div className="  mt-1 text-gray-400 ">Hat</div>
                    <div className="mt-2 text-gray-900 ">{`T${customer.hatNumber}`}</div>
              </div>
              <div> 
                    <div className="  mt-1 text-gray-400 ">Repair Order</div>
                    <div className="mt-2 text-gray-900 ">{customer.repairOrder}</div>
              </div>
              <div> 
                    <div className="  mt-1 text-gray-400">Opened</div>
                    <div className="mt-2 text-gray-900">{formatTime(customer.openedAt)}</div>
              </div>
              <div> 
                    <div className="  mt-1 text-gray-400">Customer Name</div>
                    <div className="mt-2 text-gray-900">{customer.customerName}</div>
              </div>
              <div> 
                    <div className="  mt-1 text-gray-400">Vehicle Model</div>
                    <div className="  mt-2 text-gray-900">{customer.vehicle}</div>
              </div>
              <div> 
                    <div className="  mt-1 text-gray-400">Contact</div>
                    <div className="mt-2 text-gray-900">{customer.contact}</div>
              </div>
              <div> 
                    <div className="  mt-1 text-gray-400">Priority</div>
                    <div className={`mt-2 ${customer.priority === 'Waiter' ? 'text-yellow-400' : 'text-gray-900'}`}>
                          {customer.priority}
                        </div>
              </div>
              <div > 
                    <Dropdown />
              </div>
              
            </div>
          ))}
            </div>
      </div>
    );
  };

export default Customer
  