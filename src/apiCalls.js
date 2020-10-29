export const getAllMovies = async () => {
  try {
    const response = await fetch('localhost:3000/api/v1/movies')
    return await response.json()
  }
  catch (e) {
    return e
  }
}
