import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import Dropdown from "../Dropdown/Dropdown";
import formatTime from "../helper/formatTime";
import { setCustomerCount } from '../../actions/customerActions';
import { UPDATE_CUSTOMER_STATUS } from '../../utils/mutations';

const Customer = ({ customers }) => {
  const dispatch = useDispatch();
  const [updateCustomerStatus] = useMutation(UPDATE_CUSTOMER_STATUS, {
    refetchQueries: ["QUERY_CUSTOMER", "Customers"]
  });

  useEffect(() => {
    dispatch(setCustomerCount(customers.length));
  }, [dispatch, customers]);

  const handleStatusChange = async (index, newStatus) => {
    try {
      const { data } = await updateCustomerStatus({
        variables: {
          customerId: customers[index]._id,
          status: newStatus,
        },
      });

      if (data.updateCustomerStatus) {
        const updatedCustomers = customers.map((customer, i) =>
          i === index ? { ...customer, status: newStatus } : customer
        );
        setCustomers(updatedCustomers);
      }
    } catch (error) {
      console.error("Error updating customer status:", error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="m-2 w-full">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:gap-x-6 p-4 h-auto text-left my-2 shadow-lg rounded-3xl bg-white font-nunito"
          >
            <div className="flex justify-between md:block">
              <div className="mt-1 text-gray-400">Hat</div>
              <div className="mt-2 text-gray-900">{`T${customer.hatNumber}`}</div>
            </div>
            <div className="flex justify-between md:block">
              <div className="mt-1 text-gray-400">Repair Order</div>
              <div className="mt-2 text-gray-900">{customer.repairOrder}</div>
            </div>
            <div className="flex justify-between md:block">
              <div className="mt-1 text-gray-400">Opened</div>
              <div className="mt-2 text-gray-900">{formatTime(customer.openedAt)}</div>
            </div>
            <div className="flex justify-between md:block">
              <div className="mt-1 text-gray-400">Customer Name</div>
              <div className="mt-2 text-gray-900">{customer.customerName}</div>
            </div>
            <div className="flex justify-between md:block">
              <div className="mt-1 text-gray-400">Vehicle Model</div>
              <div className="mt-2 text-gray-900">{customer.vehicle}</div>
            </div>
            <div className="flex justify-between md:block">
              <div className="mt-1 text-gray-400">Contact</div>
              <div className="mt-2 text-gray-900">{customer.contact}</div>
            </div>
            <div className="flex justify-between md:block">
              <div className="mt-1 text-gray-400">Priority</div>
              <div className={`mt-2 ${customer.priority === 'Waiter' ? 'text-yellow-700' : 'text-gray-900'}`}>
                {customer.priority}
              </div>
            </div>
            <div className="flex justify-between md:block">
              <Dropdown 
                status={customer.status} 
                onStatusChange={(newStatus) => handleStatusChange(index, newStatus)} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;