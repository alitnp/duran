import { setHomeCategories } from "redux/reducers/homeReducer/homeReducer";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

export const getHomeCategories = () => async (dispatch) => {
  const result = await apiServices.post(
    endpointUrls.getHomeCategories,
    {},
    true
  );
  if (result.isSuccess) dispatch(setHomeCategories(result.data));
};
