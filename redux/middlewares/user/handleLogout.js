import { setRequestList } from "redux/reducers/requestReducer/requestReducer";
import {
  setLoggedIn,
  setUserAddresses,
  setUserDetail,
  setUserWishlist,
} from "redux/reducers/userReducer/userReducer";

export const handleLogout = () => (dispatch) => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  dispatch(setLoggedIn(false));
  dispatch(setUserDetail(null));
  dispatch(setUserWishlist(null));
  dispatch(setUserAddresses(null));
  dispatch(setRequestList(null));
};
