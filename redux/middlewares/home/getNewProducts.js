import { setHomeNewProducts } from 'redux/reducers/homeReducer/homeReducer';
import endpointUrls from 'utils/constants/endpointUrls';
import apiServices from 'utils/services/apiServices';

export const getNewProducts = () => async (dispatch) => {
  const result = await apiServices.get(endpointUrls.getNewProducts);
  if (!result.isSuccess) return;
  dispatch(setHomeNewProducts(result.data.Data));
};
