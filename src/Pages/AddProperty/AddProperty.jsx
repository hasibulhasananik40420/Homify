/* eslint-disable no-unused-vars */
import React from 'react'
import CommonAction from '../../components/CommonAction/CommonAction'
import ImageSlider from '../../components/ImageSlider/ImageSlider'

const AddProperty = () => {

     //********************  Blog details section start here **************************//
    //******************** ##########################  ********************************//
  return (
    <div>
         <CommonAction title={"Add Property "} subTitle={"Home> Add Property"} />

           {/******************* blog section part start here *******************/}
           {/*------------------------------------------------------------------*/}
          <div className='max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16'>

             <div>
                <h3 className='text-[#375E97] text-[20px] font-Teko font-bold leading-8'>More Images of this Property</h3>
                 
                  <ImageSlider/>

             </div>
            
          </div>

            {/******************* blog section part start here *******************/}
           {/*------------------------------------------------------------------*/}

    </div>
  )

   //********************  Blog details section start here **************************//
    //******************** ##########################  ********************************//
}

export default AddProperty