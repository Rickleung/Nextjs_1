import Link from 'next/link';
import styles from '../navbar.module.css';  // import the CSS module for Navbar

const Navbar = () => {
return (
<nav className={styles.navbar}>
    <Link href="/">Home</Link>
    <Link href="/client">Client Input</Link>
    {/* Add more links as needed */}
</nav>
);
};

export default Navbar;
