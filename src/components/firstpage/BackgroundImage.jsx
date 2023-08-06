function BackgroundImage() {
  return (
    <div className="absolute inset-0 z-[2]">
      <div className="absolute inset-0">
        <img
          src="/img/home.png"
          alt="home"
          className="w-full bg-cover bg-[50%_center] absolute inset-0 opacity-100 transition-opacity duration-[400ms] ease-[cubic-bezier(.665,.235,.265,.8)] z-[5]"
        />
        <div className="absolute inset-0 z-[8] bg-transparent bg-hero-pattern bg-[0_top] bg-repeat-x bg-[length:100%_100%] bottom-[-1px] h-[14.7vw] opacity-100 top-auto w-full"></div>
      </div>
    </div>
  );
}

export default BackgroundImage;
