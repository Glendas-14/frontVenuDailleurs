import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface CollectionCardProps {
  title: string;
  images: string[]; // Tableau d'images
}

export default function CollectionCard({ title, images }: CollectionCardProps) {
  return (
<div className="w-full sm:w-80 md:w-72 lg:w-80 xl:w-96 h-auto p-4 sm:p-5 flex flex-col justify-center bg-lightGray rounded-lg shadow-md shadow-darkGray">
      <Link to="/collections" className="w-full mb-4">
        <div className="w-full h-64 sm:h-72 md:h-64 lg:h-72 relative overflow-hidden rounded-lg bg-gradient-to-br from-darkGray to-simpleGray">
          {/* Image principale en arrière-plan */}
          {images[0] && (
            <div className="absolute inset-0">
              <img
                src={images[0]}
                alt="Collection principale"
                className="w-full h-full object-cover opacity-30"
              />
            </div>
          )}
          
          {/* Grille d'images en premier plan */}
          <div className="absolute inset-0 p-4 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Image principale (plus grande) */}
              {images[0] && (
                <div className="col-span-2 flex justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={images[0]}
                      alt="Image 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              
              {/* Images secondaires */}
              {images.slice(1, 5).map((image, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full overflow-hidden border-3 border-white shadow-md">
                    <img
                      src={image}
                      alt={`Image ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Overlay gradient pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </Link>

      <div className="mt-4 flex items-center justify-between w-full pt-3 border-t-[1px] border-black">
        <h2 className="text-lg sm:text-xl font-bold text-orangeChoco">{title}</h2>
        <Link
          to="/collection"
          className="bg-orangeChoco hover:bg-secondaryOrange text-white px-4 py-2 rounded-md transition duration-300 shadow-sm shadow-black"
        >
          <Eye className="h-5 w-5 text-white" />
        </Link>
      </div>
    </div>
  );
}