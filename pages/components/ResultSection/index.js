import React, { Fragment, useCallback, useRef, useState } from "react";
import styles from './listing.module.css';
import { useRouter } from "next/router";
// import ReactPaginate from 'react-paginate';
import Icon from "../../../public/Seemore.svg";
import IMDB from "../../../public/imdb.svg";
// import { BASEURL, GENREURL, Setting } from "../../../api/api";

const MovieSection = ({ dataPaginated, movieGenre }) => {
    console.log(dataPaginated);
    const movieSearched = useRef(null);
    const [query, showResults] = useState([]);
    const [active, triggerListener] = useState(false);
    const [Search, setResults] = useState([]);
    const router = useRouter();


    const fetchGenre = (genreid) => {
        // console.log(typeof genreid);

        if (typeof genreid == "object") {
            let genreName = [];
            genreid.map(gid => {
                genreName.push(movieGenre.find(genre => genre.id == gid).name);
                // console.log(gid, genre);
            });
            return genreName.join(", ");
        }
    }


    // const searchParam = (query) => `https://www.omdbapi.com/?s=${query}&apikey=3f57fd83`;

    // const onChange = useCallback((event) => {
    //     const query = event.target.value;
    //     showResults(query);

    //     if(query.length > 2){
    //         fetch(searchParam(query))
    //         .then(res => res.json())
    //         .then(res => {

    //             if(res.Response == 'True'){
    //                 setResults(res.Search);
    //             }else{
    //                 setResults([])
    //             }
    //             console.log(res.Search);
    //         })
    //     }
    // }, []);

    // const onFocus = useCallback(() => {
    //     triggerListener(true)
    //     window.addEventListener('input', onInput);
    // }, []);

    // const onInput = useCallback(() => {
    //     if(movieSearched.current && !movieSearched.current.contains(event.target)){
    //         triggerListener(false);
    //         window.removeEventListener('input', onInput);
    //     }
    // }, []);

    const redirect = (movieid) => {
        router.push(`/movies/${movieid}`);
    }

    const showAllMovies = dataPaginated.slice(8)
        .map((row) => {
            return(
                <div key={row.id} onClick={() => redirect(row.id)} className={styles.movieThumbnail} data-testid="movie-card">
                    <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face"+row.poster_path} alt="" data-testid="movie-poster"/>
                    <div className={styles.movieDetail}>
                        <p title={row.title} className={styles.halfbMargin} data-testid="movie-title">
                            {row.title}
                        </p>
                        <div className={styles.rating}>
                            <div className={styles.imdbRating}>
                                <img src={IMDB.src} alt="" />
                                <span className={styles.movieRate}>{row.vote_average*10} / 100</span>
                            </div>
                            <span className={styles.releaseYear} data-testid="movie-release-date">{row.release_date.split("-")[0]}</span>
                        </div>
                        <div className={styles.moviegenre}>
                            {fetchGenre(row.genre_ids)}
                        </div>
                    </div>
                </div>
            );
        });
        
        return(
            <div className={styles.horizontalAlignment}>
                <div className={styles.flexHeader}>
                    <h1 styles={styles.sectionTitle}>Featured Movie</h1>
                    <img src={Icon.src} alt=""/>
                </div>
                <div className={styles.moviesHolder}>
                    {showAllMovies}
                </div>
            </div>
        )
}

export default MovieSection;
