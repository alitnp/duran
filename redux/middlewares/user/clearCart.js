import { setUserCartList } from "redux/reducers/userReducer/userReducer";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

export const clearCart = (setLoading) => async (dispatch) => {
  setLoading(true);
  await apiServices.remove(endpointUrls.clearShoppingCart);
  dispatch(setUserCartList(null));
  setLoading(false);
};
