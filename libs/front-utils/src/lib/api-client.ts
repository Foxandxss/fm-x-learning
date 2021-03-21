interface ClientOptions {
  data?: any;
  headers?: any;
  customConfig?: any;
}

async function client(
  endpoint,
  { data, headers: customHeaders, ...customConfig }: ClientOptions = {}
) {
  const config = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-Type': data ? 'application/json' : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  return window.fetch(`/api/fmx/${endpoint}`, config).then(async response => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export { client };
