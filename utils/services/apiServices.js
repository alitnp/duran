import axios from 'axios';
import { toast } from 'react-toastify';
import endpointUrls from 'utils/constants/endpointUrls';
import { store } from 'redux/store';
import { handleLogout } from 'redux/middlewares/user/handleLogout';

const baseUrl = endpointUrls.baseUrl;

const defaultHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const token = localStorage.getItem('accessToken');
  if (token) headers.Authorization = token;
  return headers;
};

const handleError = (error) => {
  if (error?.Message) return toast.warning(error.Message);
  if (error?.message) return toast.warning(error.message);
  toast.warning('عملیات با مشکل مواجه شد. دوباره سعی کنید.');
};

const logout = () => store.dispatch(handleLogout());

const get = async (url, params, optionalHeaders, noError) => {
  let isSuccess = true;
  let data;
  let error;
  let status;

  await axios
    .get(baseUrl + url, {
      params,
      headers: { ...defaultHeaders(), ...optionalHeaders },
    })
    .then((res) => {
      data = res.data;
      status = res.status;
    })
    .catch((err) => {
      isSuccess = false;
      error = err.response?.data;
      !noError && handleError(error);
      err?.response?.status === 401 && logout();
    });

  return { isSuccess, data, error, status };
};

const post = async (url, params, optionalHeaders, noError) => {
  let isSuccess = true;
  let data;
  let error;
  let status;

  await axios
    .post(baseUrl + url, params, {
      headers: { ...defaultHeaders(), ...optionalHeaders },
    })
    .then((res) => {
      data = res.data;
      status = res.status;
    })
    .catch((err) => {
      isSuccess = false;
      error = err.response?.data;
      !noError && handleError(error);
      err?.response?.status === 401 && logout();
      console.log(err.response?.status);
    });

  return { isSuccess, data, error, status };
};

const put = async (url, params, optionalHeaders, noError) => {
  let isSuccess = true;
  let data;
  let error;
  let status;

  await axios
    .put(baseUrl + url, params, {
      headers: { ...defaultHeaders(), ...optionalHeaders },
    })
    .then((res) => {
      data = res.data;
      status = res.status;
    })
    .catch((err) => {
      isSuccess = false;
      error = err.response?.data;
      !noError && handleError(error);
      err?.response?.status === 401 && logout();
    });

  return { isSuccess, data, error, status };
};

const remove = async (url, params, optionalHeaders, noError) => {
  let isSuccess = true;
  let data;
  let error;
  let status;

  await axios
    .delete(baseUrl + url, {
      params,
      data: params,
      headers: { ...defaultHeaders(), ...optionalHeaders },
    })
    .then((res) => {
      data = res.data;
      status = res.status;
    })
    .catch((err) => {
      isSuccess = false;
      error = err.response?.data;
      !noError && handleError(error);
      err?.response?.status === 401 && logout();
    });

  return { isSuccess, data, error, status };
};

const apiServices = { get, post, put, remove };
export default apiServices;
