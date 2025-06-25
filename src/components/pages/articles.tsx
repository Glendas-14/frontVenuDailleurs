import ProductCard from '../Card/product'
import Footer from '../footer'
import Header from '../navBar'
import BigTitle from '../Title/bigTitle'
import { collections } from '../data/collections' // Assure-toi d'importer tes collections

export default function Articles () {
    // Fusionner tous les produits de toutes les collections
    const allProducts = collections.flatMap(collection => collection.products);

    return(
        <div className="bg-black min-h-screen">
            <Header/>
            <div id='articleSection' className='w-full h-auto bg-simpleGray p-10 flex flex-col gap-10'>
                <BigTitle id="articles">Nos articles</BigTitle>
                <div id='products' className='w-full h-auto flex flex-row flex-wrap items-center justify-center gap-10'>
                    {allProducts.map((product, index) => (
                        <ProductCard
                            key={index}
                            title={product.title ?? 'Article quelconque'}
                            description={product.description ?? 'Description non disponible'}
                            imageUrl={product.imageUrl ?? ''}
                            price={product.price ?? 0}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        </div>
    )
}