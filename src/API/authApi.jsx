import API from "./axios";

// signup
export const signupUser = (data) => {
  return API.post("/api/users/signup", data);
};

// login
export const loginUser = (data) => {
  return API.post("/api/users/login", data);
};
