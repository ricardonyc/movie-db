import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

function MoviePage(props) {
    const { id } = useParams();
    // const data = useLocation()
    // const { title, overview } = data.state
 

    // console.log(title, overview)



    return (
        <div>
            <h1>MOVIE PAGE {id}</h1>
        </div>
    );
}

export default MoviePage;