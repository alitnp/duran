import { setHomeBrands } from "redux/reducers/homeReducer/homeReducer";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

export const getHomeBrands = () => async (dispatch) => {
  const result = await apiServices.post(endpointUrls.getHomeBrands, {}, true);
  if (result.isSuccess) dispatch(setHomeBrands(result.data));
};
