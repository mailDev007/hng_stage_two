import React from 'react';
import styles from './footer.module.css';
import Fb from "../../../public/facebook.svg";
import Twit from "../../../public/twitter.svg";
import Insta from "../../../public/instagram.svg";
import Tube from "../../../public/youtube.svg";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.socials}>
                    <img src={Fb.src} alt="" />
                    <img src={Twit.src} alt="" />
                    <img src={Insta.src} alt="" />
                    <img src={Tube.src} alt="" />
                </div>
                <div className={styles.usefulLinks}>
                    <a href="javascript:void(0)">Conditions of use</a>
                    <a href="javascript:void(0)">Privacy policy</a>
                    <a href="javascript:void(0)">Press Room</a>
                </div>
                <div className={styles.copywrite}>
                    &copy;2023 MovieBox by Chima Kalu
                </div>
            </div>
        </div>
    )
}

export default Footer;