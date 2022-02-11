import DashboardPageTitle from 'components/Dashboard/DashboardPageTitle';
import DashboardLayout from 'components/Dashboard/DashbordLayout';
import ProductGrid from 'components/Global/ProductGrid/ProductGrid';
import Button from 'components/UI/Button/Button';
import Empty from 'components/UI/Empty/Empty';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUserWishlist } from 'redux/middlewares/user/getUserWishlist';
import endpointUrls from 'utils/constants/endpointUrls';
import routes from 'utils/constants/routes';

const WishlistPage = () => {
  const { userWishlist } = useSelector((state) => state.user);
  console.log(userWishlist)

  //hooks
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    !userWishlist && dispatch(getUserWishlist());
  }, []);

  return (
    <DashboardLayout>
      <DashboardPageTitle title="محصولات نشان شده" />
      {!userWishlist && <Empty title='محصولی به این لیست اضافه نشده'>
        <Link href={routes.home.path} passHref>
          <a ><Button text='بازگشت به خانه' /></a>
        </Link>
      </Empty>}
      {userWishlist && <ProductGrid>{userWishlist.Items.map((item, index) => {
        return (
          <Link href={routes.product.path + "?id=" + item.ProductId} key={index} passHref>
            <a className='flex flex-col items-center justify-center w-full border' >
              <Image src={endpointUrls.baseUrl + item.Picture.ImageUrl} width="150px" height="200px" objectFit='contain' objectPosition="center" alt={item.Picture.AlternateText} />
            </a>
          </Link>
        );
      })}</ProductGrid>}
    </DashboardLayout>
  );
};

export default WishlistPage;
