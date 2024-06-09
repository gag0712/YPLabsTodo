import {AxiosResponse} from 'axios';
import {axiosInstance} from './axios';
import {TTodo} from '../constants/types';

const getTodoList = async () => {
  const response: AxiosResponse<TTodo[]> = await axiosInstance.get('/todo/');
  return response.data;
};

const postTodo = (content: string) => {
  return axiosInstance.post('/todo/', {content: content});
};

const deleteTodo = (id: number) => {
  return axiosInstance.delete(`/todo/${id}/`);
};

const updateTodo = (id: number, content: string) => {
  return axiosInstance.patch(`/todo/${id}/`, {content: content});
};

export const API = {
  getTodoList,
  postTodo,
  deleteTodo,
  updateTodo,
};
