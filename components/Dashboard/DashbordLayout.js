import { CaretDownOutlined } from '@ant-design/icons';
import Layout from 'components/Layout/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleLogout } from 'redux/middlewares/user/handleLogout';
import routes from 'utils/constants/routes';

const items = [
  { name: 'اطلاعات حساب', route: routes.dashboard.path },
  { name: 'ویرایش اطلاعات', route: routes.dashboardEdit.path },
  { name: 'سفارش های من', route: routes.dashboardOrders.path },
];

const DashboardLayout = ({ children }) => {
  //states
  const [open, setOpen] = useState(false);

  //hooks
  const { route, push } = useRouter();
  const dispatch = useDispatch();

  //functions
  const toggle = () => setOpen((prevState) => !prevState);
  const logout = () => {
    dispatch(handleLogout());
    push(routes.home.path);
  };
  const navItems = () => (
    <>
      {items.map((item) => (
        <Link href={item.route} key={item.name}>
          <p
            className={` ${
              route === item.route
                ? 'text-d-bg-color bg-white/20'
                : 'text-d-border-gray'
            } hover:text-white transition-all cursor-pointer mx-2 rounded-md whitespace-nowrap px-3 text-center py-1 my-1 `}
          >
            {item.name}
          </p>
        </Link>
      ))}
      <p
        className={` text-d-bg-color bg-white/2 hover:text-white transition-all cursor-pointer mx-2 rounded-md whitespace-nowrap px-3 text-center py-1 my-1 mt-auto`}
        onClick={logout}
      >
        خروج
      </p>
    </>
  );

  return (
    <Layout>
      <div className='flex w-full '>
        <aside className='flex-col hidden w-32 py-2 my-4 ml-4 rounded-md md:flex bg-d-text'>
          {navItems()}
        </aside>
        <div className='w-full'>
          <div
            className={`md:hidden py-2 mt-4 rounded-md bg-d-text transition-all overflow-hidden ${
              open ? 'max-h-[500px]' : 'max-h-[50px]'
            }`}
          >
            <p
              className='px-3 py-1 mx-2 my-1 mb-3 text-center rounded-md cursor-pointer text-d-bg-color hover:text-white whitespace-nowrap'
              onClick={toggle}
            >
              گزینه ها{' '}
              <CaretDownOutlined
                className={`mr-3 transition-all bottom-1 relative ${
                  open && 'rotate-180'
                }`}
              />
            </p>
            {navItems()}
          </div>
          <div className='w-full p-4 my-4 border rounded-md shadow-md'>
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardLayout;
