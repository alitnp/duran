import {
	setLoggedIn,
	setUserDetail,
} from 'redux/reducers/userReducer/userReducer';

export const handleLogout = () => (dispatch) => {
	localStorage.removeItem('accessToken');
	localStorage.removeItem('refreshToken');
	dispatch(setLoggedIn(false));
	dispatch(setUserDetail(null));
};
