import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faMagnifyingGlass,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const navbarDetail = {
    home: "Home",
    tvShow: "TV Shows",
    movies: "Movies",
    newPopular: "NEW & Popular",
    myList: "My List",
    languages: "Browse by Languages",
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={
        "fixed top-0 w-full text-white z-10 md:px-12 md:py-6 p-6 transition-all duration-500 " +
        (navbar ? "bg-slate-950" : "bg-transparent")
      }
    >
      {/* navbar */}
      <div className="flex gap-4 items-center  ">
        <div className="">
          <img
            src="../../public/img/Netflix.png"
            alt="{navbarDetail.home}"
            className="w-28"
          ></img>
        </div>
        <div className="grow text-sm">
          <div className="hidden md:flex gap-2 ">
            <div className="font-bold">{navbarDetail.home}</div>
            <div className="font-light">{navbarDetail.tvShow} </div>
            <div className="font-light">{navbarDetail.movies}</div>
            <div className="font-light">{navbarDetail.newPopular} </div>
            <div className="font-light">{navbarDetail.myList}</div>
            <div className="font-light">{navbarDetail.languages}</div>
          </div>
          <div className="md:hidden">
            <div className="relative">
              <span className="mx-2">Browse</span>
              <FontAwesomeIcon icon={faCaretDown} onClick={toggleDropdown} />
              {isOpen && (
                <div className="absolute top-6 left-2 mt-2 bg-black border rounded-md shadow-md p-3 flex flex-col gap-2 text-lg">
                  {/* Dropdown content */}
                  <div className="font-bold">{navbarDetail.home}</div>
                  <div className="font-light">{navbarDetail.tvShow} </div>
                  <div className="font-light">{navbarDetail.movies}</div>
                  <div className="font-light">{navbarDetail.newPopular} </div>
                  <div className="font-light">{navbarDetail.myList}</div>
                  <div className="font-light">{navbarDetail.languages}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="hidden md:flex  ">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="flex ">
          <a href="">
            <FontAwesomeIcon icon={faBell} />
          </a>
          <span className=""></span>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
