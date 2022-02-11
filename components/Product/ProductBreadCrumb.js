import { HomeOutlined } from '@ant-design/icons/lib/icons';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import routes from 'utils/constants/routes';

const ProductBreadCrumb = ({ list }) => {
  return (
    <Breadcrumb style={{ marginTop: '0.75rem' }}>
      <Breadcrumb.Item>
        <Link href={routes.home.path} passHref>
          <a>
            <HomeOutlined className='relative bottom-1' />
          </a>
        </Link>
      </Breadcrumb.Item>
      {list &&
        list.map((item) => (
          <Breadcrumb.Item key={item.Id}>
            <Link href={routes.result.path + '?cid=' + item.Id} passHref>
              <a className='cursor-pointer'>{item.Name}</a>
            </Link>
          </Breadcrumb.Item>
        ))}
    </Breadcrumb>
  );
};

export default ProductBreadCrumb;
