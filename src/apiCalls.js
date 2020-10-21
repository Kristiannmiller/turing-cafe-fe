const apiCalls = {
  getAllReservations() {
    return fetch(`http://localhost:3001/api/v1/reservations`)
      .then(response => response.json())
      .then(data => data)
      .catch(error => error)
  }
}
export default apiCalls;
