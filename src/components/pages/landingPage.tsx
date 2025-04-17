// import { useState } from "react"
import { Link } from 'react-router-dom'
import Header from '../navBar'
import { Info, ShoppingCart } from 'lucide-react'


export default function LandingPage() {


  return (
    <div className="w-full flex flex-col">
        <Header/>
        <div id="heroSection" className="w-full min-h-screen bg-[url('/images/Bg.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-center gap-10 md:gap-20 lg:gap-20 px-10">
            <div id="text" className="w-full md:w-[30rem] h-3/4 flex flex-col gap-6 md:gap-10 lg:gap-20 px-4 md:px-20">
                <div className="w-full text-nowrap text-xl md:text-2xl lg:text-5xl font-extrabold text-[#D83000]">Venu d'ailleurs</div>
                <p className="w-full text-['Libre_Baskerville'] text-2xl text-white leading-[35px] md:leading-[45px] lg:leading-[30px]">
                    Une marque de vetêment personnalisable 100% made in DRC, une meilleure qualité à un prix abordable.
                </p>
            </div>
            <div id="btnSection" className="h-auto md:h-20 w-full bg-black flex lg:flex-row md:flex-row justify-start mx-10 md:px-10 gap-4 py-6 md:py-0">
              <Link to={`/products`} className="w-1/2 md:w-auto h-12 md:h-1/2 bg-[#D83000] rounded-2xl p-3 flex justify-center md:justify-around items-center gap-3 hover:shadow-lg shadow-black text-sm md:text-base text-white font-bold">
                <span>Commander</span>
                <ShoppingCart className="h-7 w-7 text-white" />
              </Link>
              <Link to={`/products`} className="w-1/2 md:w-auto h-12 md:h-1/2 bg-none rounded-2xl p-3 flex justify-center md:justify-around items-center gap-3 border-2 border-[#D83000] hover:shadow-lg shadow-black text-sm md:text-base text-[#D83000] font-bold">
                <span>En savoir plus</span>
                <Info className="h-7 w-7 text-[#D83000]"/>
              </Link>
            </div>
          </div>
    </div>
  )
}
