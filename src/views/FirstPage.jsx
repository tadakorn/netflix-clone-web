import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
// import PopularPage from "../components/firstpage/PopularPage";
import BackgroundImage from "../components/firstpage/BackgroundImage";
import HeroText from "../components/firstpage/HeroText";
import MovieRow from "../components/firstpage/MovieRow";

function FirstPage() {
  const [isContentVisible, setIsContentVisible] = useState(true);

  useEffect(() => {
    // ใช้ setTimeout เพื่อเปลี่ยนสถานะของเนื้อหาในอนาคตหลังจากเวลาที่กำหนด (เช่น 5 วินาที)
    const timer = setTimeout(() => {
      setIsContentVisible(!isContentVisible);
    }, 5000); // 5000 มีค่าเป็นเวลา 5 วินาที (1000 มีค่าเป็น 1 วินาที)

    // ใช้ clean up function เพื่อป้องกันเหตุการณ์ที่เกิดขึ้นหลังจากที่ Component ถูกยกเลิก
    return () => clearTimeout(timer);
  }, [isContentVisible]);

  return (
    <div>
      <div className="relative inset-0">
        <div className="bg-black h-[56.25vw] w-full z-0 absolute">
          <BackgroundImage />
          <HeroText />
        </div>
      </div>
      <MovieRow />
    </div>
  );
}

export default FirstPage;

{
  /* banner */
}
{
  /* <div className="absolute top-20 w-full text-white  md:p-12 p-6 transition-all duration-500 md:grid md:gap-4 md:grid-cols-3">
<div className="flex flex-col justify-center gap-2">
  <img src="/img/netflix-title.png" />
  <div
    className={` ${
      isContentVisible
        ? "transition-opacity duration-700 opacity-100"
        : "opacity-0"
    }`}
  >
    <div className="text-xl flex flex-row gap-2 items-center">
      <div className="flex flex-col justify-center items-center bg-red-600 p-1 text-sm rounded">
        <span className="text-sm">TOP</span>
        <span className="text-xl">10</span>
      </div>
      <span>#2 in Movies Today</span>
    </div>

    <div className="text-sm">
      Bird Box Barcelona is a 2023 Spanish post-apocalyptic horror
      thriller film directed and written by Álex and David Pastor. A
      spin-off sequel to the 2018 film Bird Box, adapted from Josh
      Malermans 2014 novel of the same name, it was released on
      Netflix on July 14, 2023 to mixed reviews.
    </div>
  </div>

  <div className="flex flex-row gap-3 py-3">
    <button className="bg-white rounded-md text-black py-2 px-6">
      <FontAwesomeIcon icon={faPlay} />
      <span className="ps-2">Play</span>
    </button>
    <button className=" bg-neutral-500/50 hover:bg-neutral-800/75 rounded-md text-white py-2 px-6">
      <FontAwesomeIcon icon={faCircleInfo} />
      <span className="ps-2">More Info</span>
    </button>
  </div>
</div>
</div> */
}
