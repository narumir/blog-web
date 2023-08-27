export const createPost = async (title?: string, content?: any) => {
  const fetchOption: RequestInit = {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`/api/post`, fetchOption);
  return response.json();
};
