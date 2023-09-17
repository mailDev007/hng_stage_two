import Link from "next/link";
import styles from './header.module.css';

const Navigation = () => {

    return (
        <div className={styles.header}>
            <Link href="/">
                <img src="/Logo.svg" />
            </Link>
        </div>
    )
}

export default Navigation;