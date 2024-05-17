const Viewers = () => {

    const videos = {
        disney: {
            video: 'src\\videos\\1564674844-disney.mp4',
            image: 'src\\images\\viewers-disney.png',
        },
        pixar: {
            video: 'src\\videos\\1564676714-pixar.mp4',
            image: 'src\\images\\viewers-pixar.png',
        },
        marvel: {
            video: 'src\\videos\\1564676115-marvel.mp4',
            image: 'src\\images\\viewers-marvel.png',
        },
        starwars: {
            video: 'src\\videos\\1608229455-star-wars.mp4',
            image: 'src\\images\\viewers-starwars.png',
        },
        ngc: {
            video: 'src\\videos\\1564676296-national-geographic.mp4',
            image: 'src\\images\\viewers-national.png',
        },
    }
    const videoEntries = Object.entries(videos);

  return (
    <div className='w-full h-full'>
        <div className='mt-14 mx-8 grid  lg:grid-cols-5 grid-cols-1 gap-6'>
            {videoEntries.map(([index, item]) =>(
                <div key={index} className="rounded-lg overflow-hidden shadow-2xl shadow-[#040714] border-[3px] border-[#212433]">
                    <img src={item.image} alt={item} />
                    <video className="hidden" src={item.video}></video>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Viewers