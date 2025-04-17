// import { useState } from "react"
import { Link } from 'react-router-dom'
import Header from '../navBar'
import { Info, ShoppingCart } from 'lucide-react'


export default function LandingPage() {


  return (
    <div className="w-full flex flex-col">
        <Header/>
        <div id="heroSection" className="w-full min-h-screen bg-[url('/images/Bg.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-center gap-10 md:gap-20 lg:gap-20 px-10">
            <div id="text" className="w-full md:w-3/5 h-3/4 flex flex-col gap-6 md:gap-10 lg:gap-20 px-4 md:px-20">
                <div className="w-full text-xl md:text-2xl lg:text-5xl font-extrabold text-[#D83000]">Venu d'ailleurs</div>
                <p className=" text-['Libre_Baskerville'] text-3xl text-white leading-[35px] md:leading-[45px] lg:leading-[40px]">
                  Une marque de vetêment personnalisable 100% made in DRC, une meilleure qualité à un prix abordable.
                </p>
            </div>
            <div id="btnSection" className=" flex flex-row justify-start items-center mx-20  gap-4 -mt-10">
              <div className='w-1/4 h-full'>
                <Link to={`/products`} className="bg-[#D83000] w-full bg-none rounded-2xl py-2 flex justify-center items-center gap-5 hover:shadow-lg hover:shadow-black text-sm md:text-base text-white font-bold hover:bg-orange-900">
                  <span>Commander</span>
                  <ShoppingCart className="h-9 w-9 text-white" />
                </Link>
              </div>
              <div className='w-1/4 h-full'>
                <Link to={`/products`} className="w-full bg-none rounded-2xl py-2 flex justify-center items-center gap-5 border-2 border-[#D83000] hover:shadow-lg hover:shadow-black text-sm md:text-base text-[#D83000] font-bold">
                  <span>En savoir plus</span>
                  <Info className="h-9 w-9 text-[#D83000]"/>
                </Link>
              </div>
            </div>
          </div>
    </div>
  )
}
