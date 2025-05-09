import { useState, useEffect } from 'react';

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    const intervalId = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images]);

  if (!images.length) {
    return <div className="text-center text-gray-500">Loading slider...</div>;
  }

  return (
    <div className="w-full overflow-hidden rounded-xl shadow-lg">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-[300px] object-cover transition-all duration-700"
      />
    </div>
  );
}

export default ImageSlider;
