export const fetchApi = <T>(
  url: string,
  method: "GET" | "POST",
  body?: Record<string, string>
) => {
  return fetch(url, {
    method,
    body: method === "POST" ? JSON.stringify(body) : null,
  }).then((v) => v.json() as T);
};
