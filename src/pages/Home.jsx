import ImgSlider from "../components/ImgSlider"

const Home = () => {

  return (
    <div className="relative top-20 w-full min-h-[calc(100vh-80px)] overflow-x-hidden block p-4 bg-[url('./images/home-background.png')] bg-fixed bg-cover bg-center bg-no-repeat opacity-100 inset-0">
        <div className="w-full py-4">
            <ImgSlider />
        </div>
    </div>
  )
}

export default Home