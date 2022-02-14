import { setHomeSlides } from "redux/reducers/homeReducer/homeReducer";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

export const getHomeSlides = () => async (dispatch) => {
  const result = await apiServices.get(endpointUrls.getHomeSlider, {}, true);
  if (!result.isSuccess) return;
  dispatch(setHomeSlides(result.data.Slide));
};
