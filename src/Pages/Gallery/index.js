import React, { useEffect, useState } from 'react'
import FsLightbox from "fslightbox-react"
import hiasan2 from '../../Img/hiasan-2.png'
import photos1 from '../../Img/compress/gallery-1.webp'
import photos2 from '../../Img/compress/gallery-2.webp'
import photos3 from '../../Img/compress/gallery-3.webp'
import photos4 from '../../Img/compress/gallery-4.webp'
import photos5 from '../../Img/compress/gallery-5.webp'
import photos6 from '../../Img/compress/gallery-6.webp'
import photos7 from '../../Img/compress/gallery-7.webp'
import photos8 from '../../Img/compress/gallery-8.webp'
import photos9 from '../../Img/compress/gallery-9.webp'
import photos10 from '../../Img/compress/gallery-10.webp'
import photos11 from '../../Img/compress/gallery-11.webp'
import photos12 from '../../Img/compress/gallery-12.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Gallery() {
    const [toggler, setToggler] = useState(false);
    const [gallerySlide, setGallerySlide] = useState(1);
    const bukaGallery = (param) => {
        setGallerySlide(param)
        setToggler(!toggler)
    }

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <FsLightbox
                toggler={toggler}
                sources={[
                    photos1,
                    photos2
                ]}
                slide={gallerySlide}
            />
            <div className='my-16 bg-[#531212]'>
                <div className='p-8'>
                    <div className='flex justify-center mb-4'>
                    </div>
                    <h1 data-aos="fade-up" className='text-center text-white custom-font-2 md:text-6xl text-4xl mb-8'>Moment Bahagia</h1>
                    <div id="gallery" className='flex justify-center lg:mx-72'>
                        <div className='grid grid-cols-2 gap-4 mb-16'>
                            <div className='w-auto hover:scale-105 hover:cursor-pointer duration-300' onClick={() => bukaGallery(1)}>
                                <img data-aos="fade-up" src={photos1} loading="lazy" alt="gallery" className='rounded-xl' />
                            </div>
                            <div className='w-auto hover:scale-105 hover:cursor-pointer duration-300' onClick={() => bukaGallery(1)}>
                                <img data-aos="fade-up" src={photos2} loading="lazy" alt="gallery" className='rounded-xl' />
                            </div>
                            <div className='w-auto hover:scale-105 hover:cursor-pointer duration-300' onClick={() => bukaGallery(1)}>
                                <img data-aos="fade-up" src={photos4} loading="lazy" alt="gallery" className='rounded-xl' />
                            </div>
                            <div className='w-auto hover:scale-105 hover:cursor-pointer duration-300' onClick={() => bukaGallery(1)}>
                                <img data-aos="fade-up" src={photos5} loading="lazy" alt="gallery" className='rounded-xl' />
                            </div>
                            <div className='w-auto col-span-2 hover:scale-105 hover:cursor-pointer duration-300' onClick={() => bukaGallery(2)}>
                                <img data-aos="fade-up" src={photos3} loading="lazy" alt="gallery" className='rounded-xl' />
                            </div>
                            {/* <div className='w-auto col-span-2 hover:scale-105 hover:cursor-pointer duration-300' onClick={() => bukaGallery(2)}>
                                <img data-aos="fade-up" src={photos6} loading="lazy" alt="gallery" className='rounded-xl' />
                            </div> */}
                            <div className='w-auto hover:scale-105 hover:cursor-pointer duration-300' onClick={() => bukaGallery(1)}>
                                <img data-aos="fade-up" src={photos7} loading="lazy" alt="gallery" className='rounded-xl' />
                            </div>
                            <div className='w-auto hover:scale-105 hover:cursor-pointer duration-300' onClick={() => bukaGallery(1)}>
                                <img data-aos="fade-up" src={photos8} loading="lazy" alt="gallery" className='rounded-xl' />
                            </div>
                            <div className='w-auto hover:scale-105 hover:cursor-pointer duration-300' onClick={() => bukaGallery(1)}>
                                <img data-aos="fade-up" src={photos9} loading="lazy" alt="gallery" className='rounded-xl' />
                            </div>
                            <div className='w-auto hover:scale-105 hover:cursor-pointer duration-300' onClick={() => bukaGallery(1)}>
                                <img data-aos="fade-up" src={photos10} loading="lazy" alt="gallery" className='rounded-xl' />
                            </div>
                            <div className='w-auto hover:scale-105 hover:cursor-pointer duration-300' onClick={() => bukaGallery(1)}>
                                <img data-aos="fade-up" src={photos11} loading="lazy" alt="gallery" className='rounded-xl' />
                            </div>
                            <div className='w-auto hover:scale-105 hover:cursor-pointer duration-300' onClick={() => bukaGallery(1)}>
                                <img data-aos="fade-up" src={photos12} loading="lazy" alt="gallery" className='rounded-xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
