import { setUserLoading } from 'redux/reducers/homeReducer/homeReducer';
import { setUserWishlist } from 'redux/reducers/userReducer/userReducer';
import endpointUrls from 'utils/constants/endpointUrls';
import apiServices from 'utils/services/apiServices';

export const getUserWishlist = () => async (dispatch) => {
  dispatch(setUserLoading(true));
  const result = apiServices.get(endpointUrls.getUserWishlist, null, {}, true);
  dispatch(setUserLoading(false));

  if (result.isSuccess) dispatch(setUserWishlist(result.data));
};
