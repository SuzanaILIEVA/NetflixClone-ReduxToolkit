import Client from './instance';

export const getRequest = async (URL, params) => {
  const response = await Client.get(URL, {params: params});

  return response;
};

export const postRequest = async (URL, payload) => {
  const response = await Client.post(`${URL}`, payload);
  return response;
};

export const putRequest = async (URL, payload) => {
  const response = await Client.put(`${URL}`, payload);
  return response;
};

export const patchRequest = async (URL, payload) => {
  const response = await Client.patch(`${URL}`, payload);
  return response;
};
export const deleteRequest = async URL => {
  const response = await Client.delete(`${URL}`);
  return response;
};
