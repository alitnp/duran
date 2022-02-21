import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserShoppingCartItems } from "redux/middlewares/user/getUserShoppingCartItems";
import endpointUrls from "utils/constants/endpointUrls";
import routes from "utils/constants/routes";

const Succeed = () => {
  //states
  const { cartList } = useSelector((state) => state.user);
  const [items, setItems] = useState(null);

  //hooks
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    setItems(cartList.Items);
    dispatch(getUserShoppingCartItems());
  }, []);

  return (
    <div className="">
      <div className="flex flex-col items-center my-10">
        <p className="mb-2 text-center text-7xl text-emerald-600">
          <BsFillCheckCircleFill />
        </p>
        <p className="text-lg font-bold">خرید شما با موفقیت انجام شد.</p>
        <p className="text-center">
          شما می توانید خرید خود را در پنل کاربری <br />
          از بخش
          <Link passHref href={routes.dashboardOrders.path}>
            <a>
              <strong> &quot;خریدهای من&quot; </strong>
            </a>
          </Link>
          پیگیری کنید.
        </p>
      </div>
      <p className="text-center">لیست محصولات</p>
      <div className="flex flex-col gap-y-2 overflow-y-auto max-h-[250px] mb-20">
        {items &&
          items.map((item) => {
            return (
              <div key={item.Id} className="flex items-center justify-between ">
                <div className=" w-14 h-14">
                  <Image
                    src={endpointUrls.baseUrl + item.Picture.ImageUrl}
                    width="56px"
                    height="56px"
                    objectFit="cover"
                  />
                </div>
                <div className="mr-2 h-fit">
                  <p className="mb-0">{item.ProductName}</p>
                  <p className="mb-0 text-xs text-d-faded-text">
                    {item.AttributeInfo}
                  </p>
                </div>
                <p>{item.Quantity}</p>
                <p>{item.SubTotal}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Succeed;
