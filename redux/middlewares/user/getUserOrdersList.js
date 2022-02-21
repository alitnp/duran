import { setUserOrdersList } from "redux/reducers/userReducer/userReducer";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

export const getUserOrdersList = () => async (dispatch) => {
  const result = await apiServices.get(endpointUrls.getUserOrders);
  if (result.isSuccess) dispatch(setUserOrdersList(result.data.Data));
};
