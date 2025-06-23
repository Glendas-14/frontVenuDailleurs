import ProductCard from '../Card/product'
import Footer from '../footer'
import Header from '../navBar'
import BigTitle from '../Title/bigTitle'
import products from '../data/products'



export default function Articles () {
    return(
        <div className="bg-black h-screen">
            <Header/>
            <div id='articleSection' className='h-auto bg-simpleGray p-10 flex flex-col gap-10'>
                <BigTitle id="articles">Nos articles</BigTitle>
                <div id='products' className='w-full h-auto flex flex-col items-center justify-center gap-10'>
                    <div className='w-full h-auto flex flex-row items-center justify-center gap-10'>
                        {products.slice(0, 4).map((product, index) => (
                            <ProductCard
                                key={index}
                                title={product.title ?? 'Article quelconque'}
                                description={product.description ?? 'Description non disponible'}
                                imageUrl={product.imageUrl ?? ''}
                                price={product.price ?? 0}
                            />
                        ))}
                    </div>
                    <div className='w-full h-auto flex flex-row items-center justify-center gap-10'>
                        {products.slice(0, 4).map((product, index) => (
                            <ProductCard
                                key={index}
                                title={product.title ?? 'Article quelconque'}
                                description={product.description ?? 'Description non disponible'}
                                imageUrl={product.imageUrl ?? ''}
                                price={product.price ?? 0}
                            />
                        ))}
                    </div>
                    <div className='w-full h-auto flex flex-row items-center justify-center gap-10'>
                        {products.slice(0, 4).map((product, index) => (
                            <ProductCard
                                key={index}
                                title={product.title ?? 'Article quelconque'}
                                description={product.description ?? 'Description non disponible'}
                                imageUrl={product.imageUrl ?? ''}
                                price={product.price ?? 0}
                            />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}