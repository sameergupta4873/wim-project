import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Carousel({ setActive, slides, setIsLoaded }: any) {

    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-4 px-1 pl-5 bg-white/20">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" 
                    naturalSlideHeight={100}
                    naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={slides ? slides.length : 7} visibleSlides={4} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 max-md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    {slides && slides.map((slide: any) => {
                                        return (
                                            <Slide onClick={() => {
                                                setActive(slide.id)
                                                setIsLoaded(true)
                                                setTimeout(() => {
                                                    setIsLoaded(false)
                                                }, 5000); // 5-second delay
                                            }}
                                                key={slide.id} index={slide.id}
                                                className="cursor-pointer rounded-xl"
                                            >
                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto hover:scale-[110%] rounded-xl transition-all duration-200">
                                                    <img src={slide.url} alt="black chair and white table" className="object-cover 
                                                rounded-xl shadow-2xl object-center w-full h-[30vh]" />
                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                        <div className="flex h-full items-end pb-6">
                                                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slide>
                                        )
                                    })}

                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider naturalSlideHeight={100} className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={slides ? slides.length : 7} visibleSlides={4} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    {slides && slides.map((slide: any) => {
                                        return (
                                            <Slide key={slide.id} index={slide.id}>
                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                    <img src={slide.url} alt="black chair and white table" className="object-cover h-[25vh] object-center w-full" />
                                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 md:p-2">
                                                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white md:text-lg">Catalog 1</h2>
                                                        <div className="flex h-full items-end pb-6 md:pb-8">
                                                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white md:text-sm md:leading-0">Minimal Interior</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slide>
                                        )
                                    })}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider naturalSlideHeight={100} className="block md:hidden max-sm:absolute max-sm:bottom-[10vw] max-sm:px-5" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={slides? slides.length : 7} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    {slides && slides.map((slide: any) => {
                                        return(
                                            <Slide key={slide.id} index={slide.id}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={slide.url} alt="black chair and white table" className="object-cover object-center w-full max-sm:h-[25vh]" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        )
                                    })}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}
