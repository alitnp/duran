import { setHomeProvineList } from "redux/reducers/homeReducer/homeReducer";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

export const getHomeProvinceList = () => async (dispatch) => {
  const result = await apiServices.get(endpointUrls.getHomeProvinceList);
  if (!result.isSuccess) return;
  dispatch(setHomeProvineList(result.data.Data));
};
