import { getUserShoppingCartItems } from "redux/middlewares/user/getUserShoppingCartItems";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

export const addToShoppngCart = (params, showAnimation) => async (dispatch) => {
  const result = await apiServices.post(endpointUrls.addToShoppngCart, params);
  if (result.isSuccess) {
    showAnimation();
    dispatch(getUserShoppingCartItems());
  }
};
