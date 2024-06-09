import {AxiosResponse} from 'axios';
import {axiosInstance} from './axios';
import {TTodo} from '../constants/types';

export const getTodoList = async () => {
  const response: AxiosResponse<TTodo[]> = await axiosInstance.get('/todo/');
  return response.data;
};

export const postTodo = (content: string) => {
  return axiosInstance.post('/todo/', {content: content});
};

export const deleteTodo = (id: number) => {
  return axiosInstance.delete(`/todo/${id}/`);
};

export const updateTodo = (id: number, content: string) => {
  return axiosInstance.patch(`/todo/${id}/`, {content: content});
};
