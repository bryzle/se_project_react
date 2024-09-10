const baseUrl = "http://localhost:3001";
const headers = { "Content-Type": "application/json" };

function _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

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
  return (
    fetch(`${baseUrl}/signin`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ email, password }),
    } )
      .then(_checkResponse)
  );
};

/* export const checkToken = (token) => {
  return fetchWithAuth(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`, // Include token in Authorization header
    },
  }).then(_checkResponse);
};
 */
/* export const fetchWithAuth = (url, options = {}, token) => {
  return fetch(url, {
    ...options,
    headers: _getHeaders(token),
  }).then(_checkResponse);
}; */
