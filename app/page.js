"use client"
import React from 'react';
import Link from 'next/link';


const Page = () => {

  const styles = {
    pageContainer: {
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden',
    },
    backgroundVideo: {
      position: 'fixed',
      top: 0,
      left: 0,
      minWidth: '100%',
      minHeight: '100%',
      width: 'auto',
      height: 'auto',
      zIndex: -1,
    },
    heroSection: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      color: 'white',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heroContent: {
      position: 'relative',
      zIndex: 1,
      maxWidth: '600px', // Set a maximum width
      textAlign: 'center',
      padding: '20px',
      background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      borderRadius: '10px', // Rounded corners
    },
    ctaButton: {
      fontSize: '16px',
      fontWeight: 200,
      letterSpacing: '1px',
      padding: '13px 20px',
      outline: 0,
      border: '1px solid black',
      cursor: 'pointer',
      position: 'relative',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      userSelect: 'none',
      WebkitUserSelect: 'none',
      touchAction: 'manipulation',
    },
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    p: {
      fontSize: '1rem',
      lineHeight: '1.5',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.pageContainer}>

      <section style={styles.heroSection}>
        <video style={styles.backgroundVideo} autoPlay loop muted>
          <source src="/MainPageVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div style={styles.heroContent}>
          <h1 style={styles.h1}>ParcelPulse</h1>
          <p style={styles.p}>Connecting job offers with reliable drivers.</p>
          <Link href="/client"> {/* Use the Link component to navigate */}
            <button style={styles.ctaButton}>Get Started</button> {/* Link wrapped around the button */}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
