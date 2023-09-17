import React, { Fragment, useCallback, useRef, useState } from "react";
import { NOWPLAYING, Setting } from "../../api/api";
import styles from './banner.module.css';
import Logo from "../../../public/tv.png";
import Poster from "../../../public/Poster.svg";
import SiteName from "../../../public/MovieBox.png";
import SearchIcon from "../../../public/Icon.svg";
import MenuIcon from "../../../public/Menu.svg";
import { useRouter } from "next/router";
import Image from "next/image";

const Banner = () => {

    const myMovie = [];
    const [featuredMovie, featureMovie] = useState([]);

    useEffect((event) => {
        fetch(NOWPLAYING, Setting)
        .then(res => res.json())
        .then(res => {
            // setGenre(res.genres);
            featureMovie(res.results[0]);
        })
        
    }, []);

    const movieSearched = useRef(null);
    const [query, showResults] = useState([]);
    const [active, triggerListener] = useState(false);
    const [Search, setResults] = useState([]);
    const router = useRouter();

    const searchParam = (query) => `https://www.omdbapi.com/?s=${query}&apikey=3f57fd83`;

    const getQueryParam = useCallback((event) => {
        const query = event.target.value;
        showResults(query);
    })

    const onChange = useCallback((event) => {
        const query = document.querySelector('input').value;
        // console.log(query)

        if(query.length > 0){
            fetch(searchParam(query))
            .then(res => res.json())
            .then(res => {

                if(res.results.length > 0){
                    setResults(res.results);
                    console.log(res, res.Response, Search);
                }else{
                    setResults([])
                }
                
            })
        }
    }, []);

    const onFocus = useCallback(() => {
        triggerListener(true)
        window.addEventListener('button', onClick);
    }, []);

    const onClick = useCallback(() => {
        if(movieSearched.current && !movieSearched.current.contains(event.target)){
            triggerListener(false);
            window.removeEventListener('button', onClick);
        }
    }, []);

    return (
        <div className={styles.bannerSection}>
            <div className={styles.navbar}>    
                {/* <Image src="/bg.png" /> */}
                <a href="/" className={styles.siteLogo}>
                    <div>
                        <Image src={Logo.src} alt="alt" className={styles.logoImage}/>
                        <Image src={SiteName.src} alt="alt" className={styles.logoText}/>
                    </div>
                </a>
                <div className={styles.searchBox}>
                    <input type="text" className={styles.searchInput} value={query} onChange={getQueryParam} onFocus={onFocus} placeholder="What do you want to watch?"/>
                    <button>
                        <Image src={SearchIcon.src} className={styles.searchIcon} onClick={onChange}/>
                    </button>
                </div>
                <h3 className={styles.actionBtn}>
                    <span>Sign in</span> 
                    <Image src={MenuIcon.src} alt="" />
                </h3>
                
            </div>
            <div className={styles.bannerAdContainer}>
                <div className={styles.adTextContent}>
                    <Image src={Poster.src} alt="alt" className={styles.logoImage} width="450px" height="300px" />
                </div>
            </div>
        </div>
    )
}

export default Banner;