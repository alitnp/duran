import { addProductsToBrand } from 'redux/reducers/brandsReducer/brandsReducer';
import endpointUrls from 'utils/constants/endpointUrls';
import apiServices from 'utils/services/apiServices';

export const getBrandProduct = (index, id) => async (dispatch) => {
  const result = await apiServices.get(
    endpointUrls.getBrandProduct +
      '?brandId=' +
      id +
      '&SpecificationFilter.Enabled=false'
  );
  if (!result.isSuccess) return;
  console.log(result);
  dispatch(addProductsToBrand({ index, products: result.data.Data.Products }));
};
