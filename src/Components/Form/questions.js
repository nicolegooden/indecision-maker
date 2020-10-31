export const questionSet = [
    {
        question: 'Does your group include kids?', 
        choices: ['yes', 'no'],
        activities: ['movies', 'board games', 'music', 'card games', 'podcasts']
    }, 
    {
        question: 'Which activities excite you right now?',
        choices: ['movies', 'board games', 'music', 'card games', 'podcasts'],
        activities: ['movies', 'board games', 'music', 'card games', 'podcasts'],
    },
    {
      question: 'How old is too old?',
      choices: [2010, 2000, 1990, 1980, "No such thing as too old"],
      activities: ['music', 'podcasts', 'movies']
    },
    {
      question: 'Which genre(s)?',
      choices: [
                {musicGenres: ['Pop', 'Rock', 'Country', 'Hard Core', 'Dance', 'Alternative', 'Hip-Hop', 'R&B/Soul', 'Rap']},
                {podcastGenres: ['Comedy', 'Daily News', 'History', 'Documentary', 'Technology', 'True Crime', 'Education', 'Sports', 'Relationships', 'Design', 'Music', 'Science']},
                {movieGenres: ['Adventure', 'Animation', 'Documentary', 'Comedy', 'Family', 'Fantasy', 'Horror', 'Mystery', 'Sci-Fi']}],
     activities:['music','podcasts','movies'],
    },
    {
      question: 'Would you like your movie to be shorter than 2 hours?', 
      choices: ['yes', 'no'], 
      activities: ['movies']
    },
    {
      question: 'How many people are playing?',
      choices: ['1', '2', '3', '4', '5', 'more than 5'],
      activities: ['board games', 'card games']
     }
  ]