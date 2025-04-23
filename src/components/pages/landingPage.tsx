// import { useState } from "react"
import { Link } from 'react-router-dom'
import Header from '../navBar'
import { Info, ShoppingCart } from 'lucide-react'
import BigTitle from '../Title/bigTitle'


export default function LandingPage() {


  return (
    <div className="w-full flex flex-col">
        <Header/>
        <div id="heroSection" className="w-full min-h-screen bg-heroPattern bg-no-repeat bg-center bg-cover flex flex-col justify-center gap-10 md:gap-20 lg:gap-20 px-10">
            <div id="text" className="w-full md:w-3/5 h-3/4 flex flex-col gap-6 md:gap-10 lg:gap-20 px-4 md:px-20">
                <div className="w-full text-xl md:text-5xl lg:text-7xl font-playfair font-extrabold bg-mainGradient bg-clip-text text-transparent">Venu d'ailleurs</div>
                <p className=" font-playfair text-3xl text-white leading-[35px] md:leading-[45px] lg:leading-[40px]">
                  Une marque de vetêment personnalisable 100% made in DRC, une meilleure qualité à un prix abordable.
                </p>
            </div>
            <div id="btnSection" className=" flex flex-row justify-start items-center mx-20  gap-4 -mt-10">
              <div className='w-1/4 h-full'>
                <Link to={`/products`} className="bg-mainGradient w-full rounded-2xl py-2 flex justify-center items-center gap-5 hover:shadow-lg hover:shadow-black text-sm md:text-base text-white font-roboto font-bold hover:bg-secondaryOrange">
                  <span>Commander</span>
                  <ShoppingCart className="h-9 w-9 text-white" />
                </Link>
              </div>
              <div className='w-1/4 h-full'>
                <Link to={`/products`} className="w-full bg-none rounded-2xl py-2 flex justify-center items-center gap-5 border-2 border-mainOrange hover:shadow-lg hover:shadow-black text-sm md:text-base text-mainOrange font-roboto font-bold">
                  <span>En savoir plus</span>
                  <Info className="h-9 w-9 text-mainOrange"/>
                </Link>
              </div>
            </div>
        </div>
        <div id='aboutSection' className='h-[35rem] bg-simpleGray py-10 flex flex-col gap-10'>
          <BigTitle id="about">A propos de nous</BigTitle>
          <div id='aboutContent' className='w-full h-full flex justify-center items-center gap-10 px-10'>
            <div className="w-1/2 pt-10 pl-0 pr-10 border-r-[1px] border-black">
              <div id='deco1' className="w-44 h-44 flex justify-center items-center rounded-full bg-darkGray p-5">
                <img src="/images/logo.png" alt="about us" className="w-40 h-40 rounded-full " />
              </div>
              <div id='deco2' className="w-28 h-28 flex justify-center items-center rounded-full bg-lightGray p-2 ml-32">
                <img src="/images/logo.png" alt="about us" className="w-20 h-20 rounded-full " />
              </div>
              <div id='deco3' className="w-28 h-28 flex justify-center items-center rounded-full bg-lightGray p-2  ml-40">
                <img src="/images/logo.png" alt="about us" className="w-20 h-20 rounded-full " />
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center gap-10 pl-8">
              <p className="text-gray-800 mb-6 leading-relaxed text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>

              <div>
                <Link to={`/about`} className="w-56 bg-secondaryOrange font-roboto text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-[#4a0000] transition-colors">
                  <span>En savoir plus</span>
                  <Info size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
