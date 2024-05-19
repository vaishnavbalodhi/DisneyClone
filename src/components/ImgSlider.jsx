import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImgSlider = () => {
    const images = [
        '\\images\\slider-badag.jpg',
        '\\images\\slider-badging.jpg',
        '\\images\\slider-scale.jpg',
        '\\images\\slider-scales.jpg',
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="relative container mx-auto">
            <Slider {...settings} className=''>
                {images.map((image, index) => (
                    <div key={index} className="px-2 cursor-pointer  mb-2">
                        <a href="#" className='relative flex justify-center'>
                            <img src={image} alt={`Slide ${index + 1}`} className="shadow-2xl hover:border-4 hover:border-[#FFFFFF] border-4 border-gray-800/90"/>
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ImgSlider