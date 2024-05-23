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
  
  // More customers...
];

const Table = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 shadow-lg rounded-3xl">
      <div className="mt-8 flow-root">
        <div className="-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8 h-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <tbody className="divide-y divide-gray-200 bg-white">
                {customers.map((customer) => (
                  <tr key={customer.hatNumber}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="mt-1 text-gray-500 ">Hat</div>
                          <div className="mt-2 font-medium text-gray-900">{customer.hatNumber}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="mt-1 text-gray-500 ">Repair Order</div>
                          <div className="mt-2 font-medium text-gray-900">{customer.repairOrder}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="mt-1 text-gray-500 ">Opened</div>
                          <div className="mt-2 font-medium text-gray-900">{customer.openedAt}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="mt-1 text-gray-500 ">Customer Name</div>
                          <div className="mt-2 font-medium text-gray-900">{customer.customerName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="mt-1 text-gray-500 ">Contact</div>
                          <div className="mt-2 font-medium text-gray-900">{customer.contact}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="mt-1 text-gray-500 ">Priority</div>
                          <div className="mt-2 font-medium text-gray-900">{customer.priority}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-blue-500 relative">
                      <Dropdown />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
