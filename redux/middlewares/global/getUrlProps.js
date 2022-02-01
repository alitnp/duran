import apiServices from 'utils/services/apiServices';

export const getUrlProps = async (name) =>
  await apiServices.get('/' + name, null, {}, true);
