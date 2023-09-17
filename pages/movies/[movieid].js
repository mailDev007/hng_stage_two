import React, { useEffect, useState } from 'react';
import styles from './movie.module.css';
import { BASEURL, Setting } from "../api/api";
import { useRouter } from 'next/router';
import Logo from "../../public/darkLogo.svg";
import Poster from "../../public/Poster.png";
import buttonOne from "../../public/btn1.svg";
import buttonTwo from "../../public/btn2.svg";


const SingleMovie = () => {

    const router = useRouter();
    const parsedId = router.query.movieid;
    const [url, setUrl] = useState(parsedId);

    // const moviePath = `${BASEURL}/movie/${parsedId}`;
    // console.log(parsedId, router.query);
    // console.log(parsedId, router.query);
    const myMovie = [];
    const [featuredMovie, featureMovie] = useState([]);
    // console.log(featureMovie);
    useEffect((event) => {
        setUrl(parsedId);
        if(parsedId !== undefined){
            fetch(`${BASEURL}/movies/${parsedId}`, Setting)
            .then(res => res.json())
            .then(res => {
                try{
                    featureMovie(res);
                } catch(e){
                    console.log(e);
                }
                // setGenre(res.genres);
                // console.log(res);
            })
    console.log(parsedId, router.query);

        } else {
            parsedId = router.query.movieid;
            fetch(`${BASEURL}/movies/${parsedId}`, Setting)
            .then(res => res.json())
            .then(res => {
                try{
                    featureMovie(res);
                } catch(e){
                    console.log(e);
                }
                // setGenre(res.genres);
                // console.log(res);
            })
            console.log(parsedId, router.query);

        }
    }, []);

    const redirectUser = () => {
        window.location.href = "/";
    }

    // console.log(myMovie);
    if(featuredMovie){
        return(
            <div className={styles.mainWrapper}>

                <div className={styles.sidebarWrapper} onClick={redirectUser}>
                    <div className={styles.logoArea}>
                        <img src={Logo.src} alt="" />
                    </div>
                </div>
                <div className={styles.contentWrapper}>
                    <div className={styles.imageContainer}>
                        <img src={"https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces"+featuredMovie.poster_path} alt="" className={styles.movieImage} />
                    </div>
                    <div className={styles.titleGenresRating}>
                        <div>
                            <h3>
                                <span data-testid="movie-title">{featuredMovie.original_title}</span> - 
                                <span data-testid="movie-release-date">{featuredMovie.release_date}</span> -
                                <span data-testid="movie-runtime">{featuredMovie.runtime}</span>
                            </h3>
                            <span>8.5 | 350k</span>
                        </div>
                    </div>
                    <div className={styles.otherDetails}>
                        <div className={styles.singleMovieDetail}>
                            <p data-testid="movie-overview">
                                {featuredMovie.overview}
                            </p>
                            <div className={styles.movieCasts}>
                                <div>
                                    Director: <span>Director Name</span>
                                </div>
                                <div>
                                    Writers: <span>Jim O, Jakes Epps Jr, Peter Craig</span>
                                </div>
                                <div>
                                    Stars: <span>Tom Cruise, Jennifer Lopez, Miles Taylor</span>
                                </div>
                            </div>
                        </div>
                        <div className="actionsOtherMovies">
                            <img src={buttonOne.src} alt="" width="80%" /><br/>
                            <img src={buttonTwo.src} alt="" width="80%" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default SingleMovie;
