import {
  setResultLoading,
  setResultSearchResult,
} from 'redux/reducers/resultReducer/resultReducer';
import endpointUrls from 'utils/constants/endpointUrls';
import apiServices from 'utils/services/apiServices';

export const getProductSearchResults = (params) => async (dispatch) => {
  dispatch(setResultLoading(true));
  const result = await apiServices.get(
    endpointUrls.searchProducts,
    params,
    {},
    true
  );
  dispatch(setResultLoading(false));

  if (result.isSuccess) dispatch(setResultSearchResult(result.data.Data));
};
