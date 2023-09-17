import React, { useEffect, useState } from 'react';
// import styles from './movie.module.css';
import { BASEURL, NOWPLAYING, Setting } from "../api/api";

const NowPlaying = () => {
    const myMovie = [];
    const [featuredMovie, featureMovie] = useState([]);
    console.log(featureMovie);

    useEffect((event) => {
        fetch(NOWPLAYING, Setting)
        .then(res => res.json())
        .then(res => {
            // setGenre(res.genres);
            featureMovie(res.results[0]);
            console.log(res.results);
        })
        
    }, []);

    // console.log(myMovie);
    if(myMovie.length > 0){
        return(
            <div>
                
                {/* <button onClick={() => history.go(-1)} className="default-button cursor-pointer horizontal-alignment">Go Back</button>
                <div className={styles.contentCenter}>
                    <img src={myMovie[0].Poster}/>
                    <div className={styles.movieDetail}>
                        <div>
                            Title: <h4>{myMovie[0].Title}</h4>
                        </div>
                        <div>
                            Year: <h4>{myMovie[0].Year}</h4>
                        </div>
                        <div>
                            Actors: <h4>{myMovie[0].Actors}</h4>
                        </div>
                        <div>
                            Genre: <h4>{myMovie[0].Genre}</h4>
                        </div>
                        <div>
                            Language: <h4>{myMovie[0].Language}</h4>
                        </div>
                        <div>
                            Released: <h4>{myMovie[0].Released}</h4>
                        </div>
                        <div>
                            Plot: <h4>{myMovie[0].Plot}</h4>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }

}

export default NowPlaying;
