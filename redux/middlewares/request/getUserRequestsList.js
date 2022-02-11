import { setRequestList, setRequestLoading } from "redux/reducers/requestReducer/requestReducer";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

export const getUserRequestsList = () => async (dispatch) => {
    dispatch(setRequestLoading(true));
    const result = await apiServices.get(endpointUrls.getProductRequestsList);
    dispatch(setRequestLoading(false));
    if (!result.isSuccess) return;
    dispatch(setRequestList(result.data.Data));
};