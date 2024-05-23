import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Dropdown = () => {
  const [status, setStatus] = useState('Checked In');

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  }

  const getStatusClasses = (status) => {
    switch (status) {
      case 'In Repair':
        return 'bg-red-50 text-red-700 ring-red-600/20 hover:bg-red-100 focus:ring-red-500';
      case 'Finished':
      case 'Back Order':
        return 'bg-green-50 text-green-700 ring-green-600/20 hover:bg-green-100 focus:ring-green-500';
      default:
        return 'bg-blue-50 text-blue-700 ring-blue-600/20 hover:bg-blue-100 focus:ring-blue-500';
    }
  }

  return (
    <div className="flex items-center justify-center h-full relative ml-3">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className={classNames(
            "inline-flex items-center justify-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-offset-2 w-28",
            getStatusClasses(status)
          )}>
            <span className="truncate">{status}</span>
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-blue-400" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                    onClick={() => handleStatusChange('In Repair')}
                  >
                    In Repair
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                    onClick={() => handleStatusChange('Finished')}
                  >
                    Finished
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                    onClick={() => handleStatusChange('Back Order')}
                  >
                    Back Order
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;
