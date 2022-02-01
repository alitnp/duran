import { toast } from 'react-toastify';
import { getUserWishlist } from 'redux/middlewares/user/getUserWishlist';
import endpointUrls from 'utils/constants/endpointUrls';
import apiServices from 'utils/services/apiServices';

export const addProductToWishlist = (id, setLoading) => async (dispatch) => {
  setLoading && setLoading(true);
  const result = await apiServices.post(endpointUrls.addToCartWishlist, {
    ProductId: id,
    ShoppingCartType: 'Wishlist',
    Quantity: 1,
  });
  setLoading && setLoading(false);

  if (!result.isSuccess) return;

  toast.success('به لیست محبوب ها اضافه شد.');
  dispatch(getUserWishlist());
};
