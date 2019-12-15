import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { MOVIE_LIST } from '../queries'

function Home() {

    const { loading, error, data } = useQuery(MOVIE_LIST);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    return data.movies.map(({ id, title, rating, medium_cover_image }) => (
        <div key={id}>
          <p>
            <Link to={`/detail/${id}`}>
            {id}
            <br />
            </Link>
            {title}: {rating} : {medium_cover_image}
          </p>
        </div>
      ));
  }

export default Home;