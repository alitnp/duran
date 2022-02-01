import { handleLogout } from 'redux/middlewares/user/handleLogout';
import { setUserDetail } from 'redux/reducers/userReducer/userReducer';
import endpointUrls from 'utils/constants/endpointUrls';
import apiServices from 'utils/services/apiServices';

export const getUserDetail = () => async (dispatch) => {
  const result = await apiServices.get(endpointUrls.getUserDetail);
  console.log('userDetail', result);
  if (result.isSuccess) dispatch(setUserDetail(result.data));
  // else dispatch(handleLogout());
};
