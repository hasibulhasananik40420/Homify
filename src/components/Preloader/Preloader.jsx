const Preloader = () => {
  return (
    <div className="flex w-full min-h-screen  justify-center items-center  bg-[#331949] !z-50 overflow-y-hidden fixed top-0">
      <img
        className="w-20 h-20  "
        src="/loader.webp"
        alt=""
      />
    </div>
  );
};

export default Preloader;
