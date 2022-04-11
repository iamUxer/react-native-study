import { AxiosError } from 'axios';

export const axiosError = function (error: AxiosError) {
  console.error(error.response || error.message || error);
};
