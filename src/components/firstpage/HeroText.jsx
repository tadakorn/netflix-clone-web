function HeroText() {
  return (
    <div className="absolute inset-0">
      <div className="flex flex-col justify-end left-[4%] bottom-[35%] absolute top-0 w-[36%] z-10">
        <div className="w-full transition-transform duration-[1500ms] ease-[cubic-bezier(.165,.84,.44,1)]">
          {/* เหลือ translate !! */}
          <div className="origin-[left_bottom] duration-[1300ms] delay-[0ms] transform scale-100 translate-x-0 translate-y-0 translate-z-0">
            <div className="mb-[1.2vw] min-h-[13.2vw] relative block">
              <img src="/img/netflix-title.png" />
            </div>
          </div>
          {/* เหลือ translate !! */}
          <div className="transform translate-x-0 translate-y-0 translate-z-0 duration-[1300ms] delay-[0ms] opacity-100">
            <div className="opacity-100 duration-[600ms] delay-200">
              <div className="block"></div>
              <div className="block select-none text-[1.2vw] text-white cursor-default leading-[1.2]">
                <div className="text-white text-[1.2vw] font-normal leading-normal m-[0.5vw, 0 ,0] drop-shadow-[2px_2px_4pxrgba(0,0,0,.45)] select-none w-full">
                  <div className="block text-white text-[1.2vw] leading-normal drop-shadow-[2px_2px_4pxrgba(0,0,0,.45)]">
                    Polar-opposite strangers Lola and Chelsea become partners on
                    the run when they witness a murder involving dirty cops and
                    are framed for the crime.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex leading-[88%] mt-[1.5vw] whitespace-nowrap relative z-10 select-none">
          <a
            href=""
            //เหลือ style Clip --
            className="flex shrink-0 items-center justify-center bg-transparent h-1 overflow-hidden absolute whitespace-nowrap w-px text-white cursor-pointer no-underline leading-[88%] select-none"
          >
            <span className=" h-px w-px absolute overflow-hidden clip-hidden whitespace-nowrap cursor-pointer text-white leading-[88%] select-none"></span>
          </a>
          <a
            href=""
            className="shrink-0 items-center flex justify-center text-white cursor-pointer no-underline bg-transparent leading-[88%] whitespace-nowrap"
          >
            <button
              type="button"
              className="pl-8 pr-[2.4rem] ml-0 bg-white text-black mb-4 mr-4 flex items-center appearance-none border-0 rounded cursor-pointer justify-center opacity-100 p-[0.8rem] relative select-none break-words whitespace-nowrap normal-case overflow-visible m-0"
            >
              <div className="leading-[0] block text-black cursor-pointe select-none break-words whitespace-nowrap normal-case">
                <div className="h-[2.4rem] w-[2.4rem] flex items-center justify-center leading-[0] text-black">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Play"
                    aria-hidden="true"
                    className="h-full w-full overflow-hidden leading-[0] text-black cursor-pointer ill-none select-none break-words whitespace-nowrap normal-case"
                  >
                    <path
                      d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="w-4 box-border flex h-full relative text-black cursor-pointer normal-case"></div>
              <span className="block text-[1.6rem] font-medium leading-[2.4rem] text-black select-none break-words whitespace-nowrap normal-case">
                Play
              </span>
            </button>
          </a>
          <button
            type="button"
            className="shrink-0 pl-8 pr-[2.4rem] bg-[rgba(109, 109, 110, 0.7)] text-white mb-4 mr-4 items-center appearance-none border-0 rounded cursor-pointer flex justify-center
            opacity-100 p-[0.8rem] relative select-none will-change-[background-color] break-words whitespace-nowrap normal-case overflow-visible font-inherit m-0"
          >
            <div className="leading-[0] block text-white select-none break-words whitespace-nowrap normal-case indent-0 drop-shadow-none text-center">
              <div className="h-[2.4rem] w-[2.4rem] flex items-center justify-center leading-[0] ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="CircleI"
                  aria-hidden="true"
                  className="w-full h-full overflow-hidden fill-none"
                >
                  <path
                    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="w-4 box-border flex h-full relative"></div>
            <span className="block text-[1.6rem] font-medium leading-[2.4rem">
              More Info
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default HeroText;
