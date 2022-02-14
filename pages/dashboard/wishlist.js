import DashboardPageTitle from "components/Dashboard/DashboardPageTitle";
import DashboardLayout from "components/Dashboard/DashbordLayout";
import ProductGrid from "components/Global/ProductGrid/ProductGrid";
import Button from "components/UI/Button/Button";
import Empty from "components/UI/Empty/Empty";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import endpointUrls from "utils/constants/endpointUrls";
import routes from "utils/constants/routes";

const WishlistPage = () => {
  const { userWishlist, loading } = useSelector((state) => state.user);

  //hooks
  const dispatch = useDispatch();

  return (
    <DashboardLayout>
      <DashboardPageTitle title="محصولات نشان شده" loading={loading} />
      {!userWishlist && !loading && (
        <Empty title="محصولی به این لیست اضافه نشده">
          <Link href={routes.home.path} passHref>
            <a>
              <Button text="بازگشت به خانه" />
            </a>
          </Link>
        </Empty>
      )}
      {userWishlist && (
        <ProductGrid>
          {userWishlist.Items.map((item, index) => {
            return (
              <Link
                href={routes.product.path + "?id=" + item.ProductId}
                key={index}
                passHref
              >
                <div className="overflow-hidden rounded-md shadow-md">
                  <a className="flex flex-col items-center justify-center w-full bg-d-gray">
                    <Image
                      src={endpointUrls.baseUrl + item.Picture.ImageUrl}
                      width="150px"
                      height="200px"
                      objectFit="contain"
                      objectPosition="center"
                      alt={item.Picture.AlternateText}
                    />
                  </a>
                  <div className="p-2">
                    <p className="mb-0 font-bold">{item.ProductName}</p>
                    <p className="mb-0">{item.UnitPrice}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </ProductGrid>
      )}
    </DashboardLayout>
  );
};

export default WishlistPage;
