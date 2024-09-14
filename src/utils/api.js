const baseUrl = "http://localhost:3001";
const headers = { "Content-Type": "application/json" };
function _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(_checkResponse);
}

function addItems(name, imageUrl, weather) {
  const token = localStorage.getItem("jwt");
  console.log(token);
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Authorization": `Bearer ${token}`, ...headers },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(_checkResponse);
}

function deleteItems(id) {
  return fetch(`${baseUrl}/items/${id}`, { method: "DELETE", headers: headers })
    .then(_checkResponse)
    .then(() => console.log("Card has been deleted"));
}

export { getItems, addItems, deleteItems, _checkResponse };
