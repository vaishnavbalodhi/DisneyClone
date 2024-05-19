import { CiCirclePlus } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { doc, getDoc, collection } from "firebase/firestore";

const Detail = () => {

    const { id } = useParams();
    const [detailData, setDetailData] = useState({});
  
    useEffect(() => {
      const fetchDetailData = async () => {
        try {
          const docRef = doc(collection(db, "movies"), id); // Reference to the document
          const docSnap = await getDoc(docRef); // Fetch the document snapshot
  
          if (docSnap.exists()) {
            setDetailData(docSnap.data());
          } else {
            console.log("No such document in Firebase");
          }
        } catch (error) {
          console.log("Error getting document:", error);
        }
      };
  
      fetchDetailData();
    }, [id, db]);

  return (
    <div className='relative top-20 w-full min-h-[calc(100vh - 80px)] overflow-hidden'>
      <div className='w-full h-full fixed -z-10 top0 left-0 opacity-80'>
        <img className='w-full h-full object-cover' src={detailData.backgroundImg} alt={detailData.title} />
      </div>
      <div className="w-1/2 -z-10 mt-4 mx-6">
        <img className='w-[75%]' src={detailData.titleImg} alt={detailData.title} />
      </div>
      <div className="">
        <div className="flex items-center flex-row sm:flex-nowrap flex-wrap justify-start mx-8 my-8 gap-4">
          <button className="md:w-40 md:h-20 w-28 h-12 bg-white flex items-center justify-center rounded-lg px-2">
            <img className="md:w-16 w-10" src='/images/play-icon-black.png' alt="" />
            <span className="text-black md:text-2xl text-xl font-semibold tracking-widest uppercase">Play</span>
          </button>
          <button className="md:w-48 md:h-20 w-36 h-12 bg-black/30 flex items-center justify-center rounded-lg px-4 border-2 border-white hover:bg-white/30 hover:transition ease-in-out duration-200">
            <img className="md:w-20 w-14" src='/images/play-icon-white.png' alt="" />
            <span className="text-white md:text-2xl text-xl font-semibold tracking-widest uppercase">Trailer</span>
          </button>
          <button>
            <CiCirclePlus className="md:w-24 md:h-24 w-14 h-14" />
          </button>
          <button className="rounded-full bg-black/30 border-2 botder-white">
            <img className="md:w-20 md:h-20 w-12 h-12" src='/images/group-icon.png' alt="" />
          </button>
        </div>
        <div className="px-10 tracking-wider">
          <h4 className="text-lg">{detailData.subTitle}</h4>
          <div className="mt-4">
            <p className=" text-lg">{detailData.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail