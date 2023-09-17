import Link from "next/link";
import styles from './header.module.css';
import Image from "next/image";

const Navigation = () => {

    return (
        <div className={styles.header}>
            <Link href="/">
                <Image src="/Logo.svg" />
            </Link>
        </div>
    )
}

export default Navigation;