import { baseUrl } from "../utils/constants";

import { _checkResponse } from "./api";

const headers = { "Content-Type": "application/json" };

function _getHeaders(token) {
  return {
    ...headers,
    ...(token && { Authorization: `Bearer ${token}` }), // Add the Authorization header if token is provided
  };
}

export const signUp = (name, avatar, email, password) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(_checkResponse);
};

export const signIn = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password }),
  }).then(_checkResponse);
};

export const editProfile = (name, avatar) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: _getHeaders(token),
    body: JSON.stringify({ name, avatar }),
  }).then(_checkResponse);
};

export const checkToken = () => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then(_checkResponse);
};

/*  export const fetchWithAuth = (url, options = {}, token) => {
  return fetch(url, {
    ...options,
    headers: _getHeaders(token),
  }).then(_checkResponse);
};  */
