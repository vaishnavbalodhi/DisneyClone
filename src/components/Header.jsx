const Header = () => {
    const heads = {
        home: {
            page: 'home',
            img: 'src\\images\\home-icon.svg'
        },
        search: {
            page: 'search',
            img: 'src\\images\\search-icon.svg'
        },
        watchlist: {
            page: 'watchlist',
            img: 'src\\images\\watchlist-icon.svg'
        },
        originals: {
            page: 'originals',
            img: 'src\\images\\original-icon.svg'
        },
        movies: {
            page: 'movies',
            img: 'src\\images\\movie-icon.svg'
        },
        series: {
            page: 'series',
            img: 'src\\images\\series-icon.svg'
        },
    }
    const headEntries = Object.entries(heads);
    return (
        <nav className='fixed z-10 w-full h-20 flex justify-between items-center px-10 overflow-hidden object-cover bg-[#040714]'>
            <img className="w-20 mt-2" src="src\images\logo.svg" alt="" />
            <div className="relative hidden lg:flex flex-nowrap gap-10 items-center flex-end ml-8 mr-auto">
                {headEntries.map(([index, value]) => (
                    <a href={`/${value.page}`} key={index} className="flex items-center gap-1 group">
                        <img className="w-5" src={value.img} alt="" />
                        <h3 className="uppercase tracking-[0.1em] text-sm text-[#F4F4F4] font-['Poppins'] relative">
                            {value.page}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#F4F4F4] group-hover:w-full group-hover:transition-all group-hover:duration-200"></span>
                        </h3>
                    </a>
                ))}
            </div>
            <div className="">
                <button className="text-[#F4F4F4] border-zinc-500 border-2 px-4 py-2 uppercase font-['Poppins'] tracking-wider rounded-lg hover:bg-[#F4F4F4] outline-none hover:text-[#040714] hover:border-transparent transition-all ease duration-200">Login</button>
            </div>
        </nav>
    )
}

export default Header