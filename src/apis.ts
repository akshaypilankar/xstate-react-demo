const USER: Record<string, unknown> = {
  name: "john doe",
  bio: "Developer",
  email: "john.doe@user.com",
  password: "12345" // Because its very secure
};

export const fetchUser = () => {
  return new Promise((resolve, reject) => {
    // api call to Fetch user's profile
    // for this demo here we will return random boolean value
    return Math.random() < 0.5 ? resolve(USER) : reject(false);
  });
};
