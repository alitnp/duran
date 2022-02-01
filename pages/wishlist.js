import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import Layout from 'components/Layout/Layout';
import Button from 'components/UI/Button/Button';
import Empty from 'components/UI/Empty/Empty';
import Link from 'next/link';
import routes from 'utils/constants/routes';

const wishlistPage = () => {
  return (
    <Layout>
      <Breadcrumb style={{ marginTop: '0.75rem' }}>
        <Breadcrumb.Item>
          <Link href={routes.home.path}>
            <HomeOutlined className='relative bottom-1' />
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span className='cursor-pointer'>محصولات نشان شده</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className='mt-2'>
        <div className={`flex mb-2 `}>
          <div className='w-full h-full mt-auto border-b border-d-border-gray' />
          <h4 className=' border-b-2 mx-2 border-d-primary font-semibold pb-[5px] whitespace-nowrap mb-0 px-2'>
            محصولات نشان شده
          </h4>
          <div className='w-full h-full mt-auto border-b border-d-border-gray' />
        </div>
      </div>
      <Empty title='محصولی به این لیست اضافه نشده'>
        <Link href={routes.home.path}>
          <Button text='بازگشت به خانه' />
        </Link>
      </Empty>
    </Layout>
  );
};

export default wishlistPage;
