const buildHeaders = (headers = {}) => Object.assign(
  {},
  { 'Authorization': `Bearer ${localStorage.getItem('jwt')}` },
  headers,
);

export const post = (slug, data) => {
  const headers = buildHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  });

  return fetch(
    `${process.env.SERVER_URL}/${slug}`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    },
  ).then(res => res.json());
};

export const get = slug => {
  const headers = buildHeaders();

  return fetch(
    `${process.env.SERVER_URL}/${slug}`,
    {
      method: 'GET',
      headers,
    },
  ).then(res => res.json());
};
