import React, { useState } from 'react';
import {
  ArrowLeftOnRectangleIcon,
  ShoppingCartIcon,
  HomeIcon,
  CheckCircleIcon,
  LifebuoyIcon,
  XMarkIcon,
  Bars3Icon
} from '@heroicons/react/24/outline';
import { Dialog, Transition } from '@headlessui/react';
import AuthService from '../../utils/auth';
import { useNavigate, useLocation } from 'react-router-dom';

const initialNavigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
  { name: 'Finished', href: '/finished', icon: CheckCircleIcon, current: false },
  { name: 'Special Order Parts', href: '/special-order-parts', icon: ShoppingCartIcon, current: false },
  { name: 'Loaners', href: '#', icon: LifebuoyIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navigation, setNavigation] = useState(initialNavigation);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  React.useEffect(() => {
    setNavigation((prevNavigation) =>
      prevNavigation.map((item) =>
        item.href === location.pathname ? { ...item, current: true } : { ...item, current: false }
      )
    );
  }, [location.pathname]);

  const handleLogout = () => {
    AuthService.logout();
    navigate('/');
  };

  const handleNavigation = (href) => {
    navigate(href);
  };

  return (
    <div>
      <div className="p-5 rounded-3xl bg-gray-900 flex flex-col h-full hidden lg:flex">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto logo"
            src="https://www.svgrepo.com/show/210990/car.svg"
          />
          <span className="ml-2 text-white text-3xl">DSxpert</span>
        </div>
        <nav className="flex flex-1 flex-col pt-6">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={classNames(
                        item.current
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-white' : 'text-gray-200 group-hover:text-white',
                          'h-6 w-6 shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mt-auto">
              <button
                onClick={handleLogout}
                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                <ArrowLeftOnRectangleIcon
                  className="h-6 w-6 shrink-0 text-gray-200 group-hover:text-white"
                  aria-hidden="true"
                />
                Log Out
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="lg:hidden">
        <button
          type="button"
          className="p-4 bg-gray-800 text-white rounded-md"
          onClick={() => setSidebarOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>

        <Transition show={sidebarOpen} as={React.Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://www.svgrepo.com/show/210990/car.svg"
                        alt="DSxpert"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <button
                                  onClick={() => handleNavigation(item.href)}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-800 text-white'
                                      : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                  {item.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <button
                            onClick={handleLogout}
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                          >
                            <ArrowLeftOnRectangleIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                            Log Out
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default Sidebar;