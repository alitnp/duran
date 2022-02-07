import {
  setBrandsList,
  setBrandsLoading,
} from 'redux/reducers/brandsReducer/brandsReducer';
import endpointUrls from 'utils/constants/endpointUrls';
import apiServices from 'utils/services/apiServices';

export const getBrandsList = () => async (dispatch) => {
  dispatch(setBrandsLoading(true));
  const result = await apiServices.get(endpointUrls.getAllBrands);
  dispatch(setBrandsLoading(false));
  if (!result.isSuccess) return;
  dispatch(setBrandsList(result.data.Data));
};
