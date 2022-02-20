import { setUserCartList } from "redux/reducers/userReducer/userReducer";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

export const getUserShoppingCartItems = () => async (dispatch) => {
  const result = await apiServices.get(
    endpointUrls.getUserShoppingCart + "?checkoutAttributes=true",
    {},
    {},
    true
  );
  console.log(result);
  if (result.isSuccess) dispatch(setUserCartList(result.data.Data));
  else dispatch(setUserCartList({}));
};
