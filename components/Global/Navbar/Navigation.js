import { useState } from 'react';
import Image from 'next/image';
import NavItem from 'components/Global/Navbar/NavItem';
import style from 'styles/style.module.css';
import routes from 'utils/constants/routes';
import { Drawer } from 'antd';

const Navigation = () => {
  //states
  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu);

  //functions
  const onClose = () => setOpenMenu((prevState) => !prevState);
  const onOpen = () => setOpenMenu(true);

  //constants
  const items = [
    { url: '/', text: 'خانه' },
    { url: '/results', text: 'تازه رسیده ها' },
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
        className={` rounded-md flex items-center justify-center p-1 cursor-pointer relative overflow-visible md:hidden h-8 mt-2 select-none ${style.noSelect}`}
        onClick={onOpen}
      >
        <Image
          src='/icons/menu.svg'
          width='20px'
          height='20px'
          objectFit='contain'
        />
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
