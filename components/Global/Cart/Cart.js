import CartItem from "components/Global/Cart/CartItem";
import RedIcon from "components/Global/Cart/RedIcon";
import Button from "components/UI/Button/Button";
import { Separator } from "utils/helpers/persianTools";
import { RiCloseLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCartIsCartMenuOpen } from "redux/reducers/cartReducer/cartReducer";

const Cart = () => {
  //states
  const { items, isCartMenuOpen } = useSelector((state) => state.cart);

  //hooks
  const dispatch = useDispatch();

  //functions
  const toggleCart = () => dispatch(setCartIsCartMenuOpen(!isCartMenuOpen));

  //constants
  const totalPrice = items.reduce((prev, curr) => {
    return prev + curr?.ProductPrice?.PriceValue * curr.quantity;
  }, 0);

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
            <p className="mb-0 text-2xl font-medium whitespace-nowrap">
              سبد خرید
            </p>
            <Button
              text="پرداخت"
              className="mt-4 text-black xs:mt-0 bg-d-secondary"
            />
          </div>
          <div className="flex justify-between mt-1 text-sm font-light">
            <p>{`${items.length} محصول در سبد`}</p>
            <p>{`${Separator(totalPrice)} تومان`}</p>
          </div>
          <div className="flex flex-col items-stretch mt-6 overflow-y-auto sm:flex-row gap-y-6 text-d-gray no-scrollbar">
            {items.map((item, index) => (
              <CartItem key={index} info={item} index={index} />
            ))}
          </div>
        </div>
        <RedIcon onClick={toggleCart} count={items.length} />
      </div>
    </div>
  );
};

export default Cart;
