"use client"
import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from '../client.module.css';
import qs from 'qs';
import * as THREE from 'three';
import { useRouter } from 'next/navigation';
import { io } from 'socket.io-client';



const Client = () => {
const { register, handleSubmit, formState: { errors } } = useForm();
const [isSubmitting, setIsSubmitting] = useState(false);
const containerRef = useRef();
const router = useRouter();
const socket = io('https://rickleung.site');


useEffect(() => {
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
containerRef.current.appendChild(renderer.domElement);

// Geometry for the particles
const geometry = new THREE.BufferGeometry();
const vertices = [];

socket.on("connect", () => {
    console.log("Successfully Connected" + socket.id); // x8WIv7-mJelg7on_ALbx
});


    // Create vertices in a spherical pattern
    for (let i = 0; i < 1000; i++) {
      const phi = Math.acos(-1 + (2 * i) / 1000);
      const theta = Math.sqrt(1000 * Math.PI) * phi;
      const x = 10 * Math.cos(theta) * Math.sin(phi);
      const y = 10 * Math.sin(theta) * Math.sin(phi);
    const z = 10 * Math.cos(phi);
    vertices.push(x, y, z);
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

// Material for the particles - yellow color with 60% alpha
const material = new THREE.PointsMaterial({ color: 0xffff00, size: 0.1, transparent: true, opacity: 0.6 });

// Create particle system
const particles = new THREE.Points(geometry, material);
scene.add(particles);

camera.position.z = 20;

const animate = () => {
    requestAnimationFrame(animate);

    // Rotate the particles
    particles.rotation.x += 0.001;
    particles.rotation.y += 0.001;

    renderer.render(scene, camera);
    };
animate();

return () => {
if (containerRef.current && renderer.domElement) {
    containerRef.current.removeChild(renderer.domElement);
}
};
}, []);

const animate = () => {
    requestAnimationFrame(animate);

// Rotate the particles
particles.rotation.x += 0.001;
particles.rotation.y += 0.001;

renderer.render(scene, camera);
};

const onSubmit = data => {
// Set isSubmitting to true when the form is being submitted
setIsSubmitting(true);

// Convert the data to x-www-form-urlencoded format
const requestData = qs.stringify(data);

// send a POST request to your PHP API
axios.post('https://makerface.space/DriverApp/ClientTest2.php', requestData, {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
})
.then(response => {
    // handle success
    console.log(response);
    
    // Emit the phone number through the socket only if the request was successful
    socket.emit('new message', data.phone);

    router.push('/AfterPost'); // Redirect to AfterPost.js
})
.catch(error => {
    // handle error
    console.log(error);
})
.finally(() => {
    // Set isSubmitting back to false after the submission is complete
    setIsSubmitting(false);
});
}


return (
    <div className={styles.container} style={{ position: 'relative', overflow: 'hidden' }}>
    <div ref={containerRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}></div>
    <div className={styles.formContainer} style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)',borderRadius: '15px'  }}> {/* Added green background */}
    <h1 className={styles.myHeading}>Client Information</h1>
    <form className={styles.form1} onSubmit={handleSubmit(onSubmit)}>
    <label className={styles.label1}>
        Name:
        <input className={styles.input1} {...register('clientname', { required: true })} />
        {errors.clientname && <span>This field is required</span>}
    </label>
    <label className={styles.label1}>
        Phone:
        <input className={styles.input1} {...register('phone', { required: true })} />
        {errors.phone && <span>This field is required</span>}
    </label>
    <label className={styles.label1}>
        Email:
        <input className={styles.input1} {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}
    </label>
    <label className={styles.label1}>
        所在地:
    <select className={styles.input1} {...register('fromLocation', { required: true })}>
        <option value="中西區">中西區</option>
        <option value="東區">東區</option>
        <option value="南區">南區</option>
        <option value="灣仔區">灣仔區</option>
        <option value="深水埗區">深水埗區</option>
        <option value="九龍城區">九龍城區</option>
        <option value="觀塘區">觀塘區</option>
        <option value="黃大仙區">黃大仙區</option>
        <option value="油尖旺區">油尖旺區</option>
        <option value="離島區">離島區</option>
        <option value="葵青區">葵青區</option>
        <option value="北區">北區</option>
        <option value="西貢區">西貢區</option>
        <option value="沙田區">沙田區</option>
        <option value="大埔區">大埔區</option>
        <option value="荃灣區">荃灣區</option>
        <option value="屯門區">屯門區</option>
        <option value="元朗區">元朗區</option>
    </select>
    {errors.fromLocation && <span>This field is required</span>}
    </label>
    <label className={styles.label1}>
    目的地:
    <select className={styles.input1} {...register('toLocation', { required: true })}>
        <option value="中西區">中西區</option>
        <option value="東區">東區</option>
        <option value="南區">南區</option>
        <option value="灣仔區">灣仔區</option>
        <option value="深水埗區">深水埗區</option>
        <option value="九龍城區">九龍城區</option>
        <option value="觀塘區">觀塘區</option>
        <option value="黃大仙區">黃大仙區</option>
        <option value="油尖旺區">油尖旺區</option>
        <option value="離島區">離島區</option>
        <option value="葵青區">葵青區</option>
        <option value="北區">北區</option>
        <option value="西貢區">西貢區</option>
        <option value="沙田區">沙田區</option>
        <option value="大埔區">大埔區</option>
        <option value="荃灣區">荃灣區</option>
        <option value="屯門區">屯門區</option>
        <option value="元朗區">元朗區</option>
    </select>
    {errors.fromLocation && <span>This field is required</span>}
    </label>
    <label className={styles.label1}>
        Content:
        <textarea className={styles.textarea1} {...register('content', { required: true })} />
        {errors.content && <span>This field is required</span>}
    </label>
    <input className={styles.input2} type="submit" disabled={isSubmitting} />
    </form>
    </div>
    </div>
);
};


export default Client;
