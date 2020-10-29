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
  const response = await fetch('localhost:3000/api/v1/boardgames')
  if (response.ok) {
    return await response.json()
  } else {
    return response.error
  }
}
export const getAllCardGames = async () => {
  const response = await fetch('localhost:3000/api/v1/cardgames')
  if (response.ok) {
    return await response.json()
  } else {
    return response.error
  }
}
export const getAllMusic = async () => {
  const response = await fetch('localhost:3000/api/v1/music')
  if (response.ok) {
    return await response.json()
  } else {
    return response.error
  }
}
export const getMusicByGenre = async (genre) => {
  const response = await fetch(`localhost:3000/api/v1/music/${genre}`)
  if (response.ok) {
    return await response.json()
  } else {
    return response.error
  }
}
export const getAllPodcasts = async () => {
  const response = await fetch('localhost:3000/api/v1/podcasts')
  if (response.ok) {
    return await response.json()
  } else {
    return response.error
  }
}
export const getPodcastsByGenre = async (genre) => {
  const response = await fetch(`localhost:3000/api/v1/podcasts/${genre}`)
  if (response.ok) {
    return await response.json()
  } else {
    return response.error
  }
}
