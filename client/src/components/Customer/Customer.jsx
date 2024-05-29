
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from "../Dropdown/Dropdown";
import formatTime from "../helper/formatTime";
import { useEffect } from 'react';
import { setCustomerCount } from '../../actions/customerActions';
import { useQuery } from '@apollo/client';
import { QUERY_CUSTOMER, QUERY_USER } from '../../utils/queries';

import AuthService from '../../utils/auth';

const Customer = () => {
  const dispatch = useDispatch();
  const customerCount = useSelector((state) => state.customer.customerCount);

  const { loading, data } = AuthService.getProfile().data.role === "Manager" ? useQuery(QUERY_USER) : useQuery(QUERY_CUSTOMER);
  const customers = (AuthService.getProfile().data.role === "Manager" ? data?.users : data?.customers) || [];


  useEffect(() => {
    dispatch(setCustomerCount(customers.length));
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center">
      <div className="m-2">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="gap-x-6 p-4 flex h-auto text-left my-2 shadow-lg rounded-3xl bg-white font-nunito"
          >
            <div>
              <div className="mt-1 text-gray-400">Hat</div>
              <div className="mt-2 text-gray-900">{`T${customer.hatNumber}`}</div>
            </div>
            <div>
              <div className="mt-1 text-gray-400">Repair Order</div>
              <div className="mt-2 text-gray-900">{customer.repairOrder}</div>
            </div>
            <div>
              <div className="mt-1 text-gray-400">Opened</div>
              <div className="mt-2 text-gray-900">{formatTime(customer.openedAt)}</div>
            </div>
            <div>
              <div className="mt-1 text-gray-400">Customer Name</div>
              <div className="mt-2 text-gray-900">{customer.customerName}</div>
            </div>
            <div>
              <div className="mt-1 text-gray-400">Vehicle Model</div>
              <div className="mt-2 text-gray-900">{customer.vehicle}</div>
            </div>
            <div>
              <div className="mt-1 text-gray-400">Contact</div>
              <div className="mt-2 text-gray-900">{customer.contact}</div>
            </div>
            <div>
              <div className="mt-1 text-gray-400">Priority</div>
              <div className={`mt-2 ${customer.priority === 'Waiter' ? 'text-yellow-700' : 'text-gray-900'}`}>
                {customer.priority}
              </div>
            </div>
            <div>
              <Dropdown />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
