export const getAllMovies = async () => {
  const response = await fetch('localhost:3000/api/v1/movies')
  if (response.ok) {
    return await response.json()
  } else {
    return reponse.error
  }
}
