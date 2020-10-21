const apiCalls = {
  getAllReservations() {
    return fetch(`http://localhost:3001/api/v1/reservations`)
      .then(response => response.json())
      .then(data => data)
      .catch(error => error)
  },
  postReservation(resInfo) {
    return fetch(`http://localhost:3001/api/v1/reservations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(resInfo)
    })
    .then(response => response.json())
    .then(data => data)
    .catch(err => err.message)
  }
}
export default apiCalls;
