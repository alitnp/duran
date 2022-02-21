import Button from "components/UI/Button/Button";
import { Separator } from "utils/helpers/persianTools";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import routes from "utils/constants/routes";
import { addProductToWishlist } from "redux/middlewares/global/addProductToWishlist";
import { useDispatch, useSelector } from "react-redux";
import { setCartNeedAnimation } from "redux/reducers/cartReducer/cartReducer";
import Tooltip from "components/UI/Tooltip/Tooltip";

import ProductCardAnimation from "components/Global/ProductCard/ProductCardAnimation";
import { removeProductFromWishlist } from "redux/middlewares/global/removeProductFromWishlist";
import { useRouter } from "next/router";
import { setNeedRedirect } from "redux/reducers/homeReducer/homeReducer";
import { addToShoppngCart } from "redux/middlewares/user/addToShoppingCart";

const BuyBox = ({
  id,
  englishBrand,
  persianBrand,
  persianName,
  englishName,
  sizes,
  price,
  colors,
  info,
}) => {
  //states
  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [showAnimation, setShowAnimation] = useState();
  const [isInWishlist, setIsInWishlist] = useState(false);
  const { needAnimation } = useSelector((state) => state.cart);
  const { userWishlist, loggedIn, cartList } = useSelector(
    (state) => state.user
  );

  //hooks
  const dispatch = useDispatch();
  const router = useRouter();

  //effects
  useEffect(() => {
    sizes && setSelectedSize(sizes.Values[0]);
  }, [sizes]);
  useEffect(() => {
    colors && setSelectedColor(colors.Values[0]);
  }, [colors]);
  useEffect(() => {
    if (needAnimation && needAnimation.id === info.Id) {
      setShowAnimation({ x: needAnimation.clientX, y: needAnimation.clientY });
      setTimeout(() => {
        setShowAnimation(null);
        dispatch(setCartNeedAnimation(null));
      }, 1200);
    }
  }, [needAnimation]);
  useEffect(() => {
    userWishlist &&
      info &&
      setIsInWishlist(
        userWishlist.Items.some((shoe) => shoe.ProductId === info.Id)
      );
  }, [userWishlist, info]);

  //functions
  const pushToLogin = () => {
    dispatch(setNeedRedirect(routes.product.path + "?id=" + info.Id));
    router.push(routes.login.path);
  };
  const getAttributes = (attribureName) =>
    info.ProductAttributes.find((item) => item.Name === attribureName);
  const addToWishlist = () => {
    if (!loggedIn) return router.push(routes.login.path);
    dispatch(addProductToWishlist(id));
  };
  const handleAnimation = (event) => {
    if (!event) return;
    dispatch(
      setCartNeedAnimation({
        ...event,
        id: info.Id,
      })
    );
  };
  const handleAddToCart = (event) => {
    console.log(getAttributes("Color"));
    if (!loggedIn) return pushToLogin();
    dispatch(
      addToShoppngCart(
        {
          ProductId: info.Id,
          ShoppingCartType: "ShoppingCart",
          Quantity: 1,
          Attributes: {
            ["product_attribute_" + getAttributes("Color").Id]:
              selectedColor.Id,
            ["product_attribute_" + getAttributes("Size").Id]: selectedSize.Id,
          },
        },
        () => handleAnimation(event)
      )
    );
  };
  const removeFromWishList = () => dispatch(removeProductFromWishlist(id));

  return (
    <div className="flex min-w-[300px] flex-col self-stretch sm:w-4/12 p-2 pb-4 mb-4 border border-b rounded-md sm:h-96 border-d-border-gray">
      <div className="pb-2 mb-2 border-b">
        <h1 className="mb-2 text-base font-bold">
          <Link href={routes.home.path} passHref>
            <a className="cursor-pointer hover:underline">{persianBrand}</a>
          </Link>
          {" - "}
          {persianName}
        </h1>
        <h1 className="text-base font-bold">
          <Link href={routes.home.path} passHref>
            <a className="cursor-pointer hover:underline">{englishBrand}</a>
          </Link>
          {" - "}
          {englishName}
        </h1>
      </div>
      <div className="flex justify-between pb-2 mb-2 border-b">
        <span>قیمت</span>
        <span className="text-lg">{Separator(price)} تومان</span>
      </div>
      <div className="flex flex-col pb-2 mb-2 border-b">
        <span> سایز:</span>
        <div className="flex flex-row-reverse flex-wrap justify-end mt-2 mr-auto gap-x-2">
          {sizes &&
            sizes.Values.map((item) => {
              return (
                <div
                  key={item.Id}
                  onClick={() => setSelectedSize(item)}
                  className={`flex items-center justify-center w-8 h-8 border border-d-border-gray cursor-pointer ${
                    item.Id === selectedSize?.Id && " border-d-text "
                  }
`}
                >
                  {item.Name}
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex flex-col pb-2 border-b">
        <span> رنگ:</span>
        <div className="flex flex-row-reverse flex-wrap justify-end mt-2 mr-auto gap-x-2">
          {colors &&
            colors.Values.map((item) => {
              return (
                <div
                  key={item.Id}
                  onClick={() => setSelectedColor(item)}
                  className={`flex items-center justify-center border border-d-border-gray cursor-pointer whitespace-nowrap p-2 ${
                    item.Id === selectedColor?.Id && " border-d-text "
                  }
`}
                >
                  {item.Name}
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex items-center mt-8 md:mt-auto gap-x-3">
        <Button
          text={
            <div className="flex items-center gap-x-2">
              <FiShoppingCart className="text-lg" />
              افزودن به سبد خرید
            </div>
          }
          onClick={handleAddToCart}
        />
        <div className="flex items-center text-2xl">
          {!isInWishlist ? (
            <Tooltip title="افزودن به لیست محبوب ها">
              <AiOutlineHeart
                className="cursor-pointer"
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
      <ProductCardAnimation showAnimation={showAnimation} />
    </div>
  );
};

export default BuyBox;
