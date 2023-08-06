import movie1 from "/img/movie1.png";
import movie2 from "/img/movie2.png";
import movie3 from "/img/movie3.png";
import movie4 from "/img/movie4.png";
import movie5 from "/img/movie5.png";
import movie6 from "/img/movie6.png";
import movie7 from "/img/movie7.png";
import movie8 from "/img/movie8.png";
import movie9 from "/img/movie9.png";
import movie10 from "/img/movie10.png";
import movie11 from "/img/movie11.png";
import movie12 from "/img/movie12.png";
import movie13 from "/img/movie13.png";
import movie14 from "/img/movie14.png";
import movie15 from "/img/movie15.png";
import movie16 from "/img/movie16.png";
import movie17 from "/img/movie17.png";
import movie18 from "/img/movie18.png";
import movie19 from "/img/movie19.png";
import movie20 from "/img/movie20.png";

function MovieRow() {
  const movies = [
    { src: movie1 },
    { src: movie2 },
    { src: movie3 },
    { src: movie4 },
    { src: movie5 },
    { src: movie6 },
    { src: movie7 },
    { src: movie8 },
    { src: movie9 },
    { src: movie10 },
    { src: movie11 },
    { src: movie12 },
    { src: movie13 },
    { src: movie14 },
    { src: movie15 },
    { src: movie16 },
    { src: movie17 },
    { src: movie18 },
    { src: movie19 },
    { src: movie20 },
  ];

  return (
    <div className="relative top-[40rem]  ">
      <div className="relative left-[4%] mb-3">
        <a
          href=""
          className="text-[12px] text-white  font-medium cursor-pointer bg-transparent "
        >
          <div className=" table-cell leading-[1.25vw] align-bottom font-medium">
            Award-winning Dark US TV Thrillers
          </div>
        </a>
      </div>

      <swiper-container slides-per-view="5" navigation="true" pagination="true">
        {movies.map((movie) => (
          <swiper-slide key={movie}>
            <img src={movie.src} />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
    //   </div>
    // </div>
  );
}

export default MovieRow;
