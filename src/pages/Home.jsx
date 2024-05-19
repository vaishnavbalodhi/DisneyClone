import ImgSlider from "../components/ImgSlider"
import NewDisney from "../components/NewDisney"
import Originals from "../components/Originals"
import Recommends from "../components/Recommends"
import Trending from "../components/Trending"
import Viewers from "../components/Viewers"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setMovies } from "../features/movie/movieSlice"
import db from '../firebase'
import { collection, onSnapshot } from "firebase/firestore"

const Home = () => {

  const dispatch = useDispatch();
  const email = useSelector(state  => state.userDetail.email)

  useEffect(() => {
    onSnapshot(collection(db,"movies"), (snapshot) => {
      let recommends = [];
      let newDisneys = [];
      let originals = [];
      let trendings = [];

      snapshot.docs.forEach((doc) => {
        // console.log(recommends)
        const data = { id: doc.id, ...doc.data() }
        switch (doc.data().type) {
          case "recommend":
            recommends.push(data);
            break;

          case "new":
            newDisneys.push(data);
            break;

          case "original":
            originals.push(data);
            break;

          case "trending":
            trendings.push(data);
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trendings,
        })
      );
    }, (error) => {
      console.error("Error fetching movies: ", error);
    });
  }, [email])
  

  return (
    <div className="relative top-20 w-full min-h-[calc(100vh-80px)] overflow-x-hidden block px-4 bg-[url('./images/home-background.png')] bg-fixed bg-cover bg-center bg-no-repeat opacity-100 inset-0">
        <div className="w-full py-4">
            <ImgSlider />
            <Viewers />
            <Trending />
            <Recommends />
            <NewDisney />
            <Originals />
        </div>
    </div>
  )
}

export default Home