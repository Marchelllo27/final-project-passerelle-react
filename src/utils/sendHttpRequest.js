 const sendHttpRequest = async (url, method = "GET", body = null, headers = {}) => {
    const response = await fetch(url, {
    method,
    body,
    headers
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message);
  }

  return responseData;
}


export default sendHttpRequest;