import React, { useEffect, useState } from 'react';
import { BASEURL, GENREURL, Setting } from "./api/api";
import Banner from "./components/Banner";
import MovieSection from "./components/ResultSection";
import Footer from './components/Footer';

const OverviewPage = () => {
    BASEURL
    const [alltopmovies, setTopMovies] = useState([]);
    const [movieGenres, setGenre] = useState([]);
    // const router = useRouter();

    useEffect((event) => {
        fetch(GENREURL, Setting)
        .then(res => res.json())
        .then(res => {
            setGenre(res.genres);
        })
        
    }, []);
    useEffect((event) => {

        fetch(`${BASEURL}/movie/top_rated`, Setting)
        .then(res => res.json())
        .then(res => {
            // console.log(res);
            var by_vote_average = res.results.slice(0);
            by_vote_average.sort(function(a,b) {
                return a.vote_average - b.vote_average;
            });
            setTopMovies(by_vote_average.reverse());
        })
    }, []);


    
    return (
        <div>
            {/* <Navigation /> */}
            <Banner />
            <MovieSection dataPaginated={alltopmovies} movieGenre={movieGenres} />
            <Footer />
        </div>
    );
}

export default OverviewPage;