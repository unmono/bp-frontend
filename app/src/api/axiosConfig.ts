import axios, { AxiosResponse } from 'axios';
import {json, useNavigate} from 'react-router-dom';

export const api = axios.create({
  baseURL:'http://localhost:8000/api/v1',
});

export const bpGet = async (
  endpoint: string
) => {
  let resp: AxiosResponse<any, any> | null = null;
  try {
    resp = await api.get(
      endpoint,
      { withCredentials: true }
    );
  } catch(error: any) {
    if(error.response) {
      throw json({
        code: error.response.status,
        message: error.response.data.detail,
      });
    } else {
      throw json({
        code: 503,
        message: 'Server doesn\'t respond'
      })
    }
  }

  return resp?.data;
}

export const searchPost = async (
  data: { search_query: string },
  endpoint: string = '/products/search/'
) => {
  let resp: AxiosResponse<any, any> | null = null;
  try {
    resp = await api.post(
      endpoint,
      data,
      { withCredentials: true }
    );
  } catch(error: any) {
    throw error;
  }

  return resp?.data;
}

export const login = async (username: string, password: string) => {
  const credentials = {
    username: username,
    password: password,
  }
  let resp: AxiosResponse<any, any> | null = null;
  try {
    resp = await api.post(
      '/login/',
      credentials,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
  } catch(error: any) {

  }

  return resp?.data.access_token
}