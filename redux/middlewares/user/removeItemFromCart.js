import { getUserShoppingCartItems } from "redux/middlewares/user/getUserShoppingCartItems";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

export const removeItemFromCart = (Id, finish) => async (dispatch) => {
  const result = await apiServices.remove(endpointUrls.removeitemFromCart, {
    Id,
    Shoppingcartpage: true,
  });
  if (result.isSuccess) {
    dispatch(getUserShoppingCartItems());
  }
  finish && finish();
};
