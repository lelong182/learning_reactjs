import {CALL_API} from "redux-api-middleware";
import * as types from "./constants";

let root = 'http://paap-be.rufnow.com/api/';

export const fetchUsers = (page = 1) => ({
  [CALL_API]: {
    types: [types.FETCH_USERS, types.FETCH_USERS_SUCCESS, types.FETCH_USERS_FAILURE],
    endpoint: root + `users?limit=5&page=${page}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 123
    }
  }
});

export const addUser = (data) => ({
  [CALL_API]: {
    types: [types.ADD_USER, types.ADD_USER_SUCCESS, types.ADD_USER_FAILURE],
    endpoint: root + 'users',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 123
    },
    body: JSON.stringify(data)
  }
});

export const deleteUser = (id) => ({
  [CALL_API]: {
    types: [
      types.DELETE_USER,
      {
        type: types.DELETE_USER_SUCCESS,
        meta: {id: id}
      },
      types.DELETE_USER_FAILURE],
    endpoint: root + `users/${id}`,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 123,
      'X-Auth-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZCI6MzUsImF0IjpudWxsLCJpYXQiOjE0OTQzOTkzMTYsImp0aSI6ImNiNDRiMDE5ZjY5YWQ0Nzg5OGQ4ZDAzOGEyZTBmYTYxIn0.hS0IaVdrlFS9svdjRj_urvYtABE0vqJFKl_guo9lKEV-94S6IQe4lQulus3N2wFtrViZDXr1xYEpEyuqGEeMZQ'
    }
  }
});