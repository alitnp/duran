import { setHomeBestSellers } from 'redux/reducers/homeReducer/homeReducer';
import endpointUrls from 'utils/constants/enpointUrls';
import apiServices from 'utils/services/apiServices';

export const getHomeBestSelleres = () => async (dispatch) => {
	const result = await apiServices.get(endpointUrls.getHomeBestSelleres);
	if (result.isSuccess) dispatch(setHomeBestSellers(result.data));
};
