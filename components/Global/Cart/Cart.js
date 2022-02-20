import CartItem from "components/Global/Cart/CartItem";
import RedIcon from "components/Global/Cart/RedIcon";
import Button from "components/UI/Button/Button";
import { Separator } from "utils/helpers/persianTools";
import { RiCloseLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCartIsCartMenuOpen } from "redux/reducers/cartReducer/cartReducer";
import { useState } from "react";
import LoadingSpin from "components/UI/LoadingSpin/LoadingSpin";
import { FiTrash2 } from "react-icons/fi";
import { clearCart } from "redux/middlewares/user/clearCart";

const Cart = () => {
  //states
  const { isCartMenuOpen } = useSelector((state) => state.cart);
  const { cartList, loggedIn } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  console.log(cartList);

  if (!loggedIn) return null;

  //hooks
  const dispatch = useDispatch();

  //functions
  const toggleCart = () => dispatch(setCartIsCartMenuOpen(!isCartMenuOpen));
  const removeAllItems = () => {
    dispatch(clearCart(setLoading));
  };

  //constants
  const totalPrice = () => {
    if (!cartList) return 0;
    return (
      cartList?.Items?.reduce((prev, curr) => {
        return prev + curr?.SubTotalValue;
      }, 0) || 0
    );
  };

  return (
    <div
      className={`fixed top-0 z-50 w-10/12 h-full text-d-bg-color transition-right duration-500 ease-out ${
        isCartMenuOpen ? "right-0" : "-right-[83.333333%] "
      }`}
    >
      <div
        className={`fixed top-0  w-full h-full abosulte opacity-0 cursor-pointer ${
          isCartMenuOpen ? "left-0" : "-left-full"
        }`}
        onClick={toggleCart}
      />
      <div className="relative flex w-full h-full pt-8 px-[5%] bg-zinc-700/80 backdrop-blur-md ">
        <div className="flex flex-col w-full mb-4 ">
          <div className="mb-4 text-3xl">
            <RiCloseLine onClick={toggleCart} className="cursor-pointer" />
          </div>
          <div className="flex flex-col items-center justify-between pb-2 border-b xs:flex-row xs:items-start">
            <p className="flex items-center mb-0 text-2xl font-medium gap-x-2 whitespace-nowrap">
              سبد خرید
              {loading && <LoadingSpin />}
            </p>
            <Button
              text="پرداخت"
              className="mt-4 text-black xs:mt-0 bg-d-secondary"
            />
          </div>
          <div className="flex justify-between mt-1 text-sm font-light">
            <p>{`${cartList?.Items?.length || 0} محصول در سبد`}</p>
            <p>{`${Separator(totalPrice())} تومان`}</p>
          </div>
          {cartList?.Items?.length > 0 && (
            <p
              className="flex items-center text-red-300 cursor-pointer hover:text-red-400 gap-x-2"
              onClick={removeAllItems}
            >
              <FiTrash2 />
              حذف همه
            </p>
          )}
          <div className="grid grid-cols-1 mt-6 overflow-y-auto sm:grid-cols-2 lg:grid-cols-3 gap-y-6 text-d-gray no-scrollbar">
            {cartList?.Items &&
              cartList?.Items.map((item, index) => (
                <CartItem
                  key={index}
                  info={item}
                  index={index}
                  setLoading={setLoading}
                />
              ))}
          </div>
        </div>
        <RedIcon onClick={toggleCart} count={cartList?.Items?.length || 0} />
      </div>
    </div>
  );
};

export default Cart;
