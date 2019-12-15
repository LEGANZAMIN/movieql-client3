import { gql } from "apollo-boost";

export const MOVIE_LIST = gql`
 {
  movies(limit:50,minimum_rating:6.0) {
    id
    title
    rating
    medium_cover_image
  }
}
`

export const MOVIE_DETAIL = gql`
query getMovieDetails($movieId: Int!) {
  movie(id: $movieId) {    
    id
    title
    rating
    medium_cover_image
  }
}
`