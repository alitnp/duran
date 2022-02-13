import { setUserAddresses } from "redux/reducers/userReducer/userReducer";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

export const getUserAddresses = () => async (dispatch) => {
  const result = await apiServices.get(endpointUrls.getUserAddresses);
  if (result.isSuccess) dispatch(setUserAddresses(result.data.Data.Addresses));
};
