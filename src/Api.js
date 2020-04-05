const API_URL =
  process.env.REACT_APP_API_ROOT_URL || `http://localhost:5000/api`;

const fetchApi = (url, { method, body }) => {
  url = API_URL + url;
  return fetch(url, {
    method,
    body: body ? JSON.stringify(body) : null,
    credentials: "include",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  })
    .then((res) =>
      res
        .json()
        .catch(() =>
          Promise.reject(new Error("No connection; check your internet!"))
        )
        .then((json) => (res.ok ? json : Promise.reject(json)))
    )
    .then(async (res) => {
      console.log("res", res);
      return {
        data: {
          email: res.email,
          userId: res.userId,
        },
      };
    })
    .catch((err) => {
      if (err.errors && err.errors.length) {
        return Promise.reject(err.errors[0]);
      } else {
        return Promise.reject({
          status: -1,
          code: "ERROR_CODE_NETWORK_ERROR",
          title: err.message || "Network Error",
          detail: err.message || "Network Error",
          source: {
            pointer: url,
          },
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

export const getMe = () => fetchApi("/users/me", { method: "GET" });
