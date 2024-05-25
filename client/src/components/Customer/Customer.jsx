import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

const customers = [
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    {
      hatNumber: 'T6980',
      repairOrder: '896322',
      openedAt: '2d 4h',
      customerName: 'John Doe',
      vehicle: 'Pilot 2024',
      contact: '(954)-325-9966',
      priority: "Drop Off",
      status: "Checked In",
    },
    
    


    
    
    // More customers...
  ]
  
  const Customer = () => {

    return ( 
    
      
        
          <div className="flex place-content-center">
            <div className="p-5">
            {customers.map((customer, index) => (
            
            <div key={index} className=" p-3  flex w-auto sm:px-6 lg:px-8 h-auto space-x-6 text-left  sm:pl-0 my-2 shadow-lg rounded-3xl bg-white font-nunito">
              <div> 
                    <div className="  mt-1 text-gray-400 ">Hat</div>
                    <div className="mt-2 text-gray-900 ">{customer.hatNumber}</div>
              </div>
              <div> 
                    <div className="  mt-1 text-gray-400 ">Repair Order</div>
                    <div className="mt-2 text-gray-900 ">{customer.repairOrder}</div>
              </div>
              <div> 
                    <div className="  mt-1 text-gray-400">Opened</div>
                    <div className="mt-2 text-gray-900">{customer.openedAt}</div>
              </div>
              <div> 
                    <div className="  mt-1 text-gray-400">Customer Name</div>
                    <div className="mt-2 text-gray-900">{customer.customerName}</div>
              </div>
              <div> 
                    <div className="  mt-1 text-gray-400">Vehicle</div>
                    <div className="mt-2 text-gray-900">{customer.vehicle}</div>
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
  