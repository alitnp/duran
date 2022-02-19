import Navigation from "components/Global/Navbar/Navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getHomeBestSelleres } from "redux/middlewares/home/getHomeBestSellers";
import { getHomeCategories } from "redux/middlewares/home/getHomeCategories";
import { getHomeCategoriesProducts } from "redux/middlewares/home/getHomeCategoriesProducts";
import { getHomeFeatured } from "redux/middlewares/home/getHomeFeatured";
import { getHomeProvinceList } from "redux/middlewares/home/getHomeProvinceList";
import { getHomeSlides } from "redux/middlewares/home/getHomeSlides";
import { getNewProducts } from "redux/middlewares/home/getNewProducts";
import { getUserAddresses } from "redux/middlewares/user/getUserAddresses";
import { getUserDetail } from "redux/middlewares/user/getUSerDetail";
import { getUserWishlist } from "redux/middlewares/user/getUserWishlist";
import { setCartIsCartMenuOpen } from "redux/reducers/cartReducer/cartReducer";
import { setLoggedIn } from "redux/reducers/userReducer/userReducer";
import routes from "utils/constants/routes";

const Navbar = () => {
  //states
  const { loggedIn, userDetail, userAddresses, userWishlist } = useSelector(
    (state) => state.user
  );
  const {
    newProducts,
    bestSellers,
    featured,
    slides,
    provinceList,
    categories,
    categoriesProducts,
  } = useSelector((state) => state.home);
  const { isCartMenuOpen } = useSelector((state) => state.cart);

  //hookes
  const dispatch = useDispatch();
  const router = useRouter();

  //effects
  useEffect(() => {
    isCartMenuOpen && dispatch(setCartIsCartMenuOpen(false));
    const token = localStorage.getItem("accessToken");
    if (token) dispatch(setLoggedIn(true));
    Object.keys(routes).map((item) => {
      if (
        routes[item].path === router.route &&
        routes[item].isProtected &&
        !token
      ) {
        router.push(routes.login.path);
      }
    });
  }, [router.route]);
  useEffect(() => {
    loggedIn && !userDetail && dispatch(getUserDetail());
    loggedIn && !userAddresses && dispatch(getUserAddresses());
  }, [loggedIn, userDetail]);
  useEffect(() => {
    !newProducts && dispatch(getNewProducts());
    !bestSellers && dispatch(getHomeBestSelleres());
    !featured && dispatch(getHomeFeatured());
    !slides && dispatch(getHomeSlides());
    !provinceList && dispatch(getHomeProvinceList());
    !categories && dispatch(getHomeCategories());
  }, []);
  useEffect(() => {
    categories && !categoriesProducts && dispatch(getHomeCategoriesProducts());
  }, [categories]);
  useEffect(() => {
    loggedIn && !userWishlist && dispatch(getUserWishlist());
  }, [loggedIn]);

  return (
    <>
      <div className="h-16 mx-auto d-container" />
      <div className="fixed top-0 z-50 flex items-center justify-between w-full h-16 ">
        <div className="flex justify-between h-full p-2 mx-auto border-b bg-d-bg-color border-d-border-gray d-container">
          <Navigation />
          <h3 className="fixed text-lg font-bold transform -translate-x-1/2 left-1/2 top-5">
            DURAN
          </h3>
          <div className="flex items-center">
            {loggedIn && (
              <Link href={routes.wishlist.path} passHref>
                <a className="ml-4 text-lg">
                  <AiOutlineHeart className="cursor-pointer " />
                </a>
              </Link>
            )}
            <Link href={loggedIn ? routes.dashboard.path : routes.login.path}>
              <div className="flex items-center cursor-pointer">
                {!loggedIn && <span className="ml-2">ورود</span>}
                <span className="text-lg">
                  <FaRegUserCircle />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
