import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const NewDisney = () => {

  const rec = useSelector(state => state.movie.newDisney)
  return (
    <div className='relative w-full h-full p-8'>
      <h3 className="mb-4 font-semibold tracking-wider">New to Disney+</h3>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-6'>
        {rec && rec.map((item) => (
          <div key={item.id} className='w-full h-44 relative border-[3px] border-gray-700/90 rounded-lg cursor-pointer overflow-hidden shadow-2xl hover:scale-105 hover:border-[#FFFFFF] transition-all duration-300'>
            <Link to={"/detail/" + item.id}>
              <img className="absolute w-full h-full inset-0 transition-opacity duration-500 ease-in-out" src={item.cardImg} alt={item.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewDisney