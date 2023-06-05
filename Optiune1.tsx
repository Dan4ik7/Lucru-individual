import React, { useState } from 'react';

const images = [
    'https://picsum.photos/id/22/4434/3729',
    'https://picsum.photos/id/28/4928/3264',
    'https://picsum.photos/id/27/3264/1836',
    'https://picsum.photos/id/19/2500/1667',
];
export  function Optiune1() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        } else {
            setCurrentImageIndex(0);
        }
    };

    const goToPreviousImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        } else {
            setCurrentImageIndex(images.length - 1);
        }
    };
    return (
        <div className="container2">
            <button className="button" onClick={goToPreviousImage}>&#8592;</button>
            <img src={images[currentImageIndex]} alt="Slider" width={350}/>
            <button className="button" onClick={goToNextImage}>&rarr;</button>
        </div>
    );
}


