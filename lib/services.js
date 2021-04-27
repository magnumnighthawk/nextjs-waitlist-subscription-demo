const ENDPOINTS = {
  getUser: "api/user",
  waitingList: "/api/waiting-list"
};

export function getLoggedInUser() {
  return request(ENDPOINTS.getUser);
}

export function addToWaitingList(data) {
  return request(ENDPOINTS.waitingList, {
    method: "POST",
    data
  });
}

export default function request(url, options = {}) {
  let requestOptions = {
    method: options.method || "GET", // *GET, POST, PUT, DELETE, etc.
    headers: { "Content-Type": "application/json" }
  };
  if (options.data) {
    requestOptions = {
      ...requestOptions,
      body: JSON.stringify(options.data)
    };
  }
  return fetch(url, requestOptions).then(async (response) => {
    if (!response.ok) {
      const responseBody = await response.json();
      throw Error(responseBody?.message);
    }
    return response.json().catch(() => {});
  });
}
