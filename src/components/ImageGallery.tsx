import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full">
      <div className="aspect-[4/5] overflow-hidden rounded-lg">
        <ImageWithFallback
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>
      
      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}