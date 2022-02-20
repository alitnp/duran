import { Separator } from "utils/helpers/persianTools";
import Image from "next/image";
import { HiPlus, HiMinus } from "react-icons/hi";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from "redux/reducers/cartReducer/cartReducer";
import Tooltip2 from "components/UI/Tooltip/Tooltip";
import endpointUrls from "utils/constants/endpointUrls";
import Link from "next/link";
import routes from "utils/constants/routes";
import { changeCartItemQuantity } from "redux/middlewares/user/changeCartItemQuantity";
import { removeItemFromCart } from "redux/middlewares/user/removeItemFromCart";

const CartItem = ({ info, index, setLoading }) => {
  //hooks
  const dispatch = useDispatch();

  //functions
  const handleDelete = () => {
    setLoading(true);
    dispatch(removeItemFromCart(info.Id, () => setLoading(false)));
  };
  const handleIncrease = () => {
    setLoading(true);
    dispatch(
      changeCartItemQuantity(
        {
          ShoppingcartId: info.Id,
          Quantity: info.Quantity + 1,
        },
        () => setLoading(false)
      )
    );
  };
  const handleDecrease = () => {
    if (info.Quantity === 1) return;
    setLoading(true);
    dispatch(
      changeCartItemQuantity(
        {
          ShoppingcartId: info.Id,
          Quantity: info.Quantity - 1,
        },
        () => setLoading(false)
      )
    );
  };

  return (
    <div className="flex flex-col items-center h-full p-2 ml-6 mr-1 text-sm border rounded-md xs:flex-row border-d-border-gray">
      <Link passHref href={routes.product.path + "?id=" + info.ProductId}>
        <a className="relative ml-4 cursor-pointer">
          <Image
            src={endpointUrls.baseUrl + info.Picture.ImageUrl}
            width="80px"
            height="120px"
            objectFit="cover"
          />
        </a>
      </Link>
      <div className="flex flex-col mx-auto ">
        <Link passHref href={routes.product.path + "?id=" + info.ProductId}>
          <a className="hover:underline">
            <p className="mb-0">{info.NameFa}</p>
            <p>{info.NameEn}</p>
          </a>
        </Link>
        <div className="flex gap-x-2">
          <p className="flex items-center justify-center ">
            {info.ProductName}
          </p>
        </div>
        {/* <p>سایز : {info.sizes}</p> */}
        <p>قیمت : {Separator(info.UnitPriceValue)}</p>
        <div>{info.AttributeInfo}</div>
        <div className="flex items-center mt-auto select-none">
          <div className="flex items-center ml-auto ">
            <div
              className="ml-2 transition-all duration-500 ease-out rounded cursor-pointer bg-gray-200/70 hover:bg-gray-200 text-d-text"
              onClick={handleIncrease}
            >
              <HiPlus />
            </div>
            <p className="mb-0 text-lg">{info.Quantity}</p>
            <div
              className="mr-2 transition-all duration-500 ease-out rounded cursor-pointer bg-gray-200/70 hover:bg-gray-200 text-d-text"
              onClick={handleDecrease}
            >
              <HiMinus />
            </div>
          </div>
          <div
            className="text-lg cursor-pointer hover:text-red-300"
            onClick={handleDelete}
          >
            <Tooltip2 title="حذف این مورد">
              <FiTrash2 />
            </Tooltip2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
