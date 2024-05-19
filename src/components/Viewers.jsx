const Viewers = () => {

    const videos = {
        disney: {
            video: '\\videos\\1564674844-disney.mp4',
            image: '\\images\\viewers-disney.png',
        },
        pixar: {
            video: '\\videos\\1564676714-pixar.mp4',
            image: '\\images\\viewers-pixar.png',
        },
        marvel: {
            video: '\\videos\\1564676115-marvel.mp4',
            image: '\\images\\viewers-marvel.png',
        },
        starwars: {
            video: '\\videos\\1608229455-star-wars.mp4',
            image: '\\images\\viewers-starwars.png',
        },
        ngc: {
            video: '\\videos\\1564676296-national-geographic.mp4',
            image: '\\images\\viewers-national.png',
        },
    }
    const videoEntries = Object.entries(videos);
    return (
        <div className='w-full h-full'>
            <div className='mt-14 mx-8 grid md:grid-cols-5 grid-cols-1 gap-6'>
                {videoEntries.map(([index, item]) => (
                    <div key={index} className="w-full h-full relative rounded-lg group overflow-hidden cursor-pointer shadow-2xl shadow-[#040714] border-[3px] border-gray-700/90 hover:scale-105 hover:border-[#FFFFFF]">
                        <img className="w-full h-full group-hover:opacity-0 transition-opacity duration-500" src={item.image} alt={index} />
                        <video autoPlay={true} playsInline={true} loop={true} muted={true}
                            className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500" src={item.video}></video>
                            {/* <div></div> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Viewers