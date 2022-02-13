import Tooltip from "components/UI/Tooltip/Tooltip";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addProductToWishlist } from "redux/middlewares/global/addProductToWishlist";
import {
  setCartIsCartMenuOpen,
  setCartTempAddToCart,
} from "redux/reducers/cartReducer/cartReducer";

const ProductCardHoverMenu = ({ info, setLoading }) => {
  //states
  const { items } = useSelector((state) => state.cart);
  const { userWishlist } = useSelector((state) => state.user);
  const [liked, setLiked] = useState(false);

  //hooks
  const dispatch = useDispatch();

  //functions
  const addToCart = (event) => {
    dispatch(setCartTempAddToCart({ info, event }));
  };
  const isInCart = () => items.some((shoe) => shoe.Id === info.Id);
  const openCartMenu = () => dispatch(setCartIsCartMenuOpen(true));
  const addToWishlist = () => {
    dispatch(addProductToWishlist(info.Id, setLoading));
  };
  const isInWishlist = () => {
    if (!userWishlist) return false;
    return false;
    return userWishlist.some((item) => item.Id === info.Id);
  };
  const stopClick = (e) => e.stopPropagation();

  return (
    <div
      className="absolute z-10 w-1/2 px-2 py-1 text-lg transition-all duration-300 -translate-x-1/2 bg-white rounded-md shadow-md group-hover:top-2 -top-8 left-1/2 text-d-text"
      onClick={stopClick}
    >
      <div className="relative flex items-center justify-evenly">
        {!isInCart() ? (
          <Tooltip title="افزودن به سبد خرید">
            <FiShoppingCart className="cursor-pointer " onClick={addToCart} />
          </Tooltip>
        ) : (
          <Tooltip title="در سبد خرید">
            <FiShoppingCart
              className="cursor-pointer fill-d-secondary"
              onClick={openCartMenu}
            />
          </Tooltip>
        )}

        {!isInWishlist() ? (
          <Tooltip title="افزودن به لیست محبوب ها">
            <AiOutlineHeart
              className="cursor-pointer "
              onClick={addToWishlist}
            />
          </Tooltip>
        ) : (
          <Tooltip title="حذف از لیست محبوب ها">
            <AiFillHeart
              className="cursor-pointer fill-red-600"
              onClick={() => setLiked(false)}
            />
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default ProductCardHoverMenu;
