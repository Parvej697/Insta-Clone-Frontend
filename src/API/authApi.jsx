import API from "./axios";


export const signupUser = (data) => {
  return API.post("/api/users/signup", data);
};

export const loginUser = (data) => {
  return API.post("/api/users/login", data);
};
