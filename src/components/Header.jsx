import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { setSignOutState, setUserLoginDetails } from "../features/user/userSlice";
import { useEffect } from "react";

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {name, email, photo} = useSelector(state => state.userDetail);

    useEffect(() => {
      onAuthStateChanged(auth, async(user) => {
        if(user){
            setUser(user)
            navigate('/home')
        }
      })
    }, [name])
    

    const setUser = (user) => {
        dispatch(setUserLoginDetails({ //this is extracted from firebase
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }))
    }

    const handleAuth = () => {
        !name ?
        signInWithPopup(auth, provider)
            .then((result) => {
                //console.log(result) //check this to use firebase creds synatax / var or method names
                setUser(result.user) //this is extracted from firebase
            })
            .catch((e) => 
                alert(e.message)
            ):
        signOut(auth)
            .then(() => {
                dispatch(setSignOutState())
                navigate('/')
            })
            .catch((e) => 
                alert(e.message)
            )    
    }

    const heads = {
        home: {
            page: 'home',
            image: '\\images\\home-icon.svg'
        },
        search: {
            page: 'search',
            image: '\\images\\search-icon.svg'
        },
        watchlist: {
            page: 'watchlist',
            image: '\\images\\watchlist-icon.svg'
        },
        originals: {
            page: 'originals',
            image: '\\images\\original-icon.svg'
        },
        movies: {
            page: 'movies',
            image: '\\images\\movie-icon.svg'
        },
        series: {
            page: 'series',
            image: '\\images\\series-icon.svg'
        },
    }
    const headEntries = Object.entries(heads);
    return (
        <nav className='fixed z-10 w-full h-20 flex justify-between items-center px-10 overflow-hidden object-cover bg-[#040714]'>
            <img className="w-20 mt-2" src= '/logo.svg' alt="disney logo"/>
            {name && (
                <div className="relative hidden lg:flex flex-nowrap gap-10 items-center flex-end ml-8 mr-auto">
                {headEntries.map(([index, value]) => (
                    <a href={`/${value.page}`} key={index} className="flex items-center gap-1 group">
                        <img className="w-5" src={value.image} alt="" />
                        <h3 className="uppercase tracking-[0.1em] text-sm text-[#F4F4F4] font-['Poppins'] relative">
                            {value.page}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#F4F4F4] group-hover:w-full group-hover:transition-all group-hover:duration-200"></span>
                        </h3>
                    </a>
                    ))}
                </div>
            )}
            {!name ? 
                (<div className="loginbtn">
                    <button 
                    onClick={handleAuth}
                    className="text-[#F4F4F4] border-zinc-500 border-2 px-4 py-2 uppercase font-['Poppins'] tracking-wider rounded-lg hover:bg-[#F4F4F4] outline-none hover:text-[#040714] hover:border-transparent transition-all opacity-100 ease duration-200">Login</button>
                </div>): 
                (<div className="flex items-center justify-center gap-2 group relative cursor-pointer group">
                    {/* <h2 className="text-sm font-semibold tracking-wider group-hover:mb-8 pl-20">{name}</h2> */}
                    <img className="h-12 rounded-full" src={photo} alt=""/>
                    <span
                    onClick={handleAuth} 
                    className="absolute top-6 right-5 bg-zinc-800 py-1 px-4 rounded-lg text-sm hidden tracking-[0.1em] group-hover:inline transition opacity-100 duration-1000">Sign out
                    </span>
                </div>)}
        </nav>
    )
}

export default Header