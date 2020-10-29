export const getAllMovies = async () => {
  const response = await fetch('localhost:3000/api/v1/movies')
  if (response.ok) {
    return await response.json()
  } else {
    return reponse.error
  }
}
export const getMoviesByGenre = async (genre) => {
  const response = await fetch(`localhost:3000/api/v1/movies/${genre}`)
  if (response.ok) {
    return await response.json()
  } else {
    return response.error
  }
}
export const getAllBoardGames = async () => {
  const response = await fetch('localhost:3000/api/v1/movies/boardgames')
  if (response.ok) {
    return await response.json()
  } else {
    return response.error
  }
}
