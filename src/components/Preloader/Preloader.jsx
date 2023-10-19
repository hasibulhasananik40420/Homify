import React, { useEffect, useState } from "react";

const Preloader = () => {
    const [display , setDisplay ] = useState('flex')
    useEffect(()=>{
            window.addEventListener("load" , () => {
                setDisplay('hidden')
            })
    }, [])
  return <div className={`${display} w-full min-h-screen  justify-center items-center  bg-[#331949] !z-50 overflow-y-hidden fixed top-0`}>
    <img className="w-20 h-20  " src="https://media3.giphy.com/media/NgEAblIYpqSlwpj15O/giphy.gif?cid=6c09b952zbqcynkyb8npq8cusnnsa5nr3e6e4ydfhhes2km2&ep=v1_stickers_related&rid=giphy.gif&ct=s" alt="" />
  </div>;
};

export default Preloader;
