import { getUserShoppingCartItems } from "redux/middlewares/user/getUserShoppingCartItems";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

export const changeCartItemQuantity = (params, finish) => async (dispatch) => {
  const result = await apiServices.post(
    endpointUrls.changeCartItemQuantity,
    params
  );
  if (result.isSuccess) dispatch(getUserShoppingCartItems());
  finish && finish();
};
