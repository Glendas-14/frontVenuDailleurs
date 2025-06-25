import { collections } from '../data/collections'
import ProductCard from '../Card/product'
import Footer from '../footer'
import Header from '../navBar'
import BigTitle from '../Title/bigTitle'

export default function Collections () {
    return (
        <div className="bg-black min-h-screen">
            <Header/>
            <div id='allCollections' className='h-auto bg-simpleGray p-10 flex flex-col gap-10'>
                <BigTitle id="articles">Nos collections</BigTitle>
                <div id='collections' className='w-full h-auto flex flex-col items-center justify-center gap-16'>
                    {collections.map((collection, idx) => (
                        <div key={idx} className="w-full">
                            <h2 className="text-2xl font-bold mb-4 text-orangeChoco">{collection.title}</h2>
                            <div className='w-full h-auto flex flex-row items-center flex-wrap gap-10'>
                                {collection.products.map((product, index) => (
                                    <ProductCard
                                        key={index}
                                        title={product.title}
                                        description={product.description}
                                        imageUrl={product.imageUrl}
                                        price={product.price}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        </div>
    )
}