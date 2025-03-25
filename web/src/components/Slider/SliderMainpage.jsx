"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { GoDot } from "react-icons/go"
import Img from '@/Img/car.png'
import Img1 from '@/Img/car1.jpg'


import Img2 from '@/Img/car2.jpg'

// Use lowercase for directory names

const images = [Img ,Img1,Img2]

const SliderMainPage = () => {
  const [slider, setSlider] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  // Simplified navigation handlers
  const handleNext = () => setSlider(prev => (prev + 1) % images.length)
  const handlePrev = () => setSlider(prev => (prev - 1 + images.length) % images.length)
  const goToSlide = (index) => setSlider(index)

  // Auto-play feature
  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(handleNext, 5000)
    return () => clearInterval(timer)
  }, [autoPlay, slider])

  // Safety checks
  if (images.length === 0) return <div>No images available</div>

  return (
    <div className="relative w-full max-w-6xl mx-auto group md:p-0 p-2">
      {/* Main Slider */}
      <div className="relative aspect-video overflow-hidden rounded-xl">
       
         {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Car Slide ${index + 1}`}
            fill
            priority={index === 0}
            quality={80}
            sizes="(max-width: 768px) 100vw, 75vw"
            className={`object-cover transition-opacity duration-300 ${
              index === slider ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))} 
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full px-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
        <SliderButton
          direction="prev"
          onClick={handlePrev}
          disabled={slider === 0}
        />
        <SliderButton
          direction="next"
          onClick={handleNext}
          disabled={slider === images.length - 1}
        />
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="p-1"
            aria-label={`Go to slide ${index + 1}`}
          >
            <GoDot
              className={`text-2xl ${
                index === slider ? 'text-blue-500' : 'text-gray-300'
              } transition-colors`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

// Extracted button component
const SliderButton = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
    className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors shadow-lg disabled:opacity-50 disabled:pointer-events-none"
  >
    {direction === 'prev' ? (
      <IoIosArrowBack className="text-2xl text-blue-500" />
    ) : (
      <IoIosArrowForward className="text-2xl text-blue-500" />
    )}
  </button>
)

export default SliderMainPage