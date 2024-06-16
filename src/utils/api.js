const baseUrl = "http://localhost:3001/se_project_react";
const headers = { "Content-Type": "application/json" };
function _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return fetch(`http://localhost:3001/se_project_react/items`).then(
    _checkResponse
  );
}

function addItems(name, imageUrl, weather) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name: name,
      iamgeUrl: imageUrl,
      weather: weather,
    }),
  }).then(_checkResponse);
}

function deleteItems(id) {
  return fetch(`${baseUrl}/items/${id}`, { method: "DELETE", headers: headers })
    .then(_checkResponse)
    .then(() => console.log("Card has been deleted"));
}

export { getItems, addItems, deleteItems };
