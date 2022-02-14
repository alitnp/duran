import { setHomeCategoriesProducts } from "redux/reducers/homeReducer/homeReducer";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

export const getHomeCategoriesProducts = () => async (dispatch, getState) => {
  const { categories } = getState().home;
  const categoriesProductsList = [];
  for (let i = 0; i < categories.length; i++) {
    const element = categories[i];
    const result = await apiServices.get(
      endpointUrls.searchProducts + "?pagesize=18&cid=" + element.Id
    );
    if (result.isSuccess)
      categoriesProductsList.push({
        categoryName: element.Name,
        categoryId: element.Id,
        products: result.data.Data.Products,
      });
  }
  dispatch(setHomeCategoriesProducts(categoriesProductsList));
};
