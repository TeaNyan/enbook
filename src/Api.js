const API_URL = process.env.REACT_APP_API_URL + "/api";

const fetchApi = (url, { method, body }) => {
  console.log(body);
  let parsedBody;
  let parsedHeaders;

  if (body instanceof FormData) {
    parsedBody = body;
    parsedHeaders = {};
  } else {
    parsedBody = JSON.stringify(body);
    parsedHeaders = {
      "content-type": "application/json",
      accept: "application/json",
    };
  }

  url = API_URL + url;
  return fetch(url, {
    method,
    body: parsedBody,
    credentials: "include",
    headers: parsedHeaders,
  })
    .then((res) => res.json())
    .then((res) => {
      return {
        data: res,
      };
    })
    .catch((err) => {
      if (err.errors && err.errors.length) {
        return Promise.reject(err.errors[0]);
      } else {
        return Promise.reject({
          status: -1,
          title: err.message || "Network Error",
        });
      }
    });
};

export const login = (email, password) =>
  fetchApi("/users/login", {
    method: "POST",
    body: {
      email,
      password,
    },
  });

export const signup = (name, email, password) =>
  fetchApi("/users/signup", {
    method: "POST",
    body: {
      email,
      password,
      name,
    },
  });

export const logout = () => {
  fetchApi("/users/logout", {
    method: "POST",
  });
};

export const addPlace = (body) =>
  fetchApi("/places/", {
    method: "POST",
    body,
  });

export const getPlacesByUserId = (userId) =>
  fetchApi(`/places/user/${userId}`, {
    method: "GET",
  });

export const getMe = () => fetchApi("/users/me", { method: "GET" });
