import { setHomeFeatured } from "redux/reducers/homeReducer/homeReducer";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

export const getHomeFeatured = () => async (dispatch) => {
  const result = await apiServices.post(endpointUrls.getHomeFeatured, {}, true);
  if (result.isSuccess) {
    const featuredList = result.data.find((item) => item.Name === "Features");
    dispatch(setHomeFeatured(featuredList.FeaturedProducts));
  }
};
