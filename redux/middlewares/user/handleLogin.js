import { setLoggedIn } from 'redux/reducers/userReducer/userReducer';
import endpointUrls from 'utils/constants/enpointUrls';
import apiServices from 'utils/services/apiServices';

export const handleLogin =
	(Phone, Password, setLoading, pushToHome) => async (dispatch) => {
		!!setLoading && setLoading(true);
		const result = await apiServices.post(endpointUrls.login, {
			LoginType: 'Phone',
			Phone,
			Password,
		});
		!!setLoading && setLoading(false);
		if (!result.isSuccess) return;
		console.log(result);
		localStorage.setItem('accessToken', result.data.Data.AccessToken);
		localStorage.setItem('refreshToken', result.data.Data.RefreshToken);
		dispatch(setLoggedIn(true));
		pushToHome();
	};
