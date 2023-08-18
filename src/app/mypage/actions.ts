export const signout = async (): Promise<boolean> => {
  const fetchOption: RequestInit = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch("/api/auth/signout", fetchOption);
  const data = await response.json();
  return data.success;
};
