import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { MOVIE_DETAIL } from '../queries'
//import queryString from 'query-string';

function Detail({location, match}) {

    const movieId = Number(match.params.id);
    //console.log('movieId222', movieId)
    const { loading, error, data } = useQuery(MOVIE_DETAIL, {
        variables: { movieId }
    });


    // 라우트 파라미터 읽기 : query 를 사용
    //const query = queryString.parse(location.search);
    //console.log(query);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    const { id, title, rating, medium_cover_image } = data.movie;
    return (
        <div>
            <h2>Detail</h2>
            <h2>Param Test: {match.params.id}</h2>
            <div>
                {id} : {title} : {rating} : {medium_cover_image}
            </div>
            

        </div>
    );
  }

export default Detail;