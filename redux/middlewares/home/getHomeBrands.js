import { setHomeBrands } from 'redux/reducers/homeReducer/homeReducer';
import endpointUrls from 'utils/constants/enpointUrls';
import apiServices from 'utils/services/apiServices';

export const getHomeBrands = () => async (dispatch) => {
	const result = await apiServices.get(endpointUrls.getHomeBrands);
	if (result.isSuccess) dispatch(setHomeBrands(result.data));
};
