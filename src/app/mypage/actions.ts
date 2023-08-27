export const signout = async () => {
  const fetchOption: RequestInit = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  };
  const response = await fetch("/api/auth/signout", fetchOption);
  const { data } = await response.json();
  return data;
};
