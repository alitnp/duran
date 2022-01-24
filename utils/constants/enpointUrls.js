const endpointUrls = {
	//baseUrl
	baseUrl: 'http://31.7.75.221:8002',

	//user
	login: '/Token/Login',
	register: '/Account/Register',
	verifyOtp: '/Account/AccountActivationByPhone',
	resendOtp: '/Account/ResendOtpCode',

	//home
	getNewProducts: '/Product/NewProducts',
};

export default endpointUrls;
