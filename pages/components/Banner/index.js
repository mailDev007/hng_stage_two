import React, { useState } from "react";
import { NOWPLAYING, Setting } from "../../api/api";
import styles from './banner.module.css';
import Logo from "../../../public/tv.png";
import Poster from "../../../public/Poster.svg";
import SiteName from "../../../public/MovieBox.png";
import SearchIcon from "../../../public/Icon.svg";
import MenuIcon from "../../../public/Menu.svg";
import Image from "next/image";

const Banner = () => {

    // const myMovie = [];
    const [featuredMovie, featureMovie] = useState([]);

    useEffect((event) => {
        fetch(NOWPLAYING, Setting)
        .then(res => res.json())
        .then(res => {
            // setGenre(res.genres);
            featureMovie(res.results[0]);
        })
        
    }, []);

    return (
        <div className={styles.bannerSection}>
            <div className={styles.navbar}>    
                <a href="/" className={styles.siteLogo}>
                    <div>
                        <Image src={Logo.src} alt="alt" className={styles.logoImage}/>
                        <Image src={SiteName.src} alt="alt" className={styles.logoText}/>
                    </div>
                </a>
                <div className={styles.searchBox}>
                    <input type="text" className={styles.searchInput} placeholder="What do you want to watch?"/>
                    <button>
                        <Image src={SearchIcon.src} className={styles.searchIcon}/>
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