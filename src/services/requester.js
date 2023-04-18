const request = async (method, token, url, data) => {
  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers = {
      "content-type": "application/json",
    };
    options.body = JSON.stringify(data);
  }

  if (token) {
    options.headers = {
      ...options.headers,
      "X-Authorization": token,
    };
  }

  try {
    const response = await fetch(url, options);

    if (response.status === 403) {
      return new Error("Wrong email or password!");
    }
    if (response.status === 409) {
      return new Error("Email address already in use");
    }

    if (response.status === 204) {
      return {};
    }

    const result = await response.json();

    if (!response.ok) {
      throw result;
    }
    return result;
  } catch (err) {
    return new Error(err.message);
  }
};

export const requestFactory = (token) => {
  return {
    get: request.bind(null, "GET", token),
    post: request.bind(null, "POST", token),
    put: request.bind(null, "PUT", token),
    patch: request.bind(null, "PATCH", token),
    delete: request.bind(null, "DELETE", token),
  };
};
