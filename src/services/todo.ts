import {axiosInstance} from './axios';

export const getTodoList = () => {
  return axiosInstance.get('/todo/');
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
