import {
  ArrowLeftOnRectangleIcon,
  ShoppingCartIcon,
  HomeIcon,
  CheckCircleIcon,
  LifebuoyIcon
} from '@heroicons/react/24/outline';


const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Finished', href: '#', icon: CheckCircleIcon, current: false },
  { name: 'Special Order Parts', href: '#', icon: ShoppingCartIcon, current: false },
  { name: 'Loaners', href: '#', icon: LifebuoyIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Sidebar = () => {
  return (
    <div className="p-5 rounded-3xl bg-gray-900 flex flex-col h-full">
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-8 w-auto logo"
          src="https://www.svgrepo.com/show/210990/car.svg"
        />
        <span className="ml-2 text-white text-3xl ">DSxpert</span>
      </div>
      <nav className="flex flex-1 flex-col pt-6">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-white' : 'text-white-200 group-hover:text-white',
                        'h-6 w-6 shrink-0'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="mt-auto">
            <a
              href="#"
              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <ArrowLeftOnRectangleIcon
                className="h-6 w-6 shrink-0 text-white-200 group-hover:text-white"
                aria-hidden="true"
              />
              Log Out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
