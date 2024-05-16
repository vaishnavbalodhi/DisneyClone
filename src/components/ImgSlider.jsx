import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImgSlider = () => {
    const images = [
        'src\\images\\slider-badag.jpg',
        'src\\images\\slider-badging.jpg',
        'src\\images\\slider-scale.jpg',
        'src\\images\\slider-scales.jpg',
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
        <div className="container mx-auto">
            <Slider {...settings} className=''>
                {images.map((image, index) => (
                    <div key={index} className="px-2 cursor-pointer">
                        <a href="#" className='relative block shadow-custom-2'>
                            <img src={image} alt={`Slide ${index + 1}`} className="rounded-lg hover:rounded-lg hover:border-4 hover:border-gray-300" />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ImgSlider