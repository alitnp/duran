import { setHomeBestSellers } from "redux/reducers/homeReducer/homeReducer";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

export const getHomeBestSelleres = () => async (dispatch) => {
  const result = await apiServices.post(
    endpointUrls.getHomeBestSelleres,
    {},
    true
  );
  if (result.isSuccess) dispatch(setHomeBestSellers(result.data));
};
