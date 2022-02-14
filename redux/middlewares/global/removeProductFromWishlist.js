import { getUserWishlist } from "redux/middlewares/user/getUserWishlist";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

export const removeProductFromWishlist =
  (id, setLoading) => async (dispatch, getstate) => {
    const { userWishlist } = getstate().user;
    const itemToRemove = userWishlist.Items.find(
      (item) => item.ProductId === id
    );
    setLoading && setLoading(true);
    const result = await apiServices.remove(
      endpointUrls.deleteItemFromWishlist + "?ShoppingcartId=" + itemToRemove.Id
    );
    setLoading && setLoading(false);
    if (!result.isSuccess) return;
    dispatch(getUserWishlist());
  };
