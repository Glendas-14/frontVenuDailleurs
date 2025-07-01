import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";


interface ProductCardProps {
    title: string;
    description: string;
    imageUrl: string;
    price: number;
}
export default function ProductCard({ title, description, imageUrl, price }: ProductCardProps) {
    return (
      <div className="w-full sm:w-80 md:w-64 lg:w-60 xl:w-64 h-auto bg-none border-r-black border-b-black border-[1px] p-2 hover:border-none hover:shadow-xl shadow-black transition-all duration-300">
      <div className="w-full h-full p-4 sm:p-6 flex flex-col items-center bg-whiteGray">
        <Link to="/products" className="w-full mb-4">
          <img 
            src={imageUrl} 
            alt="Product" 
            className="w-full h-32 sm:h-28 md:h-30 lg:h-32 xl:h-30 object-cover mx-auto drop-shadow-[15px_6px_12px_rgba(0,0,0)]" 
          />
        </Link>
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 text-center mb-2">{title}</h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2 text-center line-clamp-2">{description}</p>
        <div className="mt-4 flex items-center justify-between w-full">
          <span className="text-lg font-bold text-gray-800">{`${price}$`}</span>
          <button className="bg-mainGradient text-white px-4 py-2 rounded-md hover:bg-secondaryGradient transition duration-300">
            <ShoppingCart className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
    )
  }