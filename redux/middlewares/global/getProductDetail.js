import endpointUrls from 'utils/constants/enpointUrls';
import apiServices from 'utils/services/apiServices';

export const getProductDetail = async (productId, setLoading, setNotFound) => {
	!!setLoading && setLoading(true);
	const result = await apiServices.get(endpointUrls.getproductDetail, {
		productId,
	});
	!!setLoading && setLoading(false);
	if (result.isSuccess) return result.data.Data;
	else !!setNotFound && setNotFound(true);
};
