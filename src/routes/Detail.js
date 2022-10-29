import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();
    const getMovies = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movie);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : 
            <div>
                <h1>{movie.title}</h1>
                <img src={movie.medium_cover_image}/>
            </div>}
        </div>
    
    )
}

export default Detail;