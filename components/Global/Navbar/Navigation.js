import { useState } from 'react';
import Image from 'next/image';
import NavItem from 'components/Global/Navbar/NavItem';
import style from 'styles/style.module.css';
import routes from 'utils/constants/routes';
import { Drawer } from 'antd';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MdMenu } from 'react-icons/md';

const Navigation = () => {
  //states
  const [openMenu, setOpenMenu] = useState(false);

  //hooks
  const router = useRouter();

  //effects
  useEffect(() => {
    setOpenMenu(false);
  }, [router.pathname]);

  //functions
  const onClose = () => setOpenMenu((prevState) => !prevState);
  const onOpen = () => setOpenMenu(true);

  //constants
  const items = [
    { url: routes.home.path, text: 'خانه' },
    { url: routes.result.path, text: 'تازه رسیده ها' },
    { url: routes.brands.path, text: 'برند ها' },
  ];

  return (
    <>
      <nav className='items-center hidden list-none md:flex'>
        {items.map((item) => {
          return <NavItem text={item.text} url={item.url} key={item.text} />;
        })}
      </nav>
      <div
        className={` rounded-md flex items-center text-2xl justify-center p-1 cursor-pointer relative overflow-visible md:hidden h-8 mt-2 select-none ${style.noSelect}`}
        onClick={onOpen}
      >
        <MdMenu />
      </div>
      <Drawer
        title='فروشگاه دوران'
        placement='right'
        onClose={onClose}
        visible={openMenu}
      >
        {items.map((item) => {
          return (
            <div
              key={item.text}
              className='flex items-center py-2 pr-4 text-center hover:bg-d-gray'
            >
              <NavItem text={item.text} url={item.url} />
            </div>
          );
        })}
      </Drawer>
    </>
  );
};

export default Navigation;
