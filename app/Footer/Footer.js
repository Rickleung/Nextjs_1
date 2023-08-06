import Link from 'next/link';
import styles from '../footer.module.css';  // import the CSS module for Footer

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href="/about">
                About
            </Link>
            <Link href="/contact">
                Contact
            </Link>
            <Link href="/privacy">
                Privacy Policy
            </Link>
            <p>&copy; {new Date().getFullYear()} ParcelPulse by Makerface</p>
        </footer>
    );
};

export default Footer;
