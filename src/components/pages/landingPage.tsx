// import { useState } from "react"
import { Link } from 'react-router-dom'
import Header from '../navBar'
import { Info, ShoppingCart } from 'lucide-react'
import BigTitle from '../Title/bigTitle'
import Card from '../Card/card1'
import ProductCard from '../Card/product'


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
                <Link to={`/products`} className="bg-mainGradient w-full rounded-2xl py-2 flex justify-center items-center gap-5 hover:bg-secondaryGradient hover:shadow-lg hover:shadow-black text-sm md:text-base text-white font-roboto font-bold hover:bg-secondaryOrange">
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
        <div id='aboutSection' className='h-[35rem] bg-simpleGray p-10 flex flex-col gap-10'>
          <BigTitle id="about">A propos de nous</BigTitle>
          <div id='aboutContent' className='w-full h-full flex justify-center items-center gap-10 px-10'>
            <div id='decoration' className="w-1/2 pt-10 pl-0 pr-10 border-r-[1px] border-black">
              <div id='deco1' className="w-44 h-44 flex justify-center items-center rounded-full bg-darkGray p-5">
                <img src="/images/logo.png" alt="about us" className="w-40 h-40 rounded-full " />
              </div>
              <div id='deco2' className="w-28 h-28 flex justify-center items-center rounded-full bg-lightGray p-2 -mt-32 ml-56 absolute">
                <img src="/images/logo.png" alt="about us" className="w-20 h-20 rounded-full " />
              </div>
              <div id='deco3' className="w-28 h-28 flex justify-center items-center rounded-full bg-lightGray p-2  ml-40">
                <img src="/images/logo.png" alt="about us" className="w-20 h-20 rounded-full " />
              </div>
            </div>
            <div id='text' className="w-1/2 flex flex-col justify-center gap-10 pl-8">
              <p className="text-gray-800 mb-6 leading-relaxed text-justify">
                Venue D'ailleurs est une marque qui vous aide à exprimer et affimer votre identité singulière avec Style et Originalité. 
              
              </p>

              <div>
                <Link to={`/about`} className="w-56 bg-secondaryOrange hover:bg-secondaryGradient font-roboto text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-[#4a0000] transition-colors">
                  <span>En savoir plus</span>
                  <Info size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id='whyUsSection' className='h-[35rem] bg-white p-10 flex flex-col gap-10'>
          <BigTitle id="whyUs">Pourquoi nous</BigTitle>
          <div id='whyUsContent' className='w-full h-full flex justify-center items-center gap-10 px-10'>
            <Card title='Livraison rapide et gratuite' description='Nous vous offrons une livraison rapide et gratuite à partir de 3 pièces' imageUrl='/svg/car.svg'/>
            <Card title='Personnalisation' description='Vous avez la possibilité de personnaliser la marque' imageUrl='/svg/edit.svg'/>
            <Card title='Meilleure qualité' description='Nous assurons la meilleure qualité de nos produits' imageUrl='/svg/quality.svg'/>
          </div>
        </div>
        <div id='articleSection' className='h-[40rem] bg-simpleGray p-10 flex flex-col gap-10'>
          <BigTitle id="articles">Nos articles</BigTitle>
          <div id='products' className='w-full h-auto flex flex-row items-center justify-center gap-10'>
            <ProductCard title='T-shirt motif' description='T-shirt aux multiples motifs diversifiés ' imageUrl='/images/blancMotifVa.png' price={25}/>
            <ProductCard title='T-shirt Thanos' description='T-shirt avec visage de thanos' imageUrl='/images/blackCEV.png' price={25}/>
            <ProductCard title='T-shirt Kratos' description='T-shirt avec visage du super héro' imageUrl='/images/blancKratos.png' price={25}/>
            <ProductCard title='T-shirt Wakanda' description='T-shirt avec visage du black panthère' imageUrl='images/wakanda.png'price={25}/>

          </div>
          <Link to={`/products`} className="bg-mainGradient w-1/5 rounded-2xl py-2 ml-5 flex justify-center items-center hover:bg-secondaryGradient hover:shadow-lg hover:shadow-black text-sm md:text-base text-white font-roboto font-bold hover:bg-secondaryOrange">
            <span>Découvrez plus</span>
          </Link>
        </div>
    </div>
  )
}
