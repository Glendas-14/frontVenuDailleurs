// import { useState } from "react"
import { Link } from 'react-router-dom'
import Header from '../navBar'
import { Eye, Info, ShoppingCart } from 'lucide-react'
import BigTitle from '../Title/bigTitle'
import Card from '../Card/simpleCard'
import ProductCard from '../Card/product'
import CollectionCard from '../Card/collection'
import {collections} from '../data/collections'
import { ContactSection } from '../contact/contact'
import Footer from '../footer'



export default function LandingPage() {
  return (
    <div className="w-full flex flex-col">
        <Header/>
        <div id="heroSection" className="w-full min-h-screen bg-heroPattern bg-no-repeat bg-center bg-cover flex flex-col justify-center gap-6 md:gap-10 lg:gap-20 px-4 sm:px-6 md:px-10">
            <div id="text" className="w-full md:w-3/5 h-3/4 flex flex-col gap-4 md:gap-6 lg:gap-20 px-2 sm:px-4 md:px-20">
                <div className="w-full text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-playfair font-extrabold bg-mainGradient bg-clip-text text-transparent">Venu d'ailleurs</div>
                <p className="font-playfair text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-6 sm:leading-7 md:leading-[35px] lg:leading-[40px]">
                  Une marque de vetêment personnalisable 100% made in DRC, une meilleure qualité à un prix abordable.
                </p>
            </div>
            <div id="btnSection" className="flex flex-col sm:flex-row justify-start items-center mx-4 sm:mx-10 md:mx-20 gap-4 -mt-4 sm:-mt-6 md:-mt-10">
              <div className='w-full sm:w-1/2 md:w-1/4 h-full'>
                <Link to={`/articles`} className="bg-mainGradient w-full rounded-2xl py-2 px-4 flex justify-center items-center gap-3 sm:gap-5 hover:bg-secondaryGradient hover:shadow-lg hover:shadow-black text-sm md:text-base text-white font-roboto font-bold hover:bg-secondaryOrange">
                  <span>Commander</span>
                  <ShoppingCart className="h-6 w-6 sm:h-8 sm:w-8 md:h-9 md:w-9 text-white" />
                </Link>
              </div>
              <div className='w-full sm:w-1/2 md:w-1/4 h-full'>
                <Link to={`/products`} className="w-full bg-none rounded-2xl py-2 px-4 flex justify-center items-center gap-3 sm:gap-5 border-2 border-mainOrange hover:shadow-lg hover:shadow-black text-sm md:text-base text-mainOrange font-roboto font-bold">
                  <span>En savoir plus</span>
                  <Info className="h-6 w-6 sm:h-8 sm:w-8 md:h-9 md:w-9 text-mainOrange"/>
                </Link>
              </div>
            </div>
        </div>
        <div id='aboutSection' className='min-h-[35rem] bg-simpleGray p-4 sm:p-6 md:p-10 flex flex-col gap-6 md:gap-10'>
          <BigTitle id="about">A propos de nous</BigTitle>
          <div id='aboutContent' className='w-full h-full flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-10 px-2 sm:px-4 md:px-10'>
            <div id='decoration' className="w-full lg:w-1/2 pt-6 md:pt-10 pl-0 pr-0 lg:pr-10 lg:border-r-[1px] border-black flex flex-col items-center lg:items-start">
              <div id='deco1' className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 flex justify-center items-center rounded-full bg-darkGray p-3 sm:p-4 md:p-5">
                <img src="/images/logo.png" alt="about us" className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full" />
              </div>
              <div className="flex flex-row lg:flex-col gap-4 mt-4 lg:mt-0">
                <div id='deco2' className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex justify-center items-center rounded-full bg-lightGray p-2 lg:-mt-32 lg:ml-56 lg:absolute">
                  <img src="/images/logo.png" alt="about us" className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full" />
                </div>
                <div id='deco3' className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex justify-center items-center rounded-full bg-lightGray p-2 lg:ml-40">
                  <img src="/images/logo.png" alt="about us" className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full" />
                </div>
              </div>
            </div>
            <div id='text' className="w-full lg:w-1/2 flex flex-col justify-center gap-6 md:gap-10 pl-0 lg:pl-8 text-center lg:text-left">
              <p className="text-gray-800 mb-4 md:mb-6 leading-relaxed text-justify">
                Venue D'ailleurs est une marque qui vous aide à exprimer et affimer votre identité singulière avec Style et Originalité. 
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link to={`/about`} className="w-full sm:w-56 bg-secondaryOrange hover:bg-secondaryGradient font-roboto text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-[#4a0000] transition-colors">
                  <span>En savoir plus</span>
                  <Info size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id='whyUsSection' className='min-h-[35rem] bg-white p-4 sm:p-6 md:p-10 flex flex-col gap-6 md:gap-10'>
          <BigTitle id="whyUs">Pourquoi nous</BigTitle>
          <div id='whyUsContent' className='w-full h-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 px-2 sm:px-4 md:px-10'>
            <Card title='Livraison rapide et gratuite' description='Nous vous offrons une livraison rapide et gratuite à partir de 3 pièces' imageUrl='/svg/car.svg'/>
            <Card title='Personnalisation' description='Vous avez la possibilité de personnaliser la marque' imageUrl='/svg/edit.svg'/>
            <Card title='Meilleure qualité' description='Nous assurons la meilleure qualité de nos produits' imageUrl='/svg/quality.svg'/>
          </div>
        </div>
        <div id='articleSection' className='min-h-[40rem] bg-simpleGray p-4 sm:p-6 md:p-10 flex flex-col gap-6 md:gap-10'>
          <BigTitle id="articles">Nos articles</BigTitle>
          <div id='products' className='w-full h-auto flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10'>
            {/* Premier produit de chaque collection */}
            {collections.map((collection, index) => {
              const product = collection.products[0];
              if (!product) return null;
              return (
                <ProductCard
                  key={`main-${index}`}
                  title={product.title ?? 'Article quelconque'}
                  description={product.description ?? 'Description non disponible'}
                  imageUrl={product.imageUrl ?? ''}
                  price={product.price ?? 0}
                />
              );
            })}
            {/* Deuxième produit de la deuxième collection */}
            {collections[0] && collections[0].products[1] && (
              <ProductCard
                key="second-collection-second-product"
                title={collections[0].products[1].title ?? 'Article quelconque'}
                description={collections[0].products[1].description ?? 'Description non disponible'}
                imageUrl={collections[0].products[1].imageUrl ?? ''}
                price={collections[0].products[1].price ?? 0}
              />
            )}
          </div>
          <div className="flex justify-center sm:justify-start">
            <Link
              to={`/articles`}
              className="bg-mainGradient w-full sm:w-auto sm:min-w-[200px] md:w-1/5 rounded-2xl py-2 ml-0 sm:ml-5 flex justify-center items-center hover:bg-secondaryGradient hover:shadow-lg hover:shadow-black text-sm md:text-base text-white font-roboto font-bold hover:bg-secondaryOrange"
            >
              <span>Découvrez plus</span>
            </Link>
          </div>
        </div>
        <div id='collectionSection' className='min-h-[40rem] bg-white p-4 sm:p-6 md:p-10 flex flex-col gap-6 md:gap-10'>
          <BigTitle id='collections' children={`Nos collections`} />
          <div id='collections' className='w-full h-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10'>
            {collections.slice(0, 3).map((collection, index) => (
              <CollectionCard
                key={index}
                title={collection.title}
                images={collection.products.map(product => product.imageUrl)}
              />
            ))}
          </div>
          <div id='sectionBtn' className='w-full flex justify-center md:justify-end'>
            <Link
              to={`/collections`}
              className="w-full sm:w-56 bg-orangeChoco hover:bg-secondaryOrange font-roboto font-bold text-white px-6 py-3 rounded-md flex justify-center items-center space-x-5 transition-colors"
            >
              <span>Voir plus</span>
              <Eye size={25} />
            </Link>
          </div>
        </div>
        <div id='serviceSection' className='min-h-[35rem] bg-lightGray p-4 sm:p-6 md:p-10 flex flex-col gap-6 md:gap-10'>
          <BigTitle id="services">Nos services</BigTitle>
          <div id='servicesContent' className='w-full h-3/4 flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-10'>
            <div id='image' className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-full flex items-center justify-center rounded-md">
              <img src="/images/impressionT.jpg" alt="multiple services" className="w-full sm:w-3/4 h-full sm:h-3/4 rounded-md shadow-sm shadow-black object-cover" />
            </div>
            <div id='text' className="w-full lg:w-1/2 flex flex-col justify-center gap-4 md:gap-6 pl-0 lg:pl-8">
              <div id='service1' className='flex flex-row gap-4 sm:gap-6 md:gap-10'>
                <div id='linetime' className="flex-shrink-0">
                  <div className="left-0 top-0 -ml-0.5 w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px] rounded-full border-2 border-orange-800" />
                  <div className="top-0 ml-2 h-16 sm:h-18 md:h-20 w-0.5 bg-orange-800" />
                </div>
                <div id='text' className="flex-1">
                  <h3 className="font-bold text-mainGradient text-sm sm:text-base md:text-lg">Impression personnalisée</h3>
                  <p className="text-xs sm:text-sm text-black">Nous vous offrons une livraison rapide et gratuite à partir de 3 pièces</p>  
                </div>
              </div>
              <div id='service2' className='flex flex-row gap-4 sm:gap-6 md:gap-10'>
                <div id='linetime' className="flex-shrink-0">
                  <div className="left-0 top-0 -ml-0.5 w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px] rounded-full border-2 border-orange-800" />
                  <div className="top-0 ml-2 h-16 sm:h-18 md:h-20 w-0.5 bg-orange-800" />
                </div>
                <div id='text' className="flex-1">
                  <h3 className="font-bold text-mainGradient text-sm sm:text-base md:text-lg">Impression personnalisée</h3>
                  <p className="text-xs sm:text-sm text-black">Nous vous offrons une livraison rapide et gratuite à partir de 3 pièces</p>  
                </div>
              </div>
              <div id='service3' className='flex flex-row gap-4 sm:gap-6 md:gap-10'>
                <div id='linetime' className="flex-shrink-0">
                  <div className="left-0 top-0 -ml-0.5 w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px] rounded-full border-2 border-orange-800" />
                  <div className="top-0 ml-2 h-16 sm:h-18 md:h-20 w-0.5 bg-orange-800" />
                </div>
                <div id='text' className="flex-1">
                  <h3 className="font-bold text-mainGradient text-sm sm:text-base md:text-lg">Impression personnalisée</h3>
                  <p className="text-xs sm:text-sm text-black">Nous vous offrons une livraison rapide et gratuite à partir de 3 pièces</p>  
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactSection/>
        <Footer/>
    </div>
  )
}
