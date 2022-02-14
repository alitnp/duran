import Tooltip from "components/UI/Tooltip/Tooltip";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addProductToWishlist } from "redux/middlewares/global/addProductToWishlist";
import { removeProductFromWishlist } from "redux/middlewares/global/removeProductFromWishlist";
import {
  setCartIsCartMenuOpen,
  setCartTempAddToCart,
} from "redux/reducers/cartReducer/cartReducer";
import routes from "utils/constants/routes";

const ProductCardHoverMenu = ({ info, setLoading }) => {
  //states
  const { items } = useSelector((state) => state.cart);
  const { userWishlist, loggedIn } = useSelector((state) => state.user);
  const [isInWishlist, setIsInWishlist] = useState(false);

  //hooks
  const dispatch = useDispatch();
  const router = useRouter();

  //effects
  useEffect(() => {
    userWishlist &&
      info &&
      setIsInWishlist(
        userWishlist.Items.some((shoe) => shoe.ProductId === info.Id)
      );
  }, [userWishlist, info]);

  //functions
  const addToCart = (event) => {
    if (!loggedIn) return router.push(routes.login.path);
    dispatch(setCartTempAddToCart({ info, event }));
  };
  const isInCart = () => items.some((shoe) => shoe.Id === info.Id);
  const openCartMenu = () => dispatch(setCartIsCartMenuOpen(true));
  const addToWishlist = () => {
    if (!loggedIn) return router.push(routes.login.path);
    dispatch(addProductToWishlist(info.Id, setLoading));
  };
  const stopClick = (e) => e.stopPropagation();
  const removeFromWishList = () =>
    dispatch(removeProductFromWishlist(info.Id, setLoading));

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

        {!isInWishlist ? (
          <Tooltip title="افزودن به لیست محبوب ها">
            <AiOutlineHeart
              className="cursor-pointer "
              onClick={addToWishlist}
            />
          </Tooltip>
        ) : (
          <Tooltip title="حذف از لیست محبوب ها">
            <AiFillHeart
              className="cursor-pointer text-d-primary"
              onClick={removeFromWishList}
            />
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default ProductCardHoverMenu;
