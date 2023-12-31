/* eslint-disable no-unused-vars */
import React from 'react'
import appointment from "../../assets/Chose-us-image/appointment.svg";
import office from "../../assets/Chose-us-image/office.svg";
import house from "../../assets/Property-image/house.png";
import framHouse from "../../assets/Chose-us-image/fram-house.svg";
import spece from "../../assets/Chose-us-image/spece.svg";
import duplexHouse from "../../assets/Chose-us-image/duplex-house.svg";
import singleHouse from "../../assets/Chose-us-image/single-house.svg";
import { Fade } from "react-reveal";


const SellBox = () => {
  return (
    <div>
        
        <div className="lg:flex 2xl:gap-[121px] lg:gap-20 mt-20">
          <Fade bottom cascade>
            <div className="flex flex-col gap-10">
              <div className="lg:flex md:flex md:justify-center gap-x-10">
                <div
                  className="2xl:w-[400px] lg:w-[350px] md:w-[350px] w-full h-[160px] flex justify-center items-center gap-8 bg-hoverColor hover:bg-white duration-500"
                  style={{
                    boxShadow: "0px 4px 60px 0px rgba(185, 175, 175, 0.15)",
                  }}
                >
                  <span>
                    <img
                      className="w-[100px] h-[100px]"
                      src={appointment}
                      alt=""
                    />
                  </span>
                  <span>
                    <h1 className="text-[#3E348F] text-[32px] font-Teko font-medium">
                      Single Apartment
                    </h1>
                    <p className="text-[#181C21] text-[20px] font-Lato font-bold">
                      (135 Projects )
                    </p>
                  </span>
                </div>

                <div
                  className="2xl:w-[400px] lg:w-[350px] md:w-[350px] mt-8 md:mt-0 lg:mt-0 2xl:mt-0 w-full h-[160px] flex justify-center items-center gap-8 hover:bg-hoverColor duration-500"
                  style={{
                    boxShadow: "0px 4px 60px 0px rgba(185, 175, 175, 0.15)",
                  }}
                >
                  <span>
                    <img className="w-[100px] h-[100px]" src={office} alt="" />
                  </span>
                  <span>
                    <h1 className="text-[#3E348F] text-[32px] font-Teko font-medium">
                      Office Space
                    </h1>
                    <p className="text-[#181C21] text-[20px] font-Lato font-bold">
                      (59 Projects )
                    </p>
                  </span>
                </div>
              </div>

              <div className="lg:flex md:flex md:justify-center gap-x-10">
                <div
                  className="2xl:w-[400px] lg:w-[350px] md:w-[350px] w-full h-[160px] flex justify-center items-center gap-8 hover:bg-hoverColor duration-500"
                  style={{
                    boxShadow: "0px 4px 60px 0px rgba(185, 175, 175, 0.15)",
                  }}
                >
                  <span>
                    <img
                      className="w-[100px] h-[100px]"
                      src={framHouse}
                      alt=""
                    />
                  </span>
                  <span>
                    <h1 className="text-[#3E348F] text-[32px] font-Teko font-medium">
                      Farm House
                    </h1>
                    <p className="text-[#181C21] text-[20px] font-Lato font-bold">
                      (17 Projects )
                    </p>
                  </span>
                </div>

                <div
                  className="2xl:w-[400px] lg:w-[350px] md:w-[350px] mt-8 md:mt-0 lg:mt-0 2xl:mt-0 w-full h-[160px] flex justify-center items-center gap-8 hover:bg-hoverColor duration-500"
                  style={{
                    boxShadow: "0px 4px 60px 0px rgba(185, 175, 175, 0.15)",
                  }}
                >
                  <span>
                    <img className="w-[100px] h-[100px]" src={spece} alt="" />
                  </span>
                  <span>
                    <h1 className="text-[#3E348F] text-[32px] font-Teko font-medium">
                      Commercial Space
                    </h1>
                    <p className="text-[#181C21] text-[20px] font-Lato font-bold">
                      (179 Projects )
                    </p>
                  </span>
                </div>
              </div>

              <div className="lg:flex md:flex md:justify-center gap-x-10">
                <div
                  className="2xl:w-[400px] lg:w-[350px] md:w-[350px] w-full h-[160px] flex justify-center items-center gap-8 hover:bg-hoverColor duration-500"
                  style={{
                    boxShadow: "0px 4px 60px 0px rgba(185, 175, 175, 0.15)",
                  }}
                >
                  <span>
                    <img
                      className="w-[100px] h-[100px]"
                      src={duplexHouse}
                      alt=""
                    />
                  </span>
                  <span>
                    <h1 className="text-[#3E348F] text-[32px] font-Teko font-medium">
                      Duplex Home
                    </h1>
                    <p className="text-[#181C21] text-[20px] font-Lato font-bold">
                      (119 Projects )
                    </p>
                  </span>
                </div>
                <div
                  className="2xl:w-[400px] lg:w-[350px] md:w-[350px] mt-8 md:mt-0 lg:mt-0 2xl:mt-0 w-full h-[160px] flex justify-center items-center gap-8 hover:bg-hoverColor duration-500"
                  style={{
                    boxShadow: "0px 4px 60px 0px rgba(185, 175, 175, 0.15)",
                  }}
                >
                  <span>
                    <img
                      className="w-[100px] h-[100px]"
                      src={singleHouse}
                      alt=""
                    />
                  </span>
                  <span>
                    <h1 className="text-[#3E348F] text-[32px] font-Teko font-medium">
                      Single Home
                    </h1>
                    <p className="text-[#181C21] text-[20px] font-Lato font-bold">
                      (139 Projects )
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div>
              <img
                className="lg:w-[478px] w-full h-[560px] mt-20 md:mt-20 lg:mt-0 2xl:mt-0"
                src={house}
                alt=""
              />
            </div>
          </Fade>
        </div>

    </div>
  )
}

export default SellBox