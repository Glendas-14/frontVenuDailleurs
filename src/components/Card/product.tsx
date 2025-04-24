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
      <div className="w-1/4 h-full bg-none border-r-black border-b-black border-[1px] p-2 hover:border-none hover:shadow-xl shadow-black">
        <div className="w-full h-full p-6 flex flex-col items-center bg-whiteGray">
            <Link to={`/products`}><img src={imageUrl} alt="Product" className="w-48 h-28 mx-auto mb-4 drop-shadow-[15px_6px_12px_rgba(0,0,0)]" /></Link>
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-600 mt-2">{description}</p>
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