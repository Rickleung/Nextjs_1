"use client"
import React, { useState } from 'react';
import styles from '../afterPost.module.css'; // Assuming you have CSS for styling

const AfterPost = () => {
  const [showPanel, setShowPanel] = useState(true); // State to toggle the panel

return (
<div className={styles.container}>
    <img className={styles.image} src="Driver_van_talking.jpg" alt="Image Description" />
    {showPanel && (
    <div className={styles.panel}>
        <h2 className={styles.hh2}>Your order has been received!</h2>
        <p className={styles.pp}>Our driver will contact you shortly. Thanks for using our service</p>
        <button className={styles.button} onClick={() => setShowPanel(false)}>Close</button>
    </div>
    )}
</div>
);
};

export default AfterPost;
